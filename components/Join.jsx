import Styles from "../styles/Join.module.css";
import Image from "next/image";
import Img from "../public/join_img.png";
import { useState, useRef } from "react";
import ImgPDF from '../public/file-pdf-solid-240.png'

function Join() {

  const wrapperRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  let [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add('dragover');
  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
  const fileRemove  = () => setFileList([]);
  
  const onFileDrop = (e) => {

    const newFile = e.target.files[0];

    if ( newFile && newFile['type'] == 'application/pdf' ) 
      setFileList([newFile]);
  }

  const handleSubmit = async (event) => {
    
    event.preventDefault()
    let valuesInput = [nameRef.current.value, emailRef.current.value]

    if(fileList.length > 0 && valuesInput[0] != '' && valuesInput[1] != ''){

      const formData = new FormData();
      formData.append('form', valuesInput);
      formData.append('file', fileList[0]);
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
      emailRef.current.value =''
      fileRemove()
    }
  }

  let styleObject = {
    backgroundSize: '20%',
    backgroundImage: `url(${ ImgPDF.src })`
  }

  return (
    <section className={Styles.main_join} id="join">
      <div className={Styles.title_form}>
        <h2>إنضم إلينا</h2>
        <p>
          إنضم الي أسرة البرنامج في الجلسات الأونلاين إذا كنت اخصائيا لذوي
          الاحتياجات الخاصة أو دكتور مخ و اعصاب او دكتور نفسي
        </p>
      </div>

      <div className={Styles.form_join}>
        <div className={Styles.form}>
          <form action="/#" onSubmit={ (e) => handleSubmit(e) }>
            <input type="text" required placeholder="الاسم" ref={nameRef} min='3' />
            <input type="email" required placeholder="البريد الالكتروني" ref={emailRef} />

            <div className={Styles.drag_and_drop}
              style={ fileList.length > 0 ? styleObject : null }
              ref={wrapperRef}
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
            >
              <input type="file" accept="application/pdf" onChange={onFileDrop}/>
              {
                fileList.length == 0 ? (              
                  <p>إسحب السيرة الذاتية و اسقطها هنا</p>
                ) : (
                  <>
                    <span className={Styles.preview__item__del} onClick={fileRemove}>x</span>
                    <span>{fileList[0].name}</span>
                  </>
                )
              }
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
