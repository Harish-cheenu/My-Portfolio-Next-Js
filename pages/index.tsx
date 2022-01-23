import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
// import Intro from '../components/Intro/Intro'
// import About from '../components/About/About'
// import Contact from '../components/Contact/Contact'
import dynamic from 'next/dynamic'


const Home: NextPage = () => {
  const Intro = dynamic(
    () => import('../components/Intro/Intro'),
    { ssr: true }
  )
  const About = dynamic(
    () => import('../components/About/About'),
    { ssr: false }
  )
  const Project = dynamic(
    () => import('../components/Projects/Projects'),
    { ssr: true }
  )
  const Contact = dynamic(
    () => import('../components/Contact/Contact'),
    { ssr: false }
  )
  const Footer = dynamic(
    () => import('../components/Footer/Footer'),
    { ssr: false }
  )
  return (
    <div className={styles.container}>
      <Head>
        <title>Harish Narayanasamy</title>
        <meta name="Harish Narayanasamy" content="My personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />

      <About />

      <Project />

      <Contact />

      <Footer /> 
      
    </div>
  )
}

export default Home
