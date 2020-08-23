import Markdown from "../../utils/markdown";
import { Trans } from "react-i18next";
import Link from "next/link";

const ProjectCard = ({ content: src, data: { title, date, slug, language } }) => {
  const first_image = src.match(/\!\[.*\]\((.+)\)/);
  return (
    <Link href="/[lang]/proj/[slug]" as={`/${language}/proj/${slug}`}>
      <div className="card">
        <div className="details">
          {first_image && (
            <div
              className="media"
              style={{
                backgroundImage: `url('${first_image[1]}')`,
              }}
            />
          )}
          <div className="title">{title}</div>
          <div className="subtitle">{date}</div>
          <Markdown source={src} />
          <div className="see-more">
            <Trans>SEE MORE</Trans>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProjectsPage = ({ projects, content, i18n: {} }) => {
  const [[sponsorMessage], ...messages] = content;

  const micro_projects = projects.filter(({ data }) => data.class === "micro");
  const regular_projects = projects.filter(
    ({ data }) => data.class === "regular"
  );
  return (
    <div className="content">
      <div className="container">
        <h2>
          <Trans>Rocking the runway since</Trans> <strong>1996.</strong>
        </h2>
        <Markdown source={sponsorMessage} />
        <div className="row">
          {[
            [regular_projects, "Regular Class"],
            [micro_projects, "Micro Class"],
          ].map(([project_class, title]) => (
            <div className="col-xs-12 col-md-6">
              <h2>{<Trans>{title}</Trans>}</h2>
              <div className="well">
                {project_class
                  .sort(
                    ({ data: { date: a_date } }, { data: { date: b_date } }) =>
                      b_date.localeCompare(a_date)
                  )
                  .map(ProjectCard)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
