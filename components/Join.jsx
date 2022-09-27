import Styles from "../styles/Join.module.css";
import Image from "next/image";
import Img from "../public/join_img.png";

function Join() {
  return (
    <section className={Styles.main_join} id="join">
      <div className={Styles.title_form}>
        <h3>إنضم إلينا</h3>
        <p>
          إنضم الي أسرة البرنامج في الجلسات الأونلاين إذا كنت اخصائيا لذوي
          الاحتياجات الخاصة أو دكتور مخ و اعصاب او دكتور نفسي
        </p>
      </div>

      <div className={Styles.form_join}>
        <div className={Styles.form}>
          <form action="/#">
            <input type="text" required placeholder="الاسم" />
            <input type="email" required placeholder="البريد الالكتروني" />
            <div className={Styles.drag_and_drop}>
              <p>إسحب السيرة الذاتية و اسقطها هنا</p>
            </div>
            <button type="submit">ارسال</button>
          </form>
        </div>

        <div className={Styles.img_join}>
          <div className={Styles.parent_img}>
            <Image src={Img} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
