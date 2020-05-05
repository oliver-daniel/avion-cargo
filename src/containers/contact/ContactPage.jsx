import * as Feather from "react-feather";
import { Trans } from "react-i18next";

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

const ContactPage = () => {
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
              <div className="col-xs-2 col-sm-4 col-sm-offset-1">
                <div className="row center-xs">
                  {SOCIALS.map(({ href, Icon }) => (
                    <div className="col-xs-12 col-sm-6">
                      <a href={href} target="_blank">
                        <Icon className="icon" size={40} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xs col-xs-offset-1">
                <form action="">
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
