import React, { useEffect, useState } from 'react';

import ButtonTollbar from '../ButtonToolbar';

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
  let iconsToolbar: HTMLCollectionOf<HTMLElement>;
  const toolbar: HTMLElement | null = typeof window !== 'undefined' ? document.getElementById('toolbar') : null;

  const [ contrast, setContrast ] = useState(1);
  /*eslint-disable */
  const modifyingContrastClear = () => {
    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      for (let t = 0; t < tag.length; t += 1) {
        tag[ t ].style.removeProperty('color');
        tag[ t ].style.removeProperty('background');
        tag[ t ].style.removeProperty('border');
        if (tag[ t ].classList.contains('floatingIcon')) {
          tag[ t ].style.border = 'none';
        }
      }
    }

    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i += 1) {
      divs[ i ].style.removeProperty('background');
      divs[ i ].style.removeProperty('color');
      divs[ i ].style.removeProperty('border');
    }
    toolbar ? (toolbar.style.background = '#f1f1f1') : null;
    for (let i = 0; i < iconsToolbar.length; i += 1) {
      iconsToolbar[ i ].style.border = '1px solid black';
      iconsToolbar[ i ].style.background = 'white';
    }
  };

  const modifyingContrast2 = () => {
    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];
      for (let t = 0; t < tag.length; t += 1) {
        tag[ t ].style.color = 'blue';

        if (tag[ t ].tagName === 'BUTTON' &&
          !tag[ t ].classList.contains('a11yIcon') &&
          !tag[ t ].classList.contains('floatingIcon')) {
          tag[ t ].style.background = 'blue';
          tag[ t ].style.color = 'white';
        }
        if(tag[t].classList.contains('floatingIcon')){
          tag[ t ].style.border = 'none';
        }
        if (tag[ t ].tagName === 'P' && tag[ t ].parentElement?.classList.contains('divButton')) {
          tag[ t ].style.color = 'black';
        }
      }
    }
    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i += 1) {
      divs[ i ].style.color = 'blue';
    }
  };

  const modifyingContrast3 = () => {
    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      for (let t = 0; t < tag.length; t += 1) {
        tag[ t ].style.color = 'black';
        if (tag[ t ].tagName === 'BUTTON') {
          tag[ t ].style.background = 'black';
          tag[ t ].style.color = 'yellow';
        }
      }
    }
    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i += 1) {
      divs[ i ].style.background = 'yellow';
      divs[ i ].style.removeProperty('color');
    }
    for (let i = 0; i < iconsToolbar.length; i += 1) {
      iconsToolbar[ i ].style.border = '1px solid black';
      iconsToolbar[ i ].style.background = 'yellow';
    }
    toolbar ? (toolbar.style.border = '1px solid black') : null;
  };

  const modifyingContrast4 = () => {
    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      for (let t = 0; t < tag.length; t += 1) {
        tag[ t ].style.color = 'white';
        if (tag[ t ].tagName === 'BUTTON') {
          tag[ t ].style.background = 'black';
          tag[ t ].style.color = 'white';
          tag[ t ].style.border = '1px solid white';
        }
      }
    }
    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i += 1) {
      divs[ i ].style.background = 'black';
      divs[ i ].style.color = 'white';
      if (!divs[ i ].classList.contains('divButton')) {
        divs[ i ].style.border = '1px solid white';
      }
    }
    for (let i = 0; i < iconsToolbar.length; i += 1) {
      iconsToolbar[ i ].style.background = 'white';
    }
    toolbar ? (toolbar.style.border = 'none') : null;
  };

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
    iconsToolbar = document.getElementsByClassName('a11yIcon') as HTMLCollectionOf<HTMLElement>;
    arrayTags = [ tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP, tagsButton ];
  }

  useEffect(() => {
    if (!storageContrast) {
      localStorage.setItem('storageContrast', JSON.stringify(1));
    } else {
      switch (JSON.parse(storageContrast)) {
        case 1:
          setContrast(1);
          modifyingContrastClear();
          break;
        case 2:
          setContrast(2);
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
  }, []);

  const changeContrast = () => {
    if (contrast === 1) {
      setContrast(2);
      modifyingContrast2();
      localStorage.setItem('storageContrast', JSON.stringify(2));
    } else if (contrast === 2) {
      setContrast(3);
      modifyingContrast3();
      localStorage.setItem('storageContrast', JSON.stringify(3));
    } else if (contrast === 3) {
      setContrast(4);
      modifyingContrast4();
      localStorage.setItem('storageContrast', JSON.stringify(4));
    } else if (contrast === 4) {
      setContrast(1);
      modifyingContrastClear();
      localStorage.setItem('storageContrast', JSON.stringify(1));
    }
  };

  return (
    <ButtonTollbar
      icon='/contrast_icon.svg'
      alt='Contrast'
      onClick={ changeContrast }
    />
  );
}
