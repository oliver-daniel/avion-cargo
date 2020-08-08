import Markdown from "react-markdown/with-html";

const AboutPage = ({ content, bios, i18n: { language } }) => {
  return (
    <div className="content">
      <div className="container">
        {bios.length} bios to show.
        {content.map((section) => (
          <div className="row">
            {section.map((src) => (
              <div className="col-sm-12 col-lg">
                <Markdown source={src} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
