import styles from '@/styles/Home.module.scss'
// import VLibras from '../components/VLibras';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [ joke, setJoke ] = useState('');

  useEffect(() => {
    axios.get('https://geek-jokes.sameerkumar.website/api?format=json').then((response) => {
      setJoke(response.data.joke);
    });
  }, [])

  return (
    <>
      {/* { process.env.NODE_ENV === "production" && <VLibras forceOnload /> } */}

      <div className={ styles.section }>
        <h1>Accessibility Testing with NextJS</h1>
        <h1>Geek Jokes</h1>
        <h2>Test in English:</h2>
        <p> { joke }</p>
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
