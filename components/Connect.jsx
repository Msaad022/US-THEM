import Styles from "../styles/Connect.module.css";
import Image from "next/image";
import Img from "../public/connect_img.png";
import { useRef } from "react";

function Connect() {

  const nameRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const textareaRef = useRef();

  const handleSubmit = async (event) => {
    
    event.preventDefault()

    let valuesInput = [
      nameRef.current.value ,
      emailRef.current.value ,
      titleRef.current.value ,
      textareaRef.current.value
    ]

    if(valuesInput[0] != '' && valuesInput[1] != '' && valuesInput[3] != ''){

      const formData = new FormData();
      formData.append('form', valuesInput);
/*
      const res = await fetch(
          'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
        { 
          method: 'POST',
          body: formData 
        })
          .then((response) => response.json())
          .then((result) => {
            console.log('Success:', result);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
*/
      // reset form
      nameRef.current.value = '',
      emailRef.current.value ='',
      titleRef.current.value ='' ,
      textareaRef.current.value =''
    }
  }

    return (
      <section className={Styles.main_connect} id="connect">
        <div className={Styles.img_connect}>
          <div className={Styles.parent_img}>
            <Image src={Img} alt="img" />
          </div>
        </div>
        <div className={Styles.form_connect}>
          <div className={Styles.title_form}>
            <h2>.دعنا نتحدث عن احتياجاتك</h2>
            <p>سنكون سعداء بتواصلك معانا في اي وقت للمساعدة </p>
          </div>
          <div className={Styles.form}>
            <form action="/#" onSubmit={ (e) => handleSubmit(e) }>
              <input type="text" required placeholder="الاسم" ref={nameRef} />
              <input type="email" required placeholder="البريد الالكتروني" ref={emailRef} />
              <input type="text" placeholder="الموضوع" ref={titleRef} />
              <textarea cols="30" required rows="10" placeholder="رسالتك" ref={textareaRef}></textarea>
              <button type="submit">ارسال</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
  
  export default Connect