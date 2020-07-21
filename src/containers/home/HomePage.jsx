import Markdown from "react-markdown/with-html";
import { useEffect } from "react";
import { withTranslation } from "react-i18next";

const HomePage = ({ content, t }) => {
  return (
    <>
      <iframe src={`/carousel?msg=${t("SEE OUR IDEAS TAKE FLIGHT.")}`} frameBorder="0"/>
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

export default withTranslation()(HomePage);
