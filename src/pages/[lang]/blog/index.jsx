import Page from "../../../containers/Page";
import { getPostsByLanguage } from "../../../utils/posts";
import { Trans, withTranslation } from "react-i18next";
import Link from "next/link";
import Head from "next/head";
import moment from "moment";

const VerticalCard = ({
  content,
  data: { author, locale_relative_date: date, slug, thumbnail, title },
}) => {
  return (
    <Link href="blog/[slug]" as={`blog/${slug}`}>
      <div className="card">
        <div
          className="media"
          style={{
            backgroundImage: `url('${thumbnail}')`,
          }}
        />
        <div className="details">
          <div className="title">{title}</div>
          <div className="subtitle">{author}</div>
          <div className="subtitle">{date}</div>
          <p>{content}</p>
          <div className="see-more">
            <Trans>SEE MORE</Trans>
          </div>
        </div>
      </div>
    </Link>
  );
};

const HERO_IMG =
  "https://res.cloudinary.com/decninixz/image/upload/v1595352610/P1070984_saygoq.jpg";

const BlogPage = ({ posts }) => (
  <>
    <Head>
      <title>Blog | Avion Cargo</title>
    </Head>
    <Page id="blog">
      <div
        className="hero"
        style={{
          backgroundImage: `url('${HERO_IMG}')`,
        }}
      />
      <div className="content">
        <h2>
          <Trans>Latest updates</Trans>
        </h2>
        <div className="row well">{posts?.map(VerticalCard) || null}</div>
      </div>
    </Page>
  </>
);

export default withTranslation()(BlogPage);

export async function getStaticProps({ params }) {
  const posts = getPostsByLanguage(params.lang);
  moment.locale(params.lang);

  posts.forEach((post) => {
    post.data.locale_relative_date = moment(
      post.data.publish_date.slice(1, -1)
    ).fromNow();
  });

  return {
    props: {
      ...params,
      posts,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          lang: "en",
        },
      },
      {
        params: {
          lang: "fr",
        },
      },
    ],
    fallback: true,
  };
}
