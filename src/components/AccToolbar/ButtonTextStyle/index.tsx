import React, { useEffect, useState } from 'react';

import ToolbarButton from '../ToolbarButton';

/*eslint-disable */
export default function TextStyle() {
  let tagsH1: HTMLHeadingElement[];
  let tagsH2: HTMLHeadingElement[];
  let tagsH3: HTMLHeadingElement[];
  let tagsH4: HTMLHeadingElement[];
  let tagsH5: HTMLHeadingElement[];
  let tagsH6: HTMLHeadingElement[];
  let tagsP: HTMLHeadingElement[];
  let tagsDiv: HTMLDivElement[];
  let tagsButton: HTMLButtonElement[];
  let tagHeader: HTMLElement[];
  let storageTextStyle: string | null;
  let arrayTags: (HTMLButtonElement | HTMLHeadingElement | HTMLDivElement | HTMLElement)[];

  const modifyingTextStyleClear = () => {

    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
        tag.style.removeProperty('font-family');
      }
    }
  }

  const modifyingTextStyle = (family: string) => {

    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
        tag.style.fontFamily = `${ family }, sans-serif`
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
    tagHeader = Array.from(document.querySelectorAll('header'));
    storageTextStyle = localStorage.getItem('storageTextStyle') || null;
    arrayTags = [ tagHeader, tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP, tagsDiv, tagsButton ].flatMap<HTMLButtonElement | HTMLHeadingElement | HTMLDivElement | HTMLElement>(tag => tag);
  }

  useEffect(() => {
    if (!storageTextStyle) {
      localStorage.setItem('storageTextStyle', JSON.stringify(1));
    } else {
      switch (JSON.parse(storageTextStyle)) {
        case 1:
          localStorage.setItem('storageTextStyle', JSON.stringify(1));
          modifyingTextStyleClear();
          break;
        case 2:
          localStorage.setItem('storageTextStyle', JSON.stringify(2));
          modifyingTextStyle('Lexend Deca');
          break;
        case 3:
          localStorage.setItem('storageTextStyle', JSON.stringify(3));
          modifyingTextStyle('Lexend Peta');
          break;
        case 4:
          localStorage.setItem('storageTextStyle', JSON.stringify(4));
          modifyingTextStyle('Montserrat');
          break;
        default:
          break;
      }
    }
  }, []);

  const changeTextStyle = () => {
    if (localStorage.getItem('storageTextStyle') == '1') {
      modifyingTextStyle('Lexend Deca');
      localStorage.setItem('storageTextStyle', JSON.stringify(2));
    } else if (localStorage.getItem('storageTextStyle') == '2') {
      modifyingTextStyle('Lexend Peta');
      localStorage.setItem('storageTextStyle', JSON.stringify(3));
    } else if (localStorage.getItem('storageTextStyle') == '3') {
      modifyingTextStyle('Open-Dyslexic');
      localStorage.setItem('storageTextStyle', JSON.stringify(4));
    } else if (localStorage.getItem('storageTextStyle') == '4') {
      modifyingTextStyleClear();
      localStorage.setItem('storageTextStyle', JSON.stringify(1));
    }
  };

  return (
    <ToolbarButton
      icon='text_format'
      alt='Fonte'
      onClick={ changeTextStyle }
    />
  );
}
