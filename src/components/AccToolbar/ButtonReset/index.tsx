
import ToolbarButton from '../ToolbarButton';

/*eslint-disable */
export default function Reset() {
  let tagsH1: HTMLHeadingElement[];
  let tagsH2: HTMLHeadingElement[];
  let tagsH3: HTMLHeadingElement[];
  let tagsH4: HTMLHeadingElement[];
  let tagsH5: HTMLHeadingElement[];
  let tagsH6: HTMLHeadingElement[];
  let tagsP: HTMLHeadingElement[];
  let tagsA: HTMLAnchorElement[];
  let tagsDiv: HTMLDivElement[];
  let tagsImg: HTMLHeadingElement[];
  let tagsButton: HTMLButtonElement[];
  let tagHeader: HTMLElement[];
  let arrayTags: (HTMLButtonElement | HTMLHeadingElement | HTMLDivElement | HTMLElement)[];

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
    tagsImg = Array.from(document.querySelectorAll('img'));
    tagsButton = Array.from(document.querySelectorAll('button'));
    tagHeader = Array.from(document.querySelectorAll('header'));
    arrayTags = [ tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP, tagsA, tagsDiv, tagsImg, tagsButton, tagHeader ].flatMap<HTMLButtonElement | HTMLHeadingElement | HTMLDivElement | HTMLElement>(tag => tag);
  }

  const reset = () => {

    //contrast
    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      tag.style.removeProperty('color');
      tag.style.removeProperty('background');
      tag.style.removeProperty('text-decoration');
      if (!tag.classList.contains('toolbar')){
        tag.style.removeProperty('border');
      }else{
        tag.style.border = '1px solid gray'
      }
      if (tag.classList.contains('floatingIcon')) {
        tag.style.background = 'blue'
        tag.style.color = 'white'
        tag.style.border = '1px solid white'
      }
      if (tag.parentElement?.classList.contains('divButtonToolbar')
        && tag.classList.contains('toolbar')) {
        tag.style.background = 'white'
      }
    }
    localStorage.setItem('storageContrast', JSON.stringify(1));


    // text style
    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
        tag.style.removeProperty('font-family');
      }
    }
    localStorage.setItem('storageTextStyle', JSON.stringify(1));

    // zoom page
    for (let i = 0; i < arrayTags.length; i += 1) {
      const tag = arrayTags[ i ];

      if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
        tag.style.removeProperty('font-size');
        tag.style.removeProperty('transform')
      }
    }
    localStorage.setItem('storageZoomPage', JSON.stringify(1));

    // Libras
    localStorage.setItem('storageLibras', JSON.stringify(1))

    if (typeof window != 'undefined') {
      for (let index = 0; index < document.getElementsByTagName('DIV').length; index++) {
        const element = document.getElementsByTagName('DIV')[ index ];
        if (element.getAttribute('vw-plugin-wrapper')) element.removeAttribute('class')
      }
    }
  };

  return (
    <ToolbarButton
      icon='cleaning_services'
      alt='Limpar'
      onClick={ reset }
      id='clearButtonToolbar'
    />
  );
}
