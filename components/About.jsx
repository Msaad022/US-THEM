import Styles from "../styles/About.module.css";
import Image from "next/image";
import Img from "../public/img_video.png";
import { useRef } from "react";

function About() {
  const iframe = useRef()

  const videoPlay = () => {
    
    console.log(456);
  }
  
  return (
    <section className={Styles.main_about} id="about">
      <div className={Styles.img_about}>
        <div className={Styles.parent_img} onClick={()=>videoPlay()}>
          <iframe
            src="https://www.youtube.com/embed/2WzCeE6Sq24"
            ref={iframe}
            onClick={()=>videoPlay()}
            title="سورة ( الإخلاص - الفلق - الناس ) - مشاري بن راشد العفاسي"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className={Styles.text_about}>
        <div>
          <span>ما هو نحن وهم؟</span>
          <h2>لماذ تستخدم تطبيق نحن و هم - لعلاج التاخر العقلي </h2>
          <p>
            هو احد الحلول التي تهدف إلي علاج الأطفال ذوي الاحتياجات الخاصه من
            فئة التاخر العقلي بشكل مجاني ليسهل علي جميع الأطفال الحصول علي
            العلاج في المنزل عن طريق استخدام وسائل علاجية تم تجهيزها بواسطة
            متخصصين في علاج حالات الـتأخر العقلي بهدف الوصول إلي صحة أفضل
            لأطفالنا.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
