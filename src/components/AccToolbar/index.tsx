import { useEffect, useState } from 'react';
import Head from './utils/head';

import FloatingIcon from './ButtonFloatingIcon';
import Toolbar from './Toolbar';
import VLibras from './VLibras'


export default function AccToolbar() {
  const [ showToolbar, setShowToolbar ] = useState(false);

  useEffect(() => {
    Head()
    const storageContrast = localStorage.getItem('storageContrast')
    const storageTextStyle = localStorage.getItem('storageTextStyle')
    const storageZoomPage = localStorage.getItem('storageZoomPage')
    const storageLibras = localStorage.getItem('storageLibras')

    for (let index = 0; index < document.getElementsByTagName('DIV').length; index++) {
      const element: HTMLElement = document.getElementsByTagName('DIV')[ index ] as HTMLElement;
      if (element.getAttribute('vw-access-button')) element.setAttribute('style', 'opacity:0');
    }

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
          element.click()
        }
      }
    }, 5000);

  }, []);

  const closeToolbar = () => {
    setShowToolbar(false)
  }

  useEffect(() => {
    document.getElementById('closeToolbar')?.addEventListener('click', closeToolbar)
  }, [ showToolbar ])

  return (
    <>
      <VLibras />
      <FloatingIcon
        setShowToolbar={ setShowToolbar }
        showToolbar={ showToolbar }
        icon='accessibility'
      />

      { showToolbar ? <Toolbar /> : null }
    </>
  );
}
