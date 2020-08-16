import Markdown from '../../utils/markdown';

const HomePage = ({ content, i18n: { language } }) => {
  const [intro] = content;
  return (
    <>
      <iframe src={`/carousel/${language}`} frameBorder="0" />
      <div className="content">
        <div className="container">
          <div className="row">
            {intro.map((src) => (
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
