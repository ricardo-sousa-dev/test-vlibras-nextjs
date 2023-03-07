import React, { useEffect, useState } from 'react';

import ButtonTollbar from '../ButtonToolbar';

/*eslint-disable */
export default function TextStyle() {
  let tagsH1: HTMLCollectionOf<HTMLElement>;
  let tagsH2: HTMLCollectionOf<HTMLElement>;
  let tagsH3: HTMLCollectionOf<HTMLElement>;
  let tagsH4: HTMLCollectionOf<HTMLElement>;
  let tagsH5: HTMLCollectionOf<HTMLElement>;
  let tagsH6: HTMLCollectionOf<HTMLElement>;
  let tagsP: HTMLCollectionOf<HTMLElement>;
  let tagHeader: HTMLCollectionOf<HTMLElement>;
  let storageTextStyle: string | null;
  let arrayTags: HTMLCollectionOf<HTMLElement>[];

  const [ textStyle, setTextStyle ] = useState(1);

  const modifyingTextStyleClear = () => {
    console.log('TextStyle: ', textStyle);

    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      for (let t = 0; t < tag.length; t += 1) {
        if (!tag[ t ].parentElement?.classList.contains('divButtonToolbar')) {
          tag[ t ].style.removeProperty('font-family');
        }
      }
    }

    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i += 1) {
      if (!divs[ i ].parentElement?.classList.contains('divButtonToolbar')) {
        divs[ i ].style.removeProperty('font-family');
      }
    }
  }

  const modifyingTextStyle = (family: string) => {
    console.log('TextStyle: ', textStyle);

    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      for (let t = 0; t < tag.length; t += 1) {
        if (!tag[ t ].parentElement?.classList.contains('divButtonToolbar')) {
          tag[ t ].style.fontFamily = `${ family }, sans-serif`
        }
      }
    }

    const divs = document.querySelectorAll('div');
    const drillingTag = (div: string | any[] | NodeListOf<HTMLDivElement>) => {
      for (let i = 0; i < div.length; i += 1) {
        if (!div[ i ].classList.contains('divButtonToolbar')) {
          if (div[ i ].childNodes.length == 0) {
            div[ i ].style.fontFamily = `${ family }, sans-serif`
          } else {
            drillingTag(div[ i ]);
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
    tagHeader = document.getElementsByTagName('header');
    storageTextStyle = localStorage.getItem('storageTextStyle') || null;
    arrayTags = [ tagHeader, tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP ];
  }

  useEffect(() => {
    if (!storageTextStyle) {
      localStorage.setItem('storageTextStyle', JSON.stringify(1));
    } else {
      switch (JSON.parse(storageTextStyle)) {
        case 1:
          setTextStyle(1);
          modifyingTextStyleClear();
          break;
        case 2:
          setTextStyle(2);
          modifyingTextStyle('Lexend Deca');
          break;
        case 3:
          setTextStyle(3);
          modifyingTextStyle('Lexend Peta');
          break;
        case 4:
          setTextStyle(4);
          modifyingTextStyle('Montserrat');
          break;
        default:
          break;
      }
    }
  }, []);

  const changeTextStyle = () => {
    if (textStyle == 1) {
      setTextStyle(2);
      modifyingTextStyle('Lexend Deca');
      localStorage.setItem('storageTextStyle', JSON.stringify(2));
    } else if (textStyle == 2) {
      setTextStyle(3);
      modifyingTextStyle('Lexend Peta');
      localStorage.setItem('storageTextStyle', JSON.stringify(3));
    } else if (textStyle == 3) {
      setTextStyle(4);
      modifyingTextStyle('Open-Dyslexic');
      localStorage.setItem('storageTextStyle', JSON.stringify(4));
    } else if (textStyle == 4) {
      setTextStyle(1);
      modifyingTextStyleClear();
      localStorage.setItem('storageTextStyle', JSON.stringify(1));
    }
  };

  return (
    <ButtonTollbar
      icon='text_format'
      alt='Text Style'
      onClick={ changeTextStyle }
    />
  );
}
