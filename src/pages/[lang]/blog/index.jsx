import Page from "../../../containers/Page";
import { getPostsByLanguage } from "../../../utils/posts";
import Link from "next/link";
import Head from "next/head";

const BlogPage = ({ posts }) => (
  <>
    <Head>
      <title>Blog | Avion Cargo</title>
    </Head>
    <Page>
      <div>This is the blog.</div>
      <p>bitch.</p>
      <p>I can show up to {posts?.length} posts.</p>

      <ul>
        {posts?.map((post) => (
          <li>
            <Link href="blog/[slug]" as={`blog/${post?.data?.slug}`}>
              <a>{post?.data?.title}</a>
            </Link>
          </li>
        )) || null}
      </ul>
    </Page>
  </>
);

export default BlogPage;

export async function getStaticProps({ params }) {
  const posts = getPostsByLanguage(params.lang);
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
