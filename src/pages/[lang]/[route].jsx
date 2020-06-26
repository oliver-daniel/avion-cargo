import Page from "../../containers/Page";
import Head from "next/head";
import routes from "../../components/routes";
import matter from "gray-matter";
import path from "path";

import { withTranslation } from "react-i18next";

const LanguageSensitivePage = ({
  lang,
  route = "home",
  tReady,
  t,
  ...pageProps
}) => {
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
        tReady ? <Component {...pageProps} /> : <div>Loading...</div>
        // TODO: prettier
      }
    </Page>
  );
};

function getPageMarkdown(lang, slug) {
  const POSTS_DIR = `public/content/pages/${lang}`;
  try {
    return matter.read(path.join(POSTS_DIR, `${slug}.md`));
  } catch {
    return { content: "COMING SOON!", data: {} };
  }
}

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
  const { lang, route } = props;  
  const slug = route ? route : lang === "en" ? "homepage" : "accueil";
  let { content } = getPageMarkdown(lang, slug);
  content = content.split("\n---\n");

  return {
    props: {
      ...props,
      content,
    },
  };
}

export default withTranslation()(LanguageSensitivePage);
