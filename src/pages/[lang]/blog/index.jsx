export default () => <div>This is the blog.</div>;

export async function getStaticProps({ params: props }) {
  return {
    props,
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
