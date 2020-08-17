import { useState } from "react";
import { Trans } from "react-i18next";
import Markdown from "../../utils/markdown";

const HorizontalCard = ({
  content,
  data: { name: title, picture },
  isClicked,
  setClicked,
  id,
  t,
}) => {
  const [name, role] = title.split(" - ");

  const toggleClick = () => (isClicked ? setClicked(-1) : setClicked(id));

  let src;

  if (picture) {
    const [before, after] = picture.split("/image/upload");
    src = `${before}/image/upload/g_face/${after}`;
  } else {
    src = picture;
  }

  return (
    <div className={`has-card col-xs-12 col-md-${isClicked ? "12" : 6}`}>
      <div className={`card ${isClicked && "clicked"}`} onClick={toggleClick}>
        <div
          className="media"
          style={{ backgroundImage: `url(${src})` }}
          title={name}
        />
        <div className="details">
          <span className="title">{name}</span> <br />
          <span className="subtitle">{role}</span>
          <p>{content}</p>
        </div>
        <span className="see-more">
          {isClicked ? t("SEE LESS") : t("SEE MORE")}
        </span>
      </div>
    </div>
  );
};

const TEAM_PHOTO =
  "https://res.cloudinary.com/decninixz/image/upload/v1595283815/avion_cargo_site_web_full_res-08202_ne6ywj.jpg";

const AboutPage = ({ content, bios, t, tReady }) => {
  const [missionHistory, [_sponsors]] = content;
  const [mention, ...sponsors] = _sponsors.split("\n\n");
  const [clickIndex, setClickIndex] = useState(-1);
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url('${TEAM_PHOTO}')`,
        }}
      />
      <div className="content">
        <div className="container">
          <div className="row">
            {missionHistory.map((src) => (
              <div className="col-sm-12 col-lg">
                <Markdown source={src} />
              </div>
            ))}
          </div>
          <h3>
            <Trans>Execs</Trans>
          </h3>
          <div className="row">
            {bios.map((bio, i) => (
              <HorizontalCard
                {...bio}
                id={i}
                isClicked={clickIndex === i}
                setClicked={setClickIndex}
                t={t}
              />
            ))}
          </div>
          <h3>
            <Trans>Sponsors</Trans>
          </h3>
          <p className="sponsors__mention">{mention}</p>
          <div className="row around-xs well">
            {sponsors.map((src) => (
              <div className="card">
                <div className="details">
                  <Markdown source={src} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
