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
  let storageTextSize: string | null;
  let arrayTags: HTMLCollectionOf<HTMLElement>[];

  const [ textSize, setTextSize ] = useState(1);

  const modifyingTextSizeClear = () => {
    console.log('TextSize: ', textSize)

    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      for (let t = 0; t < tag.length; t += 1) {
        tag[ t ].style.removeProperty('fontSize');
      }
    }

    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i += 1) {
      divs[ i ].style.removeProperty('font-size');
    }
  }

  const modifyingTextSize = (size:string)=>{
    console.log('TextSize: ', textSize)

    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      for (let t = 0; t < tag.length; t += 1) {
        if (!tag[ t ].parentElement?.classList.contains('divButtonToolbar')) {
          tag[ t ].style.fontSize = size;
        }
      }
    }
    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i += 1) {
      if (!divs[ i ].classList.contains('divButtonToolbar')) {
        divs[ i ].style.fontSize = size;
      }
    }
  }
  
  if (typeof window !== 'undefined') {

    tagsH1 = document.getElementsByTagName('h1')
    tagsH2 = document.getElementsByTagName('h2')
    tagsH3 = document.getElementsByTagName('h3')
    tagsH4 = document.getElementsByTagName('h4')
    tagsH5 = document.getElementsByTagName('h5')
    tagsH6 = document.getElementsByTagName('h6')
    tagsP = document.getElementsByTagName('p')
    storageTextSize = localStorage.getItem('storageTextSize') || null
    arrayTags = [ tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP ];
  }

  useEffect(() => {
    if (!storageTextSize) {
      localStorage.setItem('storageTextSize', JSON.stringify(1))
    } else {

      switch (JSON.parse(storageTextSize)) {
        case 1:
          setTextSize(1)
          modifyingTextSizeClear();
          break;
        case 2:
          setTextSize(2)
          modifyingTextSize('110%');
          break;
        case 3:
          setTextSize(3);
          modifyingTextSize('115%');
          break;
        case 4:
          setTextSize(4);
          modifyingTextSize('120%');
          break;
        default:
          break;
      }
    }
  }, [])

  const changeTextSize = () => {

    if (textSize == 1) {
      setTextSize(2);
      modifyingTextSize('110%');
      localStorage.setItem('storageTextSize', JSON.stringify(2))
    } else if (textSize == 2) {
      setTextSize(3);
      modifyingTextSize('115%');
      localStorage.setItem('storageTextSize', JSON.stringify(3))
    } else if (textSize == 3) {
      setTextSize(4);
      modifyingTextSize('120%');
      localStorage.setItem('storageTextSize', JSON.stringify(4))
    } else if (textSize == 4) {
      setTextSize(1);
      modifyingTextSizeClear();
      localStorage.setItem('storageTextSize', JSON.stringify(1))
    }
  };

  return (
    <ButtonTollbar
      icon='/format_size.svg'
      alt='Font Size'
      onClick={ changeTextSize } />
  )
}