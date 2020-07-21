import imgs from "../utils/carousel";
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

const Carousel = ({ images, msg }) => {
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

export async function getServerSideProps({ query }) {
  const images = imgs.getCarouselImages();
  const { msg } = query;
  return {
    props: { images, msg },
  };
}

export default Carousel;
