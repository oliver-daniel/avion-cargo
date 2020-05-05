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
      <Feather.Mail className="icon" size={40} data-tip data-for="email" />
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
      'Content-Type': "application/json",
    },
    body: JSON.stringify({data})
  }).then(res => res.json())
  .then(res => {
    if (res.ok){
      alert('Email sent successfully.');
      form.current.reset();
    }
  })
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
                  {SOCIALS.map(({ href, Icon }) => (
                    <div className="col-xs-12 col-sm-6">
                      <a href={href} target="_blank" rel="noreferrer">
                        <Icon className="icon" size={40} />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="row center-xs"></div>
              </div>
              <div className="col-xs col-sm-offset-1 center-xs">
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
            Local: C-572 Envois postaux: <br />
            <br />
            École Polytechnique de Montréal <br />
            À l'attention de l'Avion Cargo <br />
            Campus de l'Université de Montréal <br />
            Case postale 6079, Succursale "Centre-Ville" <br />
            Montréal (Québec), H3C 3A7
          </div>
          <div className="col-xs">
            Expédition et livraison:
            <br />
            <br />
            École Polytechnique de Montréal <br />
            À l'attention de l'Avion Cargo <br />
            Campus de l'Université de Montréal <br />
            2900 Édouard Montpetit <br />
            Montréal (Québec), H3T 1J4 <br />
            <br />
            Addresse email:{" "}
            <a href="mailto:avioncargo@polymtl.ca">avioncargo@polymtl.ca</a>
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

export default withTranslation()(ContactPage);
