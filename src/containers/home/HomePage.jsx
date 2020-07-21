import Markdown from "react-markdown/with-html";

const HomePage = ({ content, i18n: { language } }) => {
  return (
    <>
      <iframe src={`/carousel/${language}`} frameBorder="0" />
      <div className="content">
        <div className="container">
          <div className="row">
            {content.map((src) => (
              <div className="col-sm-12 col-lg">
                <Markdown source={src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
