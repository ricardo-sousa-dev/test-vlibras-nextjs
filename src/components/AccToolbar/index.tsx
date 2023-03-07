import { useEffect, useState } from 'react';
import Head from 'next/head';

import FloatingIcon from './FloatingIcon';
import Toolbar from './Toolbar';

export default function AccToolbar() {
  const [ showToolbar, setShowToolbar ] = useState(false);

  useEffect(() => {
    const textSize = localStorage.getItem('storageTextSize');
    const contrast = localStorage.getItem('storageContrast');

    if ((textSize || contrast) === null) {
      setShowToolbar(false);
    } else if ((textSize || contrast) !== '1') {
      setShowToolbar(true);
    } else {
      setShowToolbar(false);
    }
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
