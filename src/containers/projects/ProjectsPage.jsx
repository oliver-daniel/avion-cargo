import Markdown from "../../utils/markdown";

const ProjectsPage = ({ content: projects, i18n: { language } }) => {
  return (
    <div className="content">
      <div className="container">
        <ul>
          {projects.map(({ content: src, data: { title } }, i) => (
            <li key={i}>
              {title}
              <br />
              <Markdown source={src} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
