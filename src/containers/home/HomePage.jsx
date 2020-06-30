import { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import Markdown from "react-markdown/with-html";

const CAROUSEL_CONFIG = {
  showThumbs: false,
  showStatus: false,
  useKeyboardArrows: false,
  emulateTouch: true,
  swipeable: true,
  autoPlay: true,
  infiniteLoop: true,
  interval: 5000,
};

// TODO: duration bar

const HomePage = ({ t, content }) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const el = document.querySelector(".slider-wrapper");
      el.style.setProperty("--content", `"${t("SEE OUR IDEAS TAKE FLIGHT.")}"`);
    }
  });

  return (
    <>
      <Carousel {...CAROUSEL_CONFIG}>
        {[1, 1, 1].map(() => (
          <div>
            <img
              src={
                "https://source.unsplash.com/1600x900/?image=" +
                Math.floor(Math.random() * 1000)
              }
              alt=""
            />
            <p className="legend">Photo!</p>
          </div>
        ))}
      </Carousel>
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
