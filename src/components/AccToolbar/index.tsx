import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import Head from 'next/head';

import FloatingIcon from './ButtonFloatingIcon';
import Toolbar from './Toolbar';
// import VLibras from './VLibras';
import VLibras from '@djpfs/react-vlibras'


export default function AccToolbar() {
  const [ showToolbar, setShowToolbar ] = useState(false);

  useEffect(() => {
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
    ) setTimeout(() => setShowToolbar(true), 2000);

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
      {/* modo dev */ }
      <VLibras forceOnload />
      
      <Head>
        <title>AccToolbar</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Peta&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link href="https://fonts.cdnfonts.com/css/open-dyslexic" rel="stylesheet" />
      </Head>
      <FloatingIcon
        setShowToolbar={ setShowToolbar }
        showToolbar={ showToolbar }
        icon='accessibility'
      />

      { showToolbar ? <Toolbar /> : null }
    </>
  );
}
