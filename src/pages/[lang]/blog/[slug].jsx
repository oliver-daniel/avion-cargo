import Page from "../../../containers/Page";
import Markdown from "react-markdown";
import Head from "next/head";
import { getPostsByLanguage, getPost } from "../../../utils/posts";

export default ({ post }) => {
  const { content, data } = post;
  const { title, slug } = data;
  return (
    <>
      <Head>
        <title>{title} | Avion Cargo</title>
      </Head>
      <Page className="blog-post">
        <div className="container">
          <article key={slug}>
            <h1>{title}</h1>
            <div className="content">
              <Markdown source={content} />
            </div>
          </article>
        </div>
      </Page>
    </>
  );
};

export async function getStaticProps({ params: { lang, slug } }) {
  const post = getPost(lang, slug);
  return {
    props: { post },
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
