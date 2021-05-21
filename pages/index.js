import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ClickMap.io</title>
        <meta name="ClickMap.io" />
        // <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>ClickMap.io</h1>
        <h1>Coming soon 2021</h1>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
