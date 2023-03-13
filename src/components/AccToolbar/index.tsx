import { useEffect, useState } from 'react';
import Head from 'next/head';

import FloatingIcon from './FloatingIcon';
import Toolbar from './Toolbar';

export default function AccToolbar() {
  const [ showToolbar, setShowToolbar ] = useState(false);
  
  useEffect(() => {
    const storageContrast = localStorage.getItem('storageContrast') || null;
    const storageTextSize = localStorage.getItem('storageTextSize') || null;
    const storageTextStyle = localStorage.getItem('storageTextStyle') || null;

    if((storageContrast || storageTextSize || storageTextStyle) !== '1') setShowToolbar(true)
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
