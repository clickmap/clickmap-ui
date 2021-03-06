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
        <h1 className={styles.h1}>ClickMap.io</h1>
        <h3 className={styles.h3}>Open source heatmap coming soon 2021</h3>
        <a className={styles.a} href="https://github.com/clickmap">Github Account</a>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
