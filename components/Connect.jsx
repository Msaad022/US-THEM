import Styles from "../styles/Connect.module.css";
import Image from "next/image";
import Img from "../public/connect_img.png";

function Connect() {
    return (
      <section className={Styles.main_connect} id="connect">
        <div className={Styles.img_connect}>
          <div className={Styles.parent_img}>
            <Image src={Img} alt="img" />
          </div>
        </div>
        <div className={Styles.form_connect}>
          <div className={Styles.title_form}>
            <h3>.دعنا نتحدث عن احتياجاتك</h3>
            <p>سنكون سعداء بتواصلك معانا في اي وقت للمساعدة </p>
          </div>
          <div className={Styles.form}>
            <form action="/#">
              <input type="text" required placeholder="الاسم" />
              <input type="email" required placeholder="البريد الالكتروني" />
              <input type="text" placeholder="الموضوع" />
              <textarea cols="30" required rows="10" placeholder="رسالتك"></textarea>
              <button type="submit">ارسال</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
  
  export default Connect