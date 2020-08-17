import Markdown from "../../utils/markdown";

const ProjectsPage = ({ projects, content, i18n: { language } }) => {
  const [[sponsorMessage], ...messages] = content;
  return (
    <div className="content">
      <div className="container">
        <Markdown source={sponsorMessage} />
        <ul>
          {projects?.map(({ content: src, data: { title } }, i) => (
            <li key={i}>
              {title}
              <br />
              <Markdown source={src} />
            </li>
          )) || null}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
