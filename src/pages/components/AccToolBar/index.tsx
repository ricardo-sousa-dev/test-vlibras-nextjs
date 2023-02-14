import React, { useCallback, useEffect, useState } from 'react';
import style from './accToolBar.module.scss';

export default function AccToolBar() {

  const colorPrimary = '#00bf98';
  const colorSecondary = '#353e52';
  const colorLight = '#f1f1f1';
  const colorWhite = '#ffffff';

  const [ contrast, setContrast ] = useState(false);

  let tagsH1: HTMLCollectionOf<HTMLElement>;
  let tagsH2: HTMLCollectionOf<HTMLElement>;
  let tagsH3: HTMLCollectionOf<HTMLElement>;
  let tagsH4: HTMLCollectionOf<HTMLElement>;
  let tagsH5: HTMLCollectionOf<HTMLElement>;
  let tagsH6: HTMLCollectionOf<HTMLElement>;
  let tagsP: HTMLCollectionOf<HTMLElement>;
  let storageContrast:  string | null;

  if (typeof window !== 'undefined') {

    tagsH1 = document.getElementsByTagName('h1');
    tagsH2 = document.getElementsByTagName('h2');
    tagsH3 = document.getElementsByTagName('h3');
    tagsH4 = document.getElementsByTagName('h4');
    tagsH5 = document.getElementsByTagName('h5');
    tagsH6 = document.getElementsByTagName('h6');
    tagsP = document.getElementsByTagName('p');
    storageContrast = localStorage.getItem('storageContrast')|| null;
  }

  const changeContrast = useCallback(() => {
    if (contrast) {
      localStorage.setItem('storageContrast', JSON.stringify(true))
      document.getElementsByTagName('body')[ 0 ].style.background = colorSecondary;

      if (tagsH1) {
        for (var i = 0; i < tagsH1.length; i++) {
          tagsH1[ i ].setAttribute('style', `color: ${ colorLight }`);
        }
      }

      if (tagsH2) {
        for (var i = 0; i < tagsH2.length; i++) {
          tagsH2[ i ].setAttribute('style', `color: ${ colorLight }`);
        }
      }

      if (tagsH3) {
        for (var i = 0; i < tagsH3.length; i++) {
          tagsH3[ i ].setAttribute('style', `color: ${ colorLight }`);
        }
      }

      if (tagsH4) {
        for (var i = 0; i < tagsH4.length; i++) {
          tagsH4[ i ].setAttribute('style', `color: ${ colorLight }`);
        }
      }

      if (tagsH5) {
        for (var i = 0; i < tagsH5.length; i++) {
          tagsH5[ i ].setAttribute('style', `color: ${ colorLight }`);
        }
      }

      if (tagsH6) {
        for (var i = 0; i < tagsH6.length; i++) {
          tagsH6[ i ].setAttribute('style', `color: ${ colorLight }`);
        }
      }

      if (tagsP) {
        for (var i = 0; i < tagsP.length; i++) {
          tagsP[ i ].setAttribute('style', `color: ${ colorLight }`);
        }
      }
    } else {
      document.getElementsByTagName('body')[ 0 ].style.background = colorLight;
      localStorage.setItem('storageContrast', JSON.stringify(false ))

      if (tagsH1) {
        for (var i = 0; i < tagsH1.length; i++) {
          tagsH1[ i ].removeAttribute('style');
        }
      }

      if (tagsH2) {
        for (var i = 0; i < tagsH2.length; i++) {
          tagsH2[ i ].removeAttribute('style');

        }
      }

      if (tagsH3) {
        for (var i = 0; i < tagsH3.length; i++) {
          tagsH3[ i ].removeAttribute('style');

        }
      }

      if (tagsH4) {
        for (var i = 0; i < tagsH4.length; i++) {
          tagsH4[ i ].removeAttribute('style');

        }
      }

      if (tagsH5) {
        for (var i = 0; i < tagsH5.length; i++) {
          tagsH5[ i ].removeAttribute('style');

        }
      }

      if (tagsH6) {
        for (var i = 0; i < tagsH6.length; i++) {
          tagsH6[ i ].removeAttribute('style');

        }
      }

      if (tagsP) {
        for (var i = 0; i < tagsP.length; i++) {
          tagsP[ i ].removeAttribute('style');

        }
      }
    }
  },[ contrast]);

  useEffect(() => {
    if (!storageContrast) {
      localStorage.setItem('storageContrast', JSON.stringify(false))
    }

    if (storageContrast && JSON.parse(storageContrast)){
      setContrast(true)
    }
    
  }, [])

  useEffect(() => {
    changeContrast();
  }, [ contrast ])

  return (
    <div className={ style.accToolBar }>
      <button
        className={ style.contrastButton }
        onClick={ () => setContrast(!contrast) }>Contrast</button>
    </div>
  )
}