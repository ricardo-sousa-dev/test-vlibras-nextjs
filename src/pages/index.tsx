import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
// import VLibras from '@djpfs/react-vlibras'
import VLibras from './components/VLibras';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      { process.env.NODE_ENV === "production" && <VLibras forceOnload />}
       <div className={styles.main}>
       
       
         
          <h1>Teste Libras com NextJS</h1>
        <h1>Piada Nerd</h1>
        <h2>O Einstein e uma mulher estavam lá, naquele momento de intimidade pela primeira vez, e ela viu ele pelado. O que foi que ela disse?
          <p>– Uau! Que físico!</p></h2>

        
      </div>
    </>
  )
}
