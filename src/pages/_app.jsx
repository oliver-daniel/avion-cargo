import "reset-css";
import "flexboxgrid2";
import "../styles/app.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import i18n from "../i18n/i18n";
import { I18nextProvider } from "react-i18next";

function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default App;
