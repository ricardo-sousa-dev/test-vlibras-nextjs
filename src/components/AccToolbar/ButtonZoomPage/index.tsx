import React, { useEffect } from 'react';

import ToolbarButton from '../ToolbarButton';

/*eslint-disable */
export default function ZoomPage() {
  let tagsH1: HTMLHeadingElement[];
  let tagsH2: HTMLHeadingElement[];
  let tagsH3: HTMLHeadingElement[];
  let tagsH4: HTMLHeadingElement[];
  let tagsH5: HTMLHeadingElement[];
  let tagsH6: HTMLHeadingElement[];
  let tagsP: HTMLHeadingElement[];
  let tagsDiv: HTMLDivElement[];
  let tagsImg: HTMLHeadingElement[];
  let tagsButton: HTMLButtonElement[];
  let tagHeader: HTMLElement[];
  let storageZoomPage: string | null;
  let arrayTags: (HTMLButtonElement | HTMLHeadingElement | HTMLDivElement | HTMLElement)[];

  const PERCENT_10 = 1.05;
  const sizeH1 = 48.832; //'3.052rem'
  const sizeH2 = 39.056; //'2.441rem'
  const sizeH3 = 31.248; //'1.953rem'
  const sizeH4 = 25.008; //'1.563rem'
  const sizeH5 = 20; //'1.25rem'
  const sizeP = 16; //'1rem'
  const sizeLi = 16; //'1rem'
  const sizeA = 16; //'1rem'

  const modifyingZoomPageClear = () => {

    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
        tag.style.removeProperty('font-size');
        tag.style.removeProperty('transform')
      }
    }
  };

  const modifyingZoomPage = (size: number) => {

    const genSizeCalc = (sizeTag: number) => {
      if (size == 1) {
        return sizeTag * PERCENT_10
      } else if (size == 2) {
        return sizeTag * Math.pow(PERCENT_10, 2)
      } else if (size == 3) {
        return sizeTag * Math.pow(PERCENT_10, 3)
      }
    }

    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      if (!tag.parentElement?.classList.contains('divButtonToolbar')
        && tag.tagName != 'IMG') {
        const fontSizeOriginal = Number(getComputedStyle(tag).fontSize.replace('px', ''));

        // if (fontSizeOriginal) {
        //   tag.style.fontSize = `${ genSizeCalc(fontSizeOriginal) }`.slice(0, 5) + 'px';

        // } else {
          switch (tag.tagName) {
            case 'H1':
              tag.style.fontSize = `${ genSizeCalc(sizeH1) }`.slice(0, 5) + 'px';
              break;
            case 'H2':
              tag.style.fontSize = `${ genSizeCalc(sizeH2) }`.slice(0, 5) + 'px';
              break;
            case 'H3':
              tag.style.fontSize = `${ genSizeCalc(sizeH3) }`.slice(0, 5) + 'px';
              break;
            case 'H4':
              tag.style.fontSize = `${ genSizeCalc(sizeH4) }`.slice(0, 5) + 'px';
              break;
            case 'H5':
              tag.style.fontSize = `${ genSizeCalc(sizeH5) }`.slice(0, 5) + 'px';
              break;
            case 'P':
              tag.style.fontSize = `${ genSizeCalc(sizeP) }`.slice(0, 5) + 'px';
              break;
            case 'LI':
              tag.style.fontSize = `${ genSizeCalc(sizeLi) }`.slice(0, 5) + 'px';
              break;
            case 'A':
              tag.style.fontSize = `${ genSizeCalc(sizeA) }`.slice(0, 5) + 'px';
              break;
            default:
              break;
          }
        }
      // }
      if (tag.tagName == 'IMG') tag.style.setProperty('transform', `scale(1.${ size })`)
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
    tagsImg = Array.from(document.querySelectorAll('img'));
    tagsButton = Array.from(document.querySelectorAll('button'));
    tagHeader = Array.from(document.querySelectorAll('header'));
    storageZoomPage = localStorage.getItem('storageZoomPage') || null;
    arrayTags = [ tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP, tagsDiv, tagsImg, tagsButton, tagHeader ].flatMap<HTMLButtonElement | HTMLHeadingElement | HTMLDivElement | HTMLElement>(tag => tag);
  }

  useEffect(() => {
    if (!storageZoomPage) {
      localStorage.setItem('storageZoomPage', JSON.stringify(1));
    } else {
      switch (JSON.parse(storageZoomPage)) {
        case 1:
          localStorage.setItem('storageZoomPage', JSON.stringify(1))
          setTimeout(() => modifyingZoomPageClear(), 1000);
          break;
        case 2:
          localStorage.setItem('storageZoomPage', JSON.stringify(2))
          setTimeout(() => modifyingZoomPage(1), 1000);
          break;
        case 3:
          localStorage.setItem('storageZoomPage', JSON.stringify(3))
          setTimeout(() => modifyingZoomPage(2), 1000);
          break;
        case 4:
          localStorage.setItem('storageZoomPage', JSON.stringify(4))
          setTimeout(() => modifyingZoomPage(3), 1000);
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
    tagsDiv = Array.from(document.querySelectorAll('div'));
    tagsImg = Array.from(document.querySelectorAll('img'));
    tagsButton = Array.from(document.querySelectorAll('button'));
    tagHeader = Array.from(document.querySelectorAll('header'));
    storageZoomPage = localStorage.getItem('storageZoomPage') || null;
    arrayTags = [ tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP, tagsDiv, tagsImg, tagsButton, tagHeader ].flatMap<HTMLButtonElement | HTMLHeadingElement | HTMLDivElement | HTMLElement>(tag => tag);

  }, []);

  const changeZoomPage = () => {
    if (localStorage.getItem('storageZoomPage') == '1') {
      modifyingZoomPage(1);
      localStorage.setItem('storageZoomPage', JSON.stringify(2));
    } else if (localStorage.getItem('storageZoomPage') == '2') {
      modifyingZoomPage(2);
      localStorage.setItem('storageZoomPage', JSON.stringify(3));
    } else if (localStorage.getItem('storageZoomPage') == '3') {
      modifyingZoomPage(3);
      localStorage.setItem('storageZoomPage', JSON.stringify(4));
    } else if (localStorage.getItem('storageZoomPage') == '4') {
      modifyingZoomPageClear();
      localStorage.setItem('storageZoomPage', JSON.stringify(1));
    }
  };

  return (
    <ToolbarButton
      icon='zoom_out_map'
      alt='Zoom'
      onClick={ changeZoomPage }
    />
  );
}
