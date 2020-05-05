import * as Feather from "react-feather";
import { Trans, withTranslation } from "react-i18next";

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
];

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
                      <a href={href} target="_blank">
                        <Icon className="icon" size={40} ></Icon>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xs col-sm-offset-1 center-xs">
                <form action="https://formspree.io/avioncargo@polymtl.ca" method="POST">
                  <label className="form-title" htmlFor="">
                    <Trans>Drop us a line</Trans>
                  </label>
                  <input type="hidden" name="subject" value={t("You've got mail!")}/>
                  <input type="hidden" name="_language" value={i18n.language}/>
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
                  <button type="submit">
                    <Trans>SEND</Trans>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(ContactPage);
