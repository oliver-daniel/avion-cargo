import Markdown from "../../utils/markdown";
import { Trans } from "react-i18next";

const ProjectsPage = ({ projects, content, i18n: { language } }) => {
  const [[sponsorMessage], ...messages] = content;

  const micro_projects = projects.filter(({ data }) =>
    /micro/gi.test(data.title)
  );
  const regular_projects = projects.filter(({ data }) =>
    /regul/gi.test(data.title)
  );
  return (
    <div className="content">
      <div className="container">
        <h1>
          <Trans>Projects</Trans>
        </h1>
        <Markdown source={sponsorMessage} />
        <div className="row">
          {/* {projects?.map(({ content: src, data: { title } }, i) => (
              <li key={i}>
                {title}
                <br />
                <Markdown source={src} />
              </li>
            )) || null} */}
          {[
            [regular_projects, "Regular Class"],
            [micro_projects, "Micro Class"],
          ].map(([project_class, title]) => (
            <div className="col-xs-12 col-md-6">
              <h2>
                <Trans>{title}</Trans>
              </h2>
              <div className="well">
                {project_class
                  .sort(
                    ({ data: { date: a_date } }, { data: { date: b_date } }) =>
                      b_date.localeCompare(a_date)
                  )
                  .map(({ content: src, data: { title, date } }) => (
                    <div className="card">
                      <div className="details">
                        <div className="title">
                          {title} – {date}
                        </div>
                        <Markdown source={src} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
