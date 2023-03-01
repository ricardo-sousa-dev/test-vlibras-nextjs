import React, { useEffect, useState } from 'react';

import ButtonTollbar from '../ButtonToolbar';

/*eslint-disable */
export default function TextSize() {
  let tagsH1: HTMLCollectionOf<HTMLElement>;
  let tagsH2: HTMLCollectionOf<HTMLElement>;
  let tagsH3: HTMLCollectionOf<HTMLElement>;
  let tagsH4: HTMLCollectionOf<HTMLElement>;
  let tagsH5: HTMLCollectionOf<HTMLElement>;
  let tagsH6: HTMLCollectionOf<HTMLElement>;
  let tagsP: HTMLCollectionOf<HTMLElement>;
  let tagsA: HTMLCollectionOf<HTMLElement>;
  let tagHeader: HTMLCollectionOf<HTMLElement>;
  let storageTextSize: string | null;
  let arrayTags: HTMLCollectionOf<HTMLElement>[];

  const [textSize, setTextSize] = useState(1);
  const regexSize = /\d+\.\d+/;
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
      const tag = arrayTags[i];

      for (let t = 0; t < tag.length; t += 1) {
        if (!tag[t].parentElement?.classList.contains('divButtonToolbar')) {
          tag[t].style.removeProperty('font-size');
        }
      }
    }

    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i += 1) {
      if (!divs[i].parentElement?.classList.contains('divButtonToolbar')) {
        divs[i].style.removeProperty('font-size');
      }
    }
  };

  const modifyingTextSize = (size: number) => {
    console.log('TextSize: ', textSize);

    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[i];

      for (let t = 0; t < tag.length; t += 1) {
        if (!tag[t].parentElement?.classList.contains('divButtonToolbar')) {
          const originSize = parseFloat(Number(regexSize.exec(getComputedStyle(tag[t]).fontSize)).toFixed(2));

          if (!originSize) {
            switch (tag[t].tagName) {
              case 'H1':
                tag[t].style.fontSize = `${sizeH1 + sizeH1 * size}`.slice(0, 5) + 'px';
                break;
              case 'H2':
                tag[t].style.fontSize = `${sizeH2 + sizeH2 * size}`.slice(0, 5) + 'px';
                break;
              case 'H3':
                tag[t].style.fontSize = `${sizeH3 + sizeH3 * size}`.slice(0, 5) + 'px';
                break;
              case 'H4':
                tag[t].style.fontSize = `${sizeH4 + sizeH4 * size}`.slice(0, 5) + 'px';
                break;
              case 'H5':
                tag[t].style.fontSize = `${sizeH5 + sizeH5 * size}`.slice(0, 5) + 'px';
                break;
              case 'P':
                tag[t].style.fontSize = `${sizeP + sizeP * size}`.slice(0, 5) + 'px';
                break;
              case 'LI':
                console.log(tag[t].childNodes);
                tag[t].style.fontSize = `${sizeLi + sizeLi * size}`.slice(0, 5) + 'px';
                break;
              case 'A':
                tag[t].style.fontSize = `${sizeA + sizeA * size}`.slice(0, 5) + 'px';
                break;
              default:
                break;
            }
          } else {
            tag[t].style.fontSize = `${originSize + originSize * size}`.slice(0, 5) + 'px';
          }
        }
      }
    }
    const divs = document.querySelectorAll('div');
    const drillingTag = (div) => {
      for (let i = 0; i < div.length; i += 1) {
        if (!div[i].classList.contains('divButtonToolbar')) {
          if (div[i].childNodes.length == 0) {
            const originSize = parseFloat(Number(regexSize.exec(getComputedStyle(div[i]).fontSize)).toFixed(2));
            div[i].style.fontSize = `${originSize + originSize * size}`.slice(0, 5) + 'px';
          } else {
            drillingTag(div[i]);
          }
        }
      }
    };
    drillingTag(divs);
  };

  if (typeof window !== 'undefined') {
    tagsH1 = document.getElementsByTagName('h1');
    tagsH2 = document.getElementsByTagName('h2');
    tagsH3 = document.getElementsByTagName('h3');
    tagsH4 = document.getElementsByTagName('h4');
    tagsH5 = document.getElementsByTagName('h5');
    tagsH6 = document.getElementsByTagName('h6');
    tagsP = document.getElementsByTagName('p');
    tagsA = document.getElementsByTagName('a');
    tagHeader = document.getElementsByTagName('header');
    storageTextSize = localStorage.getItem('storageTextSize') || null;
    arrayTags = [tagHeader, tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP];
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
      icon='/img/format_size.svg'
      alt='Font Size'
      onClick={changeTextSize}
    />
  );
}
