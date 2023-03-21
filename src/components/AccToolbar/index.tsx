import { useEffect, useState } from 'react';
import Head from 'next/head';

import FloatingIcon from './ButtonFloatingIcon';
import Toolbar from './Toolbar';

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

    if (storageContrast !== '1'
      || storageTextStyle !== '1'
      || storageZoomPage !== '1'
      || storageLibras !== '1'
      || storageLibras !== '1'
    ) setShowToolbar(true)

  }, []);

  const closeToolbar = () => {
    setShowToolbar(false)
  }

  useEffect(() => {
    document.getElementById('closeToolbar')?.addEventListener('click', closeToolbar)
  }, [ showToolbar ])

  return (
    <>
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
