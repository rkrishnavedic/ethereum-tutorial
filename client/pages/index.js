import Head from 'next/head'
import Image from 'next/image'
import { Footer, Navbar, Services, Transactions, Welcome } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ECrypt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <div className='gradient-bg-welcome'>
          <Navbar/>
          <Welcome/>
        </div>
        <Services/>
        <Transactions/>
        <Footer/>
      </main>
    </div>
  )
}
