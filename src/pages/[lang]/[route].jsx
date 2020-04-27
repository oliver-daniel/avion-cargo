import Page from "../../containers/Page";
import Head from "next/head";
import routes from "../../components/routes";

import { withTranslation } from "react-i18next";

const LanguageSensitivePage = ({ lang, route = "", tReady, t }) => {  
  const entry = Object.values(routes).find(
    (entry) => entry[lang].href === route
  );
  const { Component, title } = entry;
  

  return (
    <Page>
      <Head>
        <title>{t(title)}</title>
      </Head>
      {
        tReady ? <Component /> : <div>Loading...</div>
        // TODO: prettier
      }
    </Page>
  );
};

export async function getStaticPaths() {
  const paths = [];
  Object.values(routes).forEach(({ en, fr }) => {
    paths.push({
      params: {
        lang: "en",
        route: en.href,
      },
    });
    paths.push({
      params: {
        lang: "fr",
        route: fr.href,
      },
    });
  });
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: props }) {
  return {
    props,
  };
}

export default withTranslation()(LanguageSensitivePage);
