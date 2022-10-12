import Styles from "../styles/Partners.module.css";
import Image from "next/image";
import Link from "next/link";

import Teba_img from "../public/teba.svg";
import Eman_img from "../public/eman.svg";
import Facebook from "../public/facebook.png";
import Whatsapp from "../public/whatsapp.png";

function Partners() {
  return (
    <section className={Styles.main_partners}>
      <div className={Styles.title_partners}>
        <h2>شركاء النجاح</h2>
        <p>
          بالتعاون مع أفضل الاخصائين لذوي الاحتياجات الخاصة و المراكز المتخصصة{" "}
        </p>
      </div>

      <div className={Styles.content_partners}>
        <div className={Styles.partner}>
          <div>
            <Image src={Teba_img} alt="Teba img" />
          </div>
          <span>مركز طيبة</span>
          <p>مركز طيبة للتخاطب و ذوي الاحتياجات الخاصة</p>
          <div className={Styles.social_icon}>
            <div>
              <Link href='https://web.facebook.com/tebacenter.eg'>
                <a><Image src={Facebook} alt="Facebook icon" /></a>
              </Link>
            </div>
            <div>
              <Link href='https://wa.me/+2001124004914'>
                <a><Image src={Whatsapp} alt="Whatsapp icon" /></a>
              </Link>
            </div>
          </div>
        </div>

        <div className={Styles.partner}>
          <div>
            <Image src={Eman_img} alt="Eman img" />
          </div>
          <span>د/إيمان فرحات</span>
          <p>أخصائي أمراض التخاطب والتأهيل و ماجستير الصحة النفسية</p>
          <div className={Styles.social_icon}>
            <div>
              <Link href='https://web.facebook.com/EmanFrhatSpeechPathologist'>
                <a><Image src={Facebook} alt="Facebook icon" /></a>
              </Link>
            </div>
            <div>
              <Link href='https://wa.me/+2001129066167'>
                <a><Image src={Whatsapp} alt="Whatsapp icon" /></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
