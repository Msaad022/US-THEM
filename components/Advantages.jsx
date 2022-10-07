import Styles from "../styles/Advantages.module.css";
import Image from "next/image";
import Img1 from "../public/plan_img1.png";
import Img2 from "../public/plan_img2.png";
import Img3 from "../public/plan_img3.png";

function Advantages() {
  return (
    <section className={Styles.main_advantages} id="advantages">
      <div className={Styles.title_advantages}>
        <h2>مزايا تطبيق التأخر العقلي</h2>
        <p>
          للتطبيق العديد من المزايا التي تساهم في مساعدة الأطفال بشكل فعال في
          وقت قصير{" "}
        </p>
      </div>
      <div className={Styles.planning}>
        <div className={Styles.left_plan}>
          <div></div>

          <div className={Styles.content_plan}>
            <div className={Styles.plan_image}>
              <Image src={Img1} alt="img 2" />
            </div>
            <div className={Styles.plan_text}>
              <span>02</span>
              <h4>وضع خطة علاجية</h4>
              <p>
                بعد تحديد العمر التطوري للطفل نقوم بوضع خطة علاجية للتاخر العقلي
                للوصول بطفل إلي قصي تطور عقلي عن طريق انشطة تهدف الي زيادة
                التطور العقلي لدية.
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.right_plan}>
          <div className={Styles.content_plan + ' ' + 'plan_one'}>
            <div className={Styles.plan_image}>
              <Image src={Img2} alt="img 1" />
            </div>
            <div className={Styles.plan_text}>
              <span>01</span>
              <h4>تقييم الطفل</h4>
              <p>
                تقييم العمر العقلي للطفل عن طريق معرفة العمر التطوري للطفل
                باستخدام برنامج بورتاج - Portage وهو البرنامج المنزلي للتدخل
                المبكر لتثقيف امهات الطفال ذوي الاحتياجات الخاصة.
              </p>
            </div>
          </div>

          <div className={Styles.content_plan}>
            <div className={Styles.plan_image}>
              <Image src={Img3} alt="img 3" />
            </div>
            <div className={Styles.plan_text}>
              <span>03</span>
              <h4>جلسات مع الخبراء</h4>
              <p>
                يتيج التطبيق العديد من الأخصائين للرد علي استفسارت الأباء
                والأمهات بخصوص اطفالهم في اسرع وقت ممكن. احجز جلستك و تواصل مع
                الأخصائي للرد علي جميع استفساراتك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
