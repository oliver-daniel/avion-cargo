import imgs from "../../utils/carousel";
import { Carousel as ICarousel } from "react-responsive-carousel";

const CAROUSEL_CONFIG = {
  showThumbs: false,
  showStatus: false,
  useKeyboardArrows: false,
  emulateTouch: false,
  swipeable: false, //TODO: broken
  autoPlay: true,
  infiniteLoop: true,
  interval: 5000,
};

// TODO: duration bar

const Carousel = ({ images, lang }) => {
  const msg = {
    en: "SEE OUR IDEAS TAKE FLIGHT.",
    fr: "VOIR NOS IDÉES DÉCOLLER.",
  }[lang];
  return (
    <div className="carousel">
      <ICarousel {...CAROUSEL_CONFIG}>
        {images.map(({ name, img, credit }) => (
          <div>
            <img src={img} alt={name} />
            <p className="legend">{credit}</p>
          </div>
        ))}
      </ICarousel>
      <p className="overlay">{msg}</p>
    </div>
  );
};

export async function getStaticProps({params}) {
  const images = imgs.getCarouselImages();
  console.log(params);
  return {
    props: { images, ...params },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { lang: "en" } }, { params: { lang: "fr" } }],
    fallback: false,
  };
}

export default Carousel;
