import React, { useCallback, useEffect, useState } from 'react';
import style from './accToolBar.module.scss';

export default function AccToolBar() {

  const primary = '#00bf98';
  const secondary = '#353e52';
  const light = '#f1f1f1';
  const black = '#000000';

  const [ contrast, setContrast ] = useState(1);

  let tagsH1: HTMLCollectionOf<HTMLElement>;
  let tagsH2: HTMLCollectionOf<HTMLElement>;
  let tagsH3: HTMLCollectionOf<HTMLElement>;
  let tagsH4: HTMLCollectionOf<HTMLElement>;
  let tagsH5: HTMLCollectionOf<HTMLElement>;
  let tagsH6: HTMLCollectionOf<HTMLElement>;
  let tagsP: HTMLCollectionOf<HTMLElement>;
  let tagsButton: HTMLCollectionOf<HTMLElement>;
  let storageContrast: string | null;
  let arrayTags: HTMLCollectionOf<HTMLElement>[];

  if (typeof window !== 'undefined') {

    tagsH1 = document.getElementsByTagName('h1');
    tagsH2 = document.getElementsByTagName('h2');
    tagsH3 = document.getElementsByTagName('h3');
    tagsH4 = document.getElementsByTagName('h4');
    tagsH5 = document.getElementsByTagName('h5');
    tagsH6 = document.getElementsByTagName('h6');
    tagsP = document.getElementsByTagName('p');
    tagsButton = document.getElementsByTagName('button');
    storageContrast = localStorage.getItem('storageContrast') || null;
    arrayTags = [ tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP, tagsButton ];
  }

  // tag[ t ].style.removeProperty('color');
  // document.getElementsByTagName('body')[ 0 ].style.removeProperty('background');

  const modifyingContrastClear = () => {
    for (let i = 0; i < arrayTags.length; i++) {
      const tag = arrayTags[ i ];
      for (let t = 0; t < tag.length; t++) {
        tag[ t ].removeAttribute('style');
      }
    }
    localStorage.setItem('storageContrast', JSON.stringify(2))
  }

  const modifyingContrast2 = () => {
    for (let i = 0; i < arrayTags.length; i++) {
      const tag = arrayTags[ i ];
      for (let t = 0; t < tag.length; t++) {
        tag[ t ].setAttribute('style', 'color: blue');
        if (tag[ t ].tagName === 'BUTTON') {
          tag[ t ].setAttribute('style', 'background: blue; color: white');
        }
      }
    }
    localStorage.setItem('storageContrast', JSON.stringify(1))
  }

  const changeContrast = useCallback(() => {
    console.log('CONTRAST', contrast)
    if (contrast < 2) {
      setContrast(contrast + 1);

    } else {
      setContrast(1);
    }

    switch (contrast) {
      case 1:
        modifyingContrast2();
        break;
      case 2:
        modifyingContrastClear();
        break;
      default:
        break;
    }
  }, [ contrast ]);

  useEffect(() => {
    if (!storageContrast) {
      localStorage.setItem('storageContrast', JSON.stringify(1))
    }

    if (storageContrast && JSON.parse(storageContrast)) {
      setContrast(JSON.parse(storageContrast))
    }

  }, [])

  return (
    <div className={ style.accToolBar }>
      <button
        className={ style.contrastButton }
        onClick={ () => changeContrast() }>Contrast</button>
    </div>
  )
}