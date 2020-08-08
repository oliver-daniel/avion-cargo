import Markdown from "react-markdown/with-html";

const ProjectsPage = ({ content: projects, i18n: { language } }) => {
  return (
    <div className="content">
      <div className="container">
        {projects.length} projects to show. <br />
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
