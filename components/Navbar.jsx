import { useRouter } from "next/router"
import Styles from '../styles/Navbar.module.css'
import Image from "next/image"
import Logo from "../public/logo.svg";
import Link from "next/link";

function Navbar() {

  const router = useRouter()
  const { locale } =  router

  const changeLanguage = (e) => {
    const locale= e.target.value
    router.push('/','/', { locale } )
  }
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.logo} dir="ltr">
        <Image src={Logo} alt="logo" priority/>
        <span>نحن و هم </span>
      </div>
      <div className={Styles.links}>
        <ul>
          <li>
            <Link href="/#hero_banner">
              <a>المقدمة</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a>من نحن</a>
            </Link>
          </li>
          <li>
            <Link href="/#advantages">
              <a>المزايا</a>
            </Link>
          </li>
          <li>
            <Link href="/#connect">
              <a>تواصل معانا</a>
            </Link>
          </li>
          <li>
            <Link href="/#join">
              <a>إنضم إلينا</a>
            </Link>
          </li>
        </ul>
        <select
          aria-label="language"
          onChange={changeLanguage}
          defaultValue={locale} >
          <option value="ar">AR</option>
          <option value="en">EN</option>
        </select>
      </div>
    </nav>
  )
}

export default Navbar