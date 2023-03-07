import React, { useEffect, useState } from 'react';

import ButtonTollbar from '../ButtonToolbar';

/*eslint-disable */
export default function TextSize() {
  let tagsH1: HTMLHeadingElement[];
  let tagsH2: HTMLHeadingElement[];
  let tagsH3: HTMLHeadingElement[];
  let tagsH4: HTMLHeadingElement[];
  let tagsH5: HTMLHeadingElement[];
  let tagsH6: HTMLHeadingElement[];
  let tagsP: HTMLHeadingElement[];
  let tagsDiv: HTMLDivElement[];
  let tagsButton: HTMLButtonElement[];
  let storageTextSize: string | null;
  let arrayTags: (HTMLButtonElement | HTMLHeadingElement | HTMLDivElement)[] ;

  const [ textSize, setTextSize ] = useState(1);
  const PERCENT_10 = 0.1;
  const PERCENT_15 = 0.15;
  const PERCENT_20 = 0.2;
  const sizeH1 = 48.832; //'3.052rem'
  const sizeH2 = 39.056; //'2.441rem'
  const sizeH3 = 31.248; //'1.953rem'
  const sizeH4 = 25.008; //'1.563rem'
  const sizeH5 = 20; //'1.25rem'
  const sizeP = 16; //'1rem'
  const sizeLi = 16; //'1rem'
  const sizeA = 16; //'1rem'

  const modifyingTextSizeClear = () => {
    console.log('TextSize: ', textSize);

    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

        if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
          tag.style.removeProperty('font-size');
        }
    }
  };

  const modifyingTextSize = (size: number) => {
    console.log('TextSize: ', textSize);

    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];
      const fontSizeOriginal = Number(getComputedStyle(tag).fontSize.replace('px', ''));

      if (!tag.parentElement?.classList.contains('divButtonToolbar')) {

        if (fontSizeOriginal) {
          tag.style.fontSize = `${ fontSizeOriginal + (fontSizeOriginal * size) }`.slice(0, 5) + 'px';
        }else{
                switch (tag.tagName) {
              case 'H1':
                tag.style.fontSize = `${ sizeH1 + (sizeH1 * size) }`.slice(0, 5) + 'px';
                break;
              case 'H2':
                tag.style.fontSize = `${ sizeH2 + (sizeH2 * size) }`.slice(0, 5) + 'px';
                break;
              case 'H3':
                tag.style.fontSize = `${ sizeH3 + (sizeH3 * size) }`.slice(0, 5) + 'px';
                break;
              case 'H4':
                tag.style.fontSize = `${ sizeH4 + (sizeH4 * size) }`.slice(0, 5) + 'px';
                break;
              case 'H5':
                tag.style.fontSize = `${ sizeH5 + (sizeH5 * size) }`.slice(0, 5) + 'px';
                break;
              case 'P':
                tag.style.fontSize = `${ sizeP + (sizeP * size) }`.slice(0, 5) + 'px';
                break;
              case 'LI':
                tag.style.fontSize = `${ sizeLi + (sizeLi * size) }`.slice(0, 5) + 'px';
                break;
              case 'A':
                tag.style.fontSize = `${ sizeA + (sizeA * size) }`.slice(0, 5) + 'px';
                break;
              default:
                break;
            }
        }
      }
    }
  };

  if (typeof window !== 'undefined') {
    tagsH1 = Array.from(document.querySelectorAll('h1'));
    tagsH2 = Array.from(document.querySelectorAll('h2'));
    tagsH3 = Array.from(document.querySelectorAll('h3'));
    tagsH4 = Array.from(document.querySelectorAll('h4'));
    tagsH5 = Array.from(document.querySelectorAll('h5'));
    tagsH6 = Array.from(document.querySelectorAll('h6'));
    tagsP = Array.from(document.querySelectorAll('p'));
    tagsDiv = Array.from(document.querySelectorAll('div'));
    tagsButton = Array.from(document.querySelectorAll('button'));
    storageTextSize = localStorage.getItem('storageTextSize') || null;
    arrayTags = [ tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP, tagsDiv, tagsButton ].flatMap<HTMLButtonElement | HTMLHeadingElement | HTMLDivElement>(tag => tag );
  }

  useEffect(() => {
    if (!storageTextSize) {
      localStorage.setItem('storageTextSize', JSON.stringify(1));
    } else {
      switch (JSON.parse(storageTextSize)) {
        case 1:
          setTextSize(1);
          modifyingTextSizeClear();
          break;
        case 2:
          setTextSize(2);
          modifyingTextSize(PERCENT_10);
          break;
        case 3:
          setTextSize(3);
          modifyingTextSize(PERCENT_15);
          break;
        case 4:
          setTextSize(4);
          modifyingTextSize(PERCENT_20);
          break;
        default:
          break;
      }
    }
  }, []);

  const changeTextSize = () => {
    if (textSize == 1) {
      setTextSize(2);
      modifyingTextSize(PERCENT_10);
      localStorage.setItem('storageTextSize', JSON.stringify(2));
    } else if (textSize == 2) {
      setTextSize(3);
      modifyingTextSize(PERCENT_15);
      localStorage.setItem('storageTextSize', JSON.stringify(3));
    } else if (textSize == 3) {
      setTextSize(4);
      modifyingTextSize(PERCENT_20);
      localStorage.setItem('storageTextSize', JSON.stringify(4));
    } else if (textSize == 4) {
      setTextSize(1);
      modifyingTextSizeClear();
      localStorage.setItem('storageTextSize', JSON.stringify(1));
    }
  };

  return (
    <ButtonTollbar
      icon='format_size'
      alt='Font Size'
      onClick={ changeTextSize }
    />
  );
}
