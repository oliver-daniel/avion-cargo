import { withTranslation } from "react-i18next";
import NavLink from "../routes/NavLink";
import Router from "next/router";
import routes from "../routes";

const handleLanguageChange = (i18n) => ({ target: { lang: targetLang } }) => {
  const route = window.location.pathname.split("/").slice(1);

  if (route.length === 1) {
    i18n.changeLanguage(targetLang);
    return Router.replace("/[lang]", `/${targetLang}`);
  }

  const lang = i18n.language.split("-")[0];

  const key = Object.keys(routes).find(
    (k) => routes[k][lang].href === route[1]
  );
  const dest = routes[key][targetLang].href;

  const url = `/${targetLang}/${dest}`;

  i18n.changeLanguage(targetLang);
  Router.replace("/[lang]/[route]", url, { shallow: true });
};

const LanguageSwitch = ({ i18n }) => (
  <div id="language-switcher">
    <span
      lang="en"
      onClick={handleLanguageChange(i18n)}
      className={i18n.language === "en" ? "active" : ""}
    >
      EN
    </span>
    <span>{" | "}</span>
    <span
      lang="fr"
      onClick={handleLanguageChange(i18n)}
      className={i18n.language === "fr" ? "active" : ""}
    >
      FR
    </span>
  </div>
);

const Header = ({ i18n, t, tReady }) => (
  <header id="Header" className="row between-xs middle-xs">
    {tReady && (
      <>
        <div className="col-xs-11 col-sm-10 col-sm-offset-1">
          <div className="row around-xs middle-xs">
            <div className="col-xs">
              <NavLink route="about">{t("About Us")}</NavLink>
            </div>
            <div className="col-xs">
              <NavLink route="projects">{t("Projects")}</NavLink>
            </div>
            <div className="col-xs">
              <NavLink route="home" href="/[lang]">
                <div id="logo" />
              </NavLink>
            </div>
            <div className="col-xs">
              <NavLink route="blog" href="/[lang]/blog">
                {t("Blog")}
              </NavLink>
            </div>
            <div className="col-xs">
              <NavLink route="contact">{t("Contact")}</NavLink>
            </div>
          </div>
        </div>
        <div className="col-xs-1">
          <LanguageSwitch i18n={i18n} />
        </div>
      </>
    )}
  </header>
);

export default withTranslation()(Header);
