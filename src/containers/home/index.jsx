import { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";

const CAROUSEL_CONFIG = {
  showThumbs: false,
  showStatus: false,
  useKeyboardArrows: false,
  // emulateTouch: false,
  swipeable: false,
  autoPlay: true,
  infiniteLoop: true,
  interval: 5000,
};

// TODO: duration bar

const HomePage = ({t}) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const el = document.querySelector(".slider-wrapper");
      console.log(t("Boop"));
      
      el.style.setProperty("--content", `"${t("SEE OUR IDEAS TAKE FLIGHT.")}"`);
    }
  });
  return (
    <>
      <Carousel {...CAROUSEL_CONFIG}>
        {[1, 1, 1].map(() => (
          <div>
            <img
              src={
                "https://source.unsplash.com/1600x900/?image=" +
                Math.floor(Math.random() * 1000)
              }
              alt=""
            />
            <p className="legend">Photo!</p>
          </div>
        ))}
      </Carousel>
      <div className="content">
        <h1>
          LOREM IPSUM DOLOR SIT <span className="keyword">AMET.</span>
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-xs">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                id nulla veniam consectetur ut veritatis nam quaerat animi
                aliquam, ducimus tenetur atque nemo, distinctio reiciendis totam
                ab, ea nobis maxime at. Natus, ex explicabo, optio, quos
                voluptas non praesentium sit sunt quisquam possimus iure
                officia? Commodi laudantium mollitia fugiat magni officiis
                ratione corrupti explicabo rem, doloribus reprehenderit animi
                hic necessitatibus voluptatem iste labore! Veritatis sit quam
                earum consequatur. Molestias, earum. Ipsam modi odio, magnam
                eligendi sit quos in temporibus, inventore laboriosam amet illo
                blanditiis nostrum perspiciatis! Eius quis minima velit harum
                saepe odio suscipit amet asperiores eaque qui, minus illo
                cupiditate voluptate dicta eligendi mollitia! Dolorem in,
                officia nobis quo repudiandae deleniti nisi necessitatibus, ad
                eius sequi corrupti aliquid eligendi quae ab dolorum. Tempore
                dolorem libero distinctio quos, commodi iusto quia maiores quae
                beatae. Nam dolor repellat maiores dignissimos quis fuga
                voluptatem dolore recusandae, beatae tempora excepturi illum
                error voluptatibus?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                neque magni at eligendi eos facilis cumque id tempore ex
                consequatur consequuntur iste, officiis aspernatur accusamus
                dolore! Rerum pariatur assumenda tempore debitis harum ducimus
                reprehenderit. Nihil eum molestias dignissimos iure quam vel ad
                quisquam repellendus corporis animi incidunt blanditiis sit modi
                dolorem quibusdam aut provident, quidem sequi. Alias, distinctio
                numquam nobis eligendi sint vel at, consequatur odit ipsum
                voluptatem earum autem dolorem quasi. Sunt assumenda a molestiae
                necessitatibus natus, quo autem non vel. Enim dolorem deleniti,
                eaque nisi itaque eum aperiam reiciendis maxime nemo ipsa
                nostrum facilis accusamus hic sed dolor a quod repellat rem illo
                voluptatem provident, veniam obcaecati adipisci. Ullam
                reiciendis at cupiditate pariatur, sapiente maiores eum
                repellendus vero nesciunt fugit exercitationem id dolor ex,
                aperiam animi corrupti totam assumenda, alias mollitia.
                Perferendis doloremque accusantium, consectetur praesentium
                labore laudantium eos ducimus obcaecati ut, adipisci qui! Alias
                omnis doloribus cum!
              </p>
            </div>
            <div className="col-xs-12 col-md-6">
              You can put any other content you'd like here.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation()(HomePage);
