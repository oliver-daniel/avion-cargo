import * as Feather from "react-feather";
import { createRef } from "react";
import { Trans, withTranslation } from "react-i18next";
import Tooltip from "react-tooltip";
import fetch from "cross-fetch";

const SOCIALS = [
  {
    href: "https://www.facebook.com/AvionCargoPolytechnique",
    Icon: Feather.Facebook,
  },
  {
    href: "https://www.instagram.com/avioncargopolymtl/",
    Icon: Feather.Instagram,
    tip: "@avioncargopolymtl",
  },
  {
    href: "https://www.linkedin.com/company/avion-cargo-polytechnique/",
    Icon: Feather.Linkedin,
  },
  {
    href: "https://www.youtube.com/channel/UCuMNYOMKZq8DYLp2nsn_FOA",
    Icon: Feather.Youtube,
  },
  {
    Icon: () => (
      <Feather.Mail className="icon" size={48} data-tip data-for="email" />
    ),
  },
];

const form = createRef();
const sendForm = (e) => {
  e.preventDefault();
  if (typeof window === undefined) {
    return;
  }

  const data = Object.fromEntries(new FormData(form.current).entries());

  fetch("https://formspree.io/moqkqklv", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.ok) {
        alert("Email sent successfully.");
        form.current.reset();
      }
    });
};

const ContactPage = ({ t, i18n }) => {
  return (
    <div className="content">
      <div className="container">
        <div className="card">
          <h1>
            <Trans>
              LET'S STAY IN <span className="keyword">TOUCH.</span>
            </Trans>
          </h1>
          <div className="container">
            <div className="row middle-xs">
              <div className="col-xs-1 col-md col-md-offset-1">
                <div id="socials" className="row center-xs">
                  {SOCIALS.map(({ href, Icon, tip }) => (
                    <div className="col-xs-12 col-sm-6">
                      <a href={href} target="_blank" rel="noreferrer">
                        <Icon
                          className="icon"
                          size={48}
                          {...(tip && {
                            "data-tip": tip,
                          })}
                        />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="row center-xs"></div>
              </div>
              <div className="col-xs-11 col-sm col-sm-offset-1 center-xs">
                <form ref={form} action="">
                  <label className="form-title" htmlFor="">
                    <Trans>Drop us a line</Trans>
                  </label>
                  <input
                    type="hidden"
                    name="subject"
                    value={t("You've got mail!")}
                  />
                  <input type="hidden" name="_language" value={i18n.language} />
                  <div>
                    <input type="text" name="name" placeholder={t("Name")} />
                  </div>
                  <div>
                    <input type="email" name="email" placeholder={t("Email")} />
                  </div>
                  <textarea
                    name="message"
                    rows="7"
                    placeholder={t("Message")}
                  ></textarea>
                  <button onClick={sendForm}>
                    <Trans>SEND</Trans>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tooltip
        id="email"
        aria-haspopup
        effect="solid"
        place="bottom"
        delayHide={500}
        delayUpdate={200}
      >
        {/* TODO: get Yankee for this! */}
        <div className="row tooltip">
          <div className="col-xs">
            <Trans>Room: C-572 Postal deliveries:</Trans> <br />
            <br />
            <Trans>École Polytechnique de Montréal</Trans> <br />
            <Trans>Under the name of Avion Cargo</Trans> <br />
            <Trans>Université de Montréal campus</Trans> <br />
            <Trans>Postal box 6079, Downtown branch</Trans> <br />
            <Trans>Montréal (Québec), H3C 3A7</Trans>
          </div>
          <div className="col-xs">
            <Trans>Delivery and shipment:</Trans>
            <br />
            <br />
            <Trans>École Polytechnique de Montréal</Trans>
            <br />
            <Trans>Under the name of Avion Cargo</Trans>
            <br />
            <Trans>Université de Montréal campus</Trans>
            <br />
            <Trans>2900 Édouard Montpetit</Trans>
            <br />
            <Trans>Montréal (Québec), H3T 1J4</Trans>
            <br />
            <br />
            <Trans>Email address:</Trans>{" "}
            <a href="mailto:avioncargo@polymtl.ca">avioncargo@polymtl.ca</a>
          </div>
        </div>
      </Tooltip>
      <Tooltip effect="solid" place="bottom" />
    </div>
  );
};

export default withTranslation()(ContactPage);
