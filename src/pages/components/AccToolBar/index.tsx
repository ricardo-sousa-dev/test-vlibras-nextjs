import React, { useEffect, useState } from 'react';
import style from './accToolBar.module.scss';

export default function AccToolBar() {

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

  const [ contrast, setContrast ] = useState(1);

  // tag[ t ].removeAttribute('style');
  // document.getElementsByTagName('body')[ 0 ].style.removeProperty('background');

  const modifyingContrastClear = () => {
    for (let i = 0; i < arrayTags.length; i++) {
      const tag = arrayTags[ i ];
      for (let t = 0; t < tag.length; t++) {
        tag[ t ].style.removeProperty('color');
        tag[ t ].style.removeProperty('background');
      }
    }
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
  }

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

  useEffect(()=> {
    if (!storageContrast) {
      localStorage.setItem('storageContrast', JSON.stringify(1))
    } else {

      switch (JSON.parse(storageContrast)) {
        case 1:
          console.log('ENTROU');
          setContrast(1)
          modifyingContrastClear();
          break;
        case 2:
          setContrast(2)
          modifyingContrast2();
          break;
      }
    }
  },[])


  const changeContrast = () => {
   
    if (contrast == 1) {
      setContrast(2);
      modifyingContrast2();
      localStorage.setItem('storageContrast', JSON.stringify(2))
      
    } else if (contrast == 2) {
      setContrast(1);
      modifyingContrastClear();
      localStorage.setItem('storageContrast', JSON.stringify(1))
    }
  };


  return (
    <div className={ style.accToolBar }>
      <button
        className={ style.contrastButton }
        onClick={ () => changeContrast() }>Contrast</button>
    </div>
  )
}