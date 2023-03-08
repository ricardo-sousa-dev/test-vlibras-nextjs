import styles from '@/styles/Home.module.scss'
import VLibras from '../components/VLibras';

export default function Home() {

  return (
    <>
      { process.env.NODE_ENV === "production" && <VLibras forceOnload /> }

      <div className={ styles.section }>
        <h1>Teste de ferramentas de acessibilidade - NextJS</h1>
        <h1>Teste h1</h1>
        <h2>Teste h2</h2>
        <p>Libras é a sigla da Língua Brasileira de Sinais, uma língua de modalidade gestual-visual onde é possível se comunicar através de gestos, expressões faciais e corporais. É reconhecida como meio legal de comunicação e expressão desde 24 de Abril de 2002, através da Lei nº 10.436. A Libras é muito utilizada na comunicação com pessoas surdas, sendo, portanto, uma importante ferramenta de inclusão social.</p>
        <button>Button</button>
        <div>Div1
          <div>Div intern</div>
        </div>
        <div>Div2</div>
      </div>
    </>
  )
}
