import React, { useEffect, useState } from 'react';

import ToolbarButton from '../ToolbarButton';

type ElementDom = HTMLHeadingElement | HTMLAnchorElement | HTMLDivElement | HTMLButtonElement | HTMLElement
/*eslint-disable */
export default function ContrastButton() {
  let tagsH1: HTMLHeadingElement[];
  let tagsH2: HTMLHeadingElement[];
  let tagsH3: HTMLHeadingElement[];
  let tagsH4: HTMLHeadingElement[];
  let tagsH5: HTMLHeadingElement[];
  let tagsH6: HTMLHeadingElement[];
  let tagsP: HTMLHeadingElement[];
  let tagsA: HTMLAnchorElement[];
  let tagsDiv: HTMLDivElement[];
  let tagsButton: HTMLButtonElement[];
  let tagHeader: HTMLElement[];
  let storageContrast: string | null;
  let arrayTags: (HTMLButtonElement | HTMLHeadingElement | HTMLAnchorElement | HTMLDivElement | HTMLElement)[];

  const notChangeIfAttributeLibras = (element: ElementDom) => {
    if (element.getAttributeNames().filter((attributte) =>
      attributte == (
        'vw'
        || 'vw-access-button'
        || 'vw-plugin-wraper'
        || 'settings-btn'
        || 'settings-btn-close'
        || 'vp'
        || 'vp-box'
        || 'vp-message-box'
        || 'vp-settings'
        || 'vp-settings-btn'
        || 'vp-info-screen'
        || 'vp-dictionary'
        || 'vp-suggestion-screen'
        || 'vp-suggestion-area'
        || 'vp-suggestion-button'
        || 'vp-rate-box'
        || 'vp-rate-button'
        || 'vp-container'
        || 'vp-controll'
        || 'vp-change-avatar'
      ))
      || element.parentElement?.getAttributeNames().some((attributte)=> attributte == 'vpw-mes')) {
      return true
    } else {
      return false
    }
  }
  /*eslint-disable */
  const modifyContrastClear = () => {

    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      tag.style.removeProperty('color');
      tag.style.removeProperty('background');
      tag.style.removeProperty('border');
      tag.style.removeProperty('text-decoration');

      if (tag.classList.contains('toolbar')) {
        tag.style.border = '1px solid grey'
        tag.style.background = 'white'
      }

      if (tag.parentElement?.classList.contains('divButtonToolbar')
        && tag.tagName === 'BUTTON') {
        tag.style.border = '2px solid grey'
      }

      if (tag.classList.contains('floatingIcon')) {
        tag.style.background = 'blue'
        tag.style.color = 'white'
      }
    }

  };

  const modifyContrast = (option: number) => {
    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      switch (option) {
        case 2:
          tag.style.color = 'blue';
          
          if (!notChangeIfAttributeLibras(tag)) {
            tag.style.background = 'white'
          }else{
            tag.style.color = 'white';
        }

          if (tag.tagName === 'BUTTON') {
            tag.style.background = 'blue !important';
            tag.style.color = 'white';
            tag.style.border = '2px solid blue'
          }
          if (tag.parentElement?.classList.contains('divButtonToolbar')
            && tag.tagName !== 'P'
            && tag.tagName !== 'DIV'
          ) {
            tag.style.background = 'blue';
            tag.style.color = 'white';
          }
          if (tag.tagName === 'A') {
            tag.style.textDecoration = 'underline blue'
          }
          if (tag.classList.contains('toolbar')) {
            tag.style.border = '1px solid blue'
          }
          if (tag.getAttribute('id') !== ('__next')
            && tag.tagName === 'DIV'
            && !tag.parentElement?.classList.contains('toolbar')
            && !tag.classList.contains('containerToolbar')
            && !tag.classList.contains('closeToolbar')
            && !tag.classList.contains('divButtonToolbar')
            && !notChangeIfAttributeLibras(tag)
          ) {
            tag.style.border = '1px solid blue'
          }
          if (tag.classList.contains('floatingIcon')) {
            tag.style.background = 'blue'
            tag.style.color = 'white'
            tag.style.border = '2px solid blue'
          }
          break;

        case 3:
          tag.style.color = 'black';

          if (tag.getAttribute('id') !== ('__next')
            && tag.tagName === 'DIV'
            && !tag.parentElement?.classList.contains('toolbar')
            && !tag.classList.contains('containerToolbar')
            && !tag.classList.contains('closeToolbar')
            && !tag.classList.contains('divButtonToolbar')
            && notChangeIfAttributeLibras(tag)
          ) {
            tag.style.background = 'yellow';
          }

          if (tag.tagName === 'BUTTON') {
            tag.style.background = 'black';
            tag.style.color = 'yellow';
            tag.style.border = '2px solid black';
          }
          if (tag.parentElement?.classList.contains('divButtonToolbar')
            && tag.tagName !== 'P'
            && tag.tagName !== 'DIV'
          ) {
            tag.style.background = 'yellow';
            tag.style.color = 'black';
          }
          if (tag.getAttribute('id') == 'closeToolbar') {
            tag.style.removeProperty('background')
          }
          if (tag.tagName === 'A') {
            tag.style.textDecoration = 'underline black'
          }
          if (tag.getAttribute('id') !== ('__next')
            && tag.tagName === 'DIV'
            && !tag.parentElement?.classList.contains('toolbar')
            && !tag.classList.contains('containerToolbar')
            && !tag.classList.contains('closeToolbar')
            && !tag.classList.contains('divButtonToolbar')
            && notChangeIfAttributeLibras(tag)
          ) {
            tag.style.border = '1px solid black'
          }
          if (tag.classList.contains('toolbar')) {
            tag.style.border = '1px solid black'
          }
          break;

        case 4:

          if (tag.getAttribute('id') !== ('__next')
            && tag.tagName === 'DIV'
            && !tag.parentElement?.classList.contains('toolbar')
            && !tag.classList.contains('containerToolbar')
            && !tag.classList.contains('closeToolbar')
            && !tag.classList.contains('divButtonToolbar')
            && notChangeIfAttributeLibras(tag)
          ) {
            tag.style.background = 'black';
            tag.style.color = 'white';

          }
          if (tag.tagName === 'BUTTON') {
            tag.style.removeProperty('background')
            tag.style.background = 'white';
            tag.style.color = 'black';
            tag.style.border = '2px solid black'
          }
          if (tag.parentElement?.classList.contains('divButtonToolbar')
            && tag.tagName !== 'P'
            && tag.tagName !== 'DIV'
          ) {
            tag.style.background = 'black';
            tag.style.color = 'white';
          }
          if (tag.tagName === 'A') {
            tag.style.textDecoration = 'underline white'
          }
          if (tag.getAttribute('id') !== ('__next')
            && tag.tagName === 'DIV'
            && !tag.parentElement?.classList.contains('toolbar')
            && !tag.classList.contains('containerToolbar')
            && !tag.classList.contains('closeToolbar')
            && !tag.classList.contains('divButtonToolbar')
            && notChangeIfAttributeLibras(tag)
          ) {
            tag.style.border = '1px solid white'
          }

          if (tag.classList.contains('toolbar')) {
            tag.style.border = '1px solid black'
          }
          break;

        default:
          break;
      }
    }
  }

  if (typeof window !== 'undefined') {
    tagsH1 = Array.from(document.querySelectorAll('h1'));
    tagsH2 = Array.from(document.querySelectorAll('h2'));
    tagsH3 = Array.from(document.querySelectorAll('h3'));
    tagsH4 = Array.from(document.querySelectorAll('h4'));
    tagsH5 = Array.from(document.querySelectorAll('h5'));
    tagsH6 = Array.from(document.querySelectorAll('h6'));
    tagsP = Array.from(document.querySelectorAll('p'));
    tagsA = Array.from(document.querySelectorAll('a'));
    tagsDiv = Array.from(document.querySelectorAll('div'));
    tagsButton = Array.from(document.querySelectorAll('button'));
    tagHeader = Array.from(document.querySelectorAll('header'));
    arrayTags = [
      tagHeader, tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP, tagsA, tagsDiv, tagsButton
    ].flatMap<HTMLButtonElement | HTMLHeadingElement | HTMLDivElement | HTMLElement>(tag => tag);
    storageContrast = localStorage.getItem('storageContrast') || null;
  }

  useEffect(() => {
    if (!storageContrast) {
      localStorage.setItem('storageContrast', JSON.stringify(1));
    } else {
      switch (JSON.parse(storageContrast)) {
        case 1:
          setTimeout(() => modifyContrastClear(), 1000);
          break;
        case 2:
          setTimeout(() => modifyContrast(2), 1000);
          break;
        case 3:
          setTimeout(() => modifyContrast(3), 1000);
          break;
        case 4:
          setTimeout(() => modifyContrast(4), 1000);
          break;
        default:
          break;
      }
    }

    tagsH1 = Array.from(document.querySelectorAll('h1'));
    tagsH2 = Array.from(document.querySelectorAll('h2'));
    tagsH3 = Array.from(document.querySelectorAll('h3'));
    tagsH4 = Array.from(document.querySelectorAll('h4'));
    tagsH5 = Array.from(document.querySelectorAll('h5'));
    tagsH6 = Array.from(document.querySelectorAll('h6'));
    tagsP = Array.from(document.querySelectorAll('p'));
    tagsA = Array.from(document.querySelectorAll('a'));
    tagsDiv = Array.from(document.querySelectorAll('div'));
    tagsButton = Array.from(document.querySelectorAll('button'));
    tagHeader = Array.from(document.querySelectorAll('header'));
    arrayTags = [
      tagHeader, tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP, tagsA, tagsDiv, tagsButton
    ].flatMap<HTMLButtonElement | HTMLHeadingElement | HTMLDivElement | HTMLElement>(tag => tag);
    storageContrast = localStorage.getItem('storageContrast') || null;
  }, []);

  const changeContrast = () => {
    if (localStorage.getItem('storageContrast') === '1') {
      modifyContrast(2);
      localStorage.setItem('storageContrast', JSON.stringify(2));
    } else if (localStorage.getItem('storageContrast') === '2') {
      modifyContrast(3);
      localStorage.setItem('storageContrast', JSON.stringify(3));
    } else if (localStorage.getItem('storageContrast') === '3') {
      modifyContrast(4);
      localStorage.setItem('storageContrast', JSON.stringify(4));
    } else if (localStorage.getItem('storageContrast') === '4') {
      modifyContrastClear();
      localStorage.setItem('storageContrast', JSON.stringify(1));
    }
  };

  return (
    <ToolbarButton
      icon='contrast'
      alt='Contraste'
      onClick={ changeContrast }
    />
  );
}
