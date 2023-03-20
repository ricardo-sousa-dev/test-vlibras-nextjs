import { useEffect, useState } from 'react';
import Head from 'next/head';

import FloatingIcon from './ButtonFloatingIcon';
import Toolbar from './Toolbar';

export default function AccToolbar() {
  const [ showToolbar, setShowToolbar ] = useState(false);

  useEffect(() => {
    const storageContrast = localStorage.getItem('storageContrast') || null;
    const storageTextStyle = localStorage.getItem('storageTextStyle') || null;
    const storageZoom = localStorage.getItem('storageZoomPage') || null;

    // document.body.appendChild()
    console.log(typeof document.getElementsByClassName('toolbar')[ 0 ])
    if (
      (storageContrast
        || storageTextStyle
        || storageZoom
      ) !== '1'
    ) setShowToolbar(true)
  }, []);

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
