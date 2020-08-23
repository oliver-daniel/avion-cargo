import Page from "../../../containers/Page";
import Markdown from "../../../utils/markdown";
import Head from "next/head";
import { Trans, withTranslation } from "react-i18next";
import { getPostsByLanguage, getPost } from "../../../utils/posts";

import moment from "moment";
import "moment/locale/fr-ca";

const PostPage = ({ post, locale_date, t }) => {
  const { content, data } = post;
  const { title, slug, author, thumbnail } = data;

  return (
    <>
      <Head>
        <title>{title} | Avion Cargo</title>
      </Head>
      <Page className="blog-post">
        <div className="container">
          <article key={slug}>
            <h1>{title}</h1>
            <h4 className="details">
              <small>
                <Trans>By</Trans> {author} – 
                {locale_date}
              </small>
            </h4>
            <div className="content">
              {thumbnail && <img src={thumbnail} alt="" />}
              <Markdown source={content} />
            </div>
          </article>
        </div>
      </Page>
    </>
  );
};

export default withTranslation()(PostPage);

export async function getStaticProps({ params: { lang, slug } }) {
  const post = getPost(lang, slug);
  const fmt = {
    en: "MMMM DD, YYYY",
    fr: "DD MMMM YYYY",
  }[lang];

  moment.locale(lang);

  const locale_date = moment(
    post.data.publish_date,
    "'YYYY-MM-DD'",
    true
  ).format(fmt);

  return {
    props: {
      lang,
      post,
      locale_date,
    },
  };
}

export async function getStaticPaths() {
  const [enPosts, frPosts] = ["en", "fr"].map((lang) => {
    const posts = getPostsByLanguage(lang);
    return posts.map(({ data: { slug } }) => ({
      params: {
        lang,
        slug,
      },
    }));
  });

  return {
    paths: [...enPosts, ...frPosts],
    fallback: false,
  };
}
