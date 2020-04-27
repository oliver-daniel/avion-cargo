export { default, getStaticProps } from "./[route]";

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
