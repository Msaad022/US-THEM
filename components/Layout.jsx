import Head from 'next/head';

import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Us & Them</title>
        <meta name="description" content="The We and They application aims to reach the best free treatment for children with special needs. We and They - for the treatment of mental retardation are now available on Google Play and Huawei Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header dir="rtl">
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div> 
  )
}

export default Layout