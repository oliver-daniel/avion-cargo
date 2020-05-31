import Page from "../../../containers/Page";
import { getPostsByLanguage } from "../../../utils/posts";
import Link from "next/link";

export default ({ posts }) => (
  <Page>
    <div>This is the blog.</div>
    <p>bitch.</p>
    <p>I can show up to {posts.length} posts.</p>

    <ul>
      {posts.map((post) => (
        <li>
          <Link href="blog/[slug]" as={`blog/${post.data.slug}`}>
            <a>{post.data.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Page>
);

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
    fallback: false,
  };
}
