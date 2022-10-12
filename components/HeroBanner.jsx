import Styles from "../styles/HeroBanner.module.css";
import Image from "next/image";
import Link from "next/link";
import ImageHero from "../public/hero_banner.svg";
import ImageGooglePlay from "../public/button-google-play.svg";
import ImageAppGallery from "../public/button-app-gallery.svg";

function HeroBanner({ lang }) {
  return (
    <section className={Styles.hero_banner} id='hero_banner'>
      <div className={Styles.img_banner}>
        <Image src={ImageHero} alt="Hero Banner" priority />
      </div>
      <div className={Styles.text_banner}>
        <div></div>
        <div>
          <h1>{lang.mainTitle}</h1>
          <h4>{lang.hero}</h4>
          <div className={Styles.imgs_app}>
            <div>
              <Link href="https://urldra.cloud.huawei.com/iMiXajzwoo">
                <a><Image src={ImageAppGallery} alt="Image App Gallery" priority /></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
