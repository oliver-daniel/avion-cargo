import Page from "../../containers/Page";
import Head from "next/head";
import routes from "../../components/routes";

import { withTranslation } from "react-i18next";

const LanguageSensitivePage = ({ lang, route = "home", tReady, t }) => {
  const entry =
    route === "home"
      ? routes.home
      : Object.values(routes).find((entry) => entry[lang].href === route);
  const { Component, title } = entry;

  return (
    <Page id={route}>
      <Head>
        <title>{t(title)} | Avion Cargo</title>
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
    if (en.href === "") {
      return;
    }
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
