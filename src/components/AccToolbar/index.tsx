import { useEffect, useState } from 'react';
import Head from 'next/head';

import FloatingIcon from './ButtonFloatingIcon';
import Toolbar from './Toolbar';
import VLibras from './VLibras'


export default function AccToolbar() {
  const [ showToolbar, setShowToolbar ] = useState(false);

  useEffect(() => {
    let title = document.createElement('title');
    title.innerHTML = 'A11yToolbar';
    document.head.appendChild(title)

    let googleapis = document.createElement('link');
    googleapis.rel = 'preconnect'
    googleapis.href = "https://fonts.googleapis.com"
    document.head.appendChild(googleapis)

    let googleapis2 = document.createElement('link');
    googleapis2.rel = 'preconnect'
    googleapis2.href = "https://fonts.gstatic.com"
    googleapis2.crossOrigin = 'anonymous'
    document.head.appendChild(googleapis2)

    let lexendPeta = document.createElement('link');
    lexendPeta.rel = 'stylesheet'
    lexendPeta.href = "https://fonts.googleapis.com/css2?family=Lexend+Peta&display=swap"
    document.head.appendChild(lexendPeta)

    let lexendDeca = document.createElement('link');
    lexendDeca.rel = 'stylesheet'
    lexendDeca.href = "https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
    document.head.appendChild(lexendDeca)

    let dyslexic = document.createElement('link');
    dyslexic.rel = 'stylesheet'
    dyslexic.href = "https://fonts.cdnfonts.com/css/open-dyslexic"
    document.head.appendChild(dyslexic)

    let googleIcons = document.createElement('link');
    googleIcons.rel = 'stylesheet'
    googleIcons.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
    document.head.appendChild(googleIcons)

    for (let index = 0; index < document.getElementsByTagName('DIV').length; index++) {
      const element = document.getElementsByTagName('DIV')[ index ];
      if (element.getAttribute('vw-access-button')) element.setAttribute('style','display:none');
    }
    const storageContrast = localStorage.getItem('storageContrast')
    const storageTextStyle = localStorage.getItem('storageTextStyle')
    const storageZoomPage = localStorage.getItem('storageZoomPage')
    const storageLibras = localStorage.getItem('storageLibras')

    if (!storageContrast) localStorage.setItem('storageContrast', JSON.stringify(1))
    if (!storageTextStyle) localStorage.setItem('storageTextStyle', JSON.stringify(1))
    if (!storageZoomPage) localStorage.setItem('storageZoomPage', JSON.stringify(1))
    if (!storageLibras) localStorage.setItem('storageLibras', JSON.stringify(1))

    if (storageContrast && storageContrast !== '1'
      || storageTextStyle && storageTextStyle !== '1'
      || storageZoomPage && storageZoomPage !== '1'
      || storageLibras && storageLibras !== '1'
    // ) setTimeout(() => setShowToolbar(true), 2000);
    ) setShowToolbar(true);

    setTimeout(() => {
      for (let index = 0; index < document.getElementsByTagName('IMG').length; index++) {
        const element: HTMLElement = document.getElementsByTagName('IMG')[ index ] as HTMLElement;
        if (element.getAttribute('class') === 'access-button') {
          if (storageLibras == '2') element.click()
        }
      }
    }, 2000);
  }, []);

  const closeToolbar = () => {
    setShowToolbar(false)
  }

  useEffect(() => {
    document.getElementById('closeToolbar')?.addEventListener('click', closeToolbar)
  }, [ showToolbar ])

  return (
    <>
      {/* { process.env.NODE_ENV === "production" && <VLibras forceOnload /> }  */}
      <VLibras />
      
      {/* <Head>
        <title>AccToolbar</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Peta&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link href="https://fonts.cdnfonts.com/css/open-dyslexic" rel="stylesheet" />
      </Head> */}
      <FloatingIcon
        setShowToolbar={ setShowToolbar }
        showToolbar={ showToolbar }
        icon='accessibility'
      />

      { showToolbar ? <Toolbar /> : null }
    </>
  );
}
