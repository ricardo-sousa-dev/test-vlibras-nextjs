import React, { useEffect, useState } from 'react';
import style from './contrast.module.scss';
export default function ContrastButton() {

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

  const modifyingContrastClear = () => {
    console.log('Contrast: ', contrast)

    for (let i = 0; i < arrayTags.length; i++) {
      const tag = arrayTags[ i ];
      for (let t = 0; t < tag.length; t++) {
        tag[ t ].style.removeProperty('color');
        tag[ t ].style.removeProperty('background');
      }
    }

    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i++) {
      divs[ i ].style.removeProperty('background');
      divs[ i ].style.removeProperty('color');
      divs[ i ].style.removeProperty('border');
    }
  }

  const modifyingContrast2 = () => {
    console.log('Contrast: ', contrast)

    for (let i = 0; i < arrayTags.length; i++) {
      const tag = arrayTags[ i ];
      for (let t = 0; t < tag.length; t++) {
        tag[ t ].setAttribute('style', 'color: blue');
        if (tag[ t ].tagName === 'BUTTON') {
          tag[ t ].setAttribute('style', 'background: blue; color: white');
        }
      }
    }

    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i++) {
      divs[ i ].style.color = 'blue';
    }
  }

  const modifyingContrast3 = () => {
    console.log('Contrast: ', contrast)

    for (let i = 0; i < arrayTags.length; i++) {
      const tag = arrayTags[ i ];
      for (let t = 0; t < tag.length; t++) {
        tag[ t ].setAttribute('style', 'color: black');
        if (tag[ t ].tagName === 'BUTTON') {
          tag[ t ].setAttribute('style', 'background: black; color: yellow');
        }
      }
    }

    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i++) {
      divs[ i ].style.background = 'yellow';
      divs[ i ].style.removeProperty('color');
    }
  }

  const modifyingContrast4 = () => {
    console.log('Contrast: ', contrast)

    for (let i = 0; i < arrayTags.length; i++) {
      const tag = arrayTags[ i ];
      for (let t = 0; t < tag.length; t++) {
        tag[ t ].setAttribute('style', 'color: white');
        if (tag[ t ].tagName === 'BUTTON') {
          tag[ t ].setAttribute('style', 'background: black; color: white; border: 1px solid white');
        }
      }
    }

    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i++) {
      divs[ i ].style.background = 'black';
      divs[ i ].style.color = 'white';
      divs[ i ].style.border = '1px solid white';
    }
  }

  if (typeof window !== 'undefined') {

    tagsH1 = document.getElementsByTagName('h1'),
      tagsH2 = document.getElementsByTagName('h2'),
      tagsH3 = document.getElementsByTagName('h3'),
      tagsH4 = document.getElementsByTagName('h4'),
      tagsH5 = document.getElementsByTagName('h5'),
      tagsH6 = document.getElementsByTagName('h6'),
      tagsP = document.getElementsByTagName('p'),
      tagsButton = document.getElementsByTagName('button'),
      storageContrast = localStorage.getItem('storageContrast') || null,

      arrayTags = [ tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP, tagsButton ];
  }

  useEffect(() => {
    if (!storageContrast) {
      localStorage.setItem('storageContrast', JSON.stringify(1))
    } else {

      switch (JSON.parse(storageContrast)) {
        case 1:
          setContrast(1)
          modifyingContrastClear();
          break;
        case 2:
          setContrast(2)
          modifyingContrast2();
          break;
        case 3:
          setContrast(3);
          modifyingContrast3();
          break;
        case 4:
          setContrast(4);
          modifyingContrast4();
          break;
        default:
          break;
      }
    }
  }, [])

  const changeContrast = () => {

    if (contrast == 1) {
      setContrast(2);
      modifyingContrast2();
      localStorage.setItem('storageContrast', JSON.stringify(2))

    } else if (contrast == 2) {
      setContrast(3);
      modifyingContrast3();
      localStorage.setItem('storageContrast', JSON.stringify(3))
    } else if (contrast == 3) {
      setContrast(4);
      modifyingContrast4();
      localStorage.setItem('storageContrast', JSON.stringify(4))
    } else if (contrast == 4) {
      setContrast(1);
      modifyingContrastClear();
      localStorage.setItem('storageContrast', JSON.stringify(1))
    }

  };

  return (
    <button
      onClick={ () => changeContrast()} 
      className={style.contrast}
    >Contrast</button>
  )
}