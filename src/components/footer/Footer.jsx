import { Trans } from "react-i18next";

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="row between-xs middle-xs">
    <p>
      &copy; Avion Cargo {year}. <Trans>Website built by</Trans>{" "}
      <a target="_blank" rel="noreferrer" href="https://oliver.danielnet.ca">
        Oliver Daniel
      </a>
      .
    </p>
    <a target="_blank" rel="noreferrer" href="https://www.polymtl.ca/"><img src="/img/poly_logo.png" alt=""/></a>
  </footer>
);

export default Footer;