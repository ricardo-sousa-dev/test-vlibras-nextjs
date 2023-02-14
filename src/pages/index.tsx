import styles from '@/styles/Home.module.css'
import VLibras from './components/VLibras';

export default function Home() {
  return (
    <>
      { process.env.NODE_ENV === "production" && <VLibras forceOnload /> }
      
      <div className={ styles.section }>
        <h1 className={`${styles.primeiro} teste`}>Teste de Acessibilidade com NextJS</h1>
        <h1 className='segundo'>Piada Nerd</h1>
        <h2>O Einstein e uma mulher estavam lá, naquele momento de intimidade pela primeira vez, e ela viu ele pelado. O que foi que ela disse?
          <p>– Uau! Que físico!</p></h2>
      </div>
    </>
  )
}
