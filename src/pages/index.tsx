import styles from '@/styles/Home.module.scss'
import VLibras from './components/VLibras';
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
      { process.env.NODE_ENV === "production" && <VLibras forceOnload /> }

      <div className={ styles.section }>
        <h1>Accessibility Testing with NextJS</h1>
        <h1>Geek Jokes</h1>
        <h2>Test in English:</h2>
        <p> { joke }</p>
      </div>
    </>
  )
}
