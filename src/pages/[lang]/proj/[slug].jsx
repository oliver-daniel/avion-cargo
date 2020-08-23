import Page from "../../../containers/Page";
import Markdown from "../../../utils/markdown";
import Head from "next/head";
import { getProjectsByLanguage, getProject } from "../../../utils/projects";

const ProjectDetails = ({
  lang,
  project: {
    content,
    data: { title, date: year, class: proj_class },
  },
}) => {
  const class_trans = {
    en: { micro: "micro", regular: "regular" },
    fr: { micro: "micro", regular: "régulière" },
  }[lang][proj_class];
  return (
    <>
      <Head>
        <title>
          {title} ({year}) | Avion Cargo
        </title>
      </Head>
      <Page className="project-details">
        <div className="container">
          <h1>
            {title} – {year}
          </h1>
          <h4 className="details">
            <small>{class_trans}</small>
          </h4>
        </div>
        <div className="content">
          <Markdown source={content} />
        </div>
      </Page>
    </>
  );
};

export default ProjectDetails;

export async function getStaticProps({ params: { lang, slug } }) {
  const project = getProject(lang, slug);
  return {
    props: {
      lang,
      project,
    },
  };
}

export async function getStaticPaths() {
  const [enProjects, frProjects] = ["en", "fr"].map((lang) => {
    const projects = getProjectsByLanguage(lang);
    return projects.map(({ data: { slug } }) => ({
      params: {
        lang,
        slug,
      },
    }));
  });
  return {
    paths: [...enProjects, ...frProjects],
    fallback: false,
  };
}
