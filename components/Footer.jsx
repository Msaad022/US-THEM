import Styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

import Instagram from "../public/instagram.png";
import Facebook from "../public/facebook.png";
import Twitter from "../public/Twitter.png";

function Footer() {
  return (
    <div className={Styles.main_footer}>
      <h3>نَحنُ و هٌم - Us & Them</h3>
      <div className={Styles.social_icon}>
        <div>
          <Link href='https://www.instagram.com/usandthem.eg'>
            <a><Image src={Instagram} alt="instagram icon" /></a>
          </Link>
        </div>
        <div>
          <Link href='https://web.facebook.com/usandthem.eg'>
            <a><Image src={Facebook} alt="facebook icon" /></a>
          </Link>
        </div>
        <div>
          <Link href='https://twitter.com/usandthem_eg'>
            <a><Image src={Twitter} alt="twitter icon" /></a>
          </Link>
        </div>
      </div>
      <p>Copyright © 2022.Native Builders EG</p>
    </div>
  )
}

export default Footer