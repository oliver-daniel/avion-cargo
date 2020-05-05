import Page from '../../../containers/Page'

export default () => <Page>
  <div>This is the blog.</div>
</Page>;

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
