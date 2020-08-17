import Page from "../../containers/Page";
import Head from "next/head";
import routes from "../../components/routes";
import matter from "gray-matter";
import path from "path";

import { getProjectsByLanguage } from "../../utils/projects";
import { getExecBiosByLanguage } from "../../utils/bios";

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
        tReady ? (
          <Component {...pageProps} tReady={tReady} t={t} />
        ) : (
          <div>Loading...</div>
        )
        // TODO: prettier
      }
    </Page>
  );
};

function getPageMarkdown(lang, slug) {
  const POSTS_DIR = `public/content/pages/${lang}`;
  try {
    return matter.read(path.join(POSTS_DIR, `${slug.replace(".md", "")}.md`));
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
  const slug = route ? route : lang === "en" ? "home" : "accueil";

  const entry = Object.values(routes).find(
    (rt) => !route || rt[lang].href === slug
  );

  const content =
    entry[lang].pages?.map((fn) =>
      getPageMarkdown(lang, fn).content.split("\n---\n")
    ) || [];

  const data = {
    ...props,
    content,
  };

  if (["about", "equipe"].includes(slug)) {
    data.bios = getExecBiosByLanguage(lang);
  } else if (/projec?ts/.test(slug)) {
    const projects = getProjectsByLanguage(lang);
    data.projects = projects;
  }

  return {
    props: data,
  };
}

export default withTranslation()(LanguageSensitivePage);
