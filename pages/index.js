import styles from '../styles/Home.module.css'
import { HeroBanner, About, Advantages, Connect, Join, Partners } from '../components'
import En from '../locales/En'
import Ar from '../locales/Ar'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()
  const { locale } = router
  const t = Ar //locale === 'en' ? En : Ar

  return (
    <div className={styles.container} /*dir= {locale === 'ar' ? 'rtl' : 'ltr'}*/ >
      <HeroBanner lang={t} />
      <About />
      <Advantages />
      <Connect />
      <Join />
      <Partners />
    </div>
  )
}