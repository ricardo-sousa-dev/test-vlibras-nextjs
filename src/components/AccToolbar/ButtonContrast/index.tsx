import { useState } from 'react';
import ToolbarButton from '../ToolbarButton';
import tags from '../utils/tags';

/*eslint-disable */
let elements: string | any[] | null;


export default function ContrastButton() {
  const [ disabledContrast, setDisabledContrast ] = useState(false);

  // const delayButton = () => {
  //   setDisabledContrast(true)
  //   setTimeout(() => {
  //     setDisabledContrast(false)
  //   }, 1000);
  // }

  const changeContrast = (init: boolean) => {

    // const searchDivLibras = document.getElementsByTagName('div');
    // let librasComplete = true;

    // for (let index = 0; index < searchDivLibras.length; index++) {
    //   const element = searchDivLibras[ index ];
    //   if (element.getAttributeNames().includes('vw-access-button') &&
    //     !element.classList.contains('active')) {
    //     if (!document.getElementsByClassName('vpw-settings-btn-close')[ 0 ]) {
    //       librasComplete = false;
    //     }
    //   }
    // }
    try {


      elements = tags()
      const storageContrast = localStorage.getItem('storageContrast')

      if (!init) {
        if (storageContrast == '1') localStorage.setItem('storageContrast', JSON.stringify(2))
        if (storageContrast == '2') localStorage.setItem('storageContrast', JSON.stringify(3))
        if (storageContrast == '3') localStorage.setItem('storageContrast', JSON.stringify(4))
        if (storageContrast == '4') localStorage.setItem('storageContrast', JSON.stringify(1))
      }

      if (localStorage.getItem('storageContrast') != '1') {
        let primary = '';
        let secondary = '';

        switch (localStorage.getItem('storageContrast')) {
          case '2':
            primary = 'blue'
            secondary = 'white'
            break
          case '3':
            primary = 'black'
            secondary = 'yellow'
            break
          case '4':
            primary = 'white'
            secondary = 'black'
            break
        }

        if (elements)
          for (let i = 0; i < elements.length; i += 1) {
            const tag = elements[ i ];
            console.log('IF CONTRAST FOR ' + tag)

            if (
              tag.getAttribute('id') !== '__next' ||
              tag.getAttribute('id') !== 'gameContainer' ||
              !tag.getAttributeNames().includes('vp') ||
              !tag.getAttributeNames().includes('vw') ||
              !tag.classList.contains('toolbar') ||
              !tag.classList.contains('containerToolbar') ||
              !tag.classList.contains('divButtonToolbar') ||
              !tag.classList.contains('vpw-component-play') ||
              !tag.classList.contains('vpw-component-pause') ||
              !tag.classList.contains('vpw-component-restart') ||
              !tag.classList.contains('noUi-base') ||
              !tag.classList.contains('noUi-origin') ||
              !tag.classList.contains('noUi-handle') ||
              !tag.classList.contains('vpw-slider') ||
              !tag.classList.contains('vp-settings-btn') ||
              !tag.classList.contains('vp-container') ||
              !tag.classList.contains('vpw-content') ||
              !tag.classList.contains('vpw-regions') ||
              !tag.classList.contains('vpw-cont') ||
              !tag.classList.contains('vpw-flag') ||
              !tag.classList.contains('vpw-container-regions') ||
              !tag.classList.contains('vpw-border-default') ||
              !tag.classList.contains('vpw-img-default') ||
              !tag.classList.contains('vp-settings-menu') ||
              !tag.parentElement?.getAttributeNames().includes('vw') ||
              tag.parentElement?.getAttribute('id') !== 'gameContainer' ||
              !tag.parentElement?.getAttributeNames().includes('vp') ||
              !tag.parentElement?.getAttributeNames().includes('vp-box') ||
              !tag.parentElement?.getAttributeNames().includes('vp-info-screen') ||
              !tag.parentElement?.getAttributeNames().includes('vp-suggestion-screen') ||
              !tag.parentElement?.getAttributeNames().includes('vp-suggestion-button') ||
              !tag.parentElement?.getAttributeNames().includes('vp-rate-box') ||
              !tag.parentElement?.getAttributeNames().includes('vp-rate-button') ||
              !tag.parentElement?.getAttributeNames().includes('vp-controls') ||
              !(tag.tagName == 'p' && tag.parentElement?.classList.contains('divButtonToolbar')) ||
              !tag.parentElement?.classList.contains('divButtonToolbar') ||
              !tag.parentElement?.classList.contains('containerToolbar') ||
              !tag.parentElement?.classList.contains('toolbar') ||
              !tag.parentElement?.classList.contains('vp-controls-play') ||
              !tag.parentElement?.classList.contains('vpw-slider') ||
              !tag.parentElement?.classList.contains('vpw-content') ||
              !tag.parentElement?.classList.contains('vpw-localism') ||
              !tag.parentElement?.classList.contains('vpw-national') ||
              !tag.parentElement?.classList.contains('vp-settings-btn') ||
              !tag.parentElement?.classList.contains('vpw-controls-speed') ||
              !tag.parentElement?.classList.contains('vp-close-button') ||
              !tag.parentElement?.classList.contains('vpw-controls-subtitles') ||
              !tag.parentElement?.classList.contains('vpw-btn-close') ||
              !tag.parentElement?.classList.contains('vpw-clickable') ||
              !tag.parentElement?.classList.contains('vpw-container-opacity') ||
              !tag.parentElement?.classList.contains('vpw-vlibras-logo') ||
              !tag.parentElement?.classList.contains('vp-button-change-avatar') ||
              !tag.parentElement?.classList.contains('vp-button') ||
              !tag.parentElement?.classList.contains('vp-container')) {
              tag.style.color = primary
              tag.style.background = secondary

              if (tag.tagName !== 'H1'
                && tag.tagName !== 'H2'
                && tag.tagName !== 'H3'
                && tag.tagName !== 'H4'
                && tag.tagName !== 'H5'
                && tag.tagName !== 'H6'
                && tag.tagName !== 'P'
                && tag.tagName !== 'A'
              ) tag.style.border = `1px solid ${ primary }`


              if (tag.tagName === 'BUTTON') {
                tag.style.background = primary;
                tag.style.color = secondary;
                tag.style.border = `1px solid ${ primary } important`
              }

              if (tag.tagName === 'A') {
                tag.style.textDecoration = 'underline';
              }

            }
            if (tag.classList.contains('floatingIcon')) {
              tag.style.background = `${ primary } !important`
              tag.style.color = secondary
              tag.style.border = `2px solid ${ primary } !important`
              if (localStorage.getItem('storageContrast') === '4') tag.style.border = `2px solid ${ secondary }`
            }

            if (
              tag.getAttribute('id') == '__next' ||
              tag.getAttribute('id') == 'gameContainer' ||
              tag.classList.contains('toolbar') ||
              tag.classList.contains('containerToolbar') ||
              tag.classList.contains('divButtonToolbar') ||
              tag.parentElement?.classList.contains('divButtonToolbar') ||
              tag.parentElement?.classList.contains('containerToolbar') ||
              tag.parentElement?.classList.contains('toolbar')
            ) {
              tag.style.removeProperty('background');
              tag.style.removeProperty('border');
              tag.style.removeProperty('color');
            }

            if (
              tag.getAttributeNames().includes('vp') ||
              tag.getAttributeNames().includes('vw') ||
              tag.classList.contains('vpw-component-play') ||
              tag.classList.contains('vpw-component-pause') ||
              tag.classList.contains('vpw-component-restart') ||
              tag.classList.contains('noUi-base') ||
              tag.classList.contains('noUi-origin') ||
              tag.classList.contains('noUi-handle') ||
              tag.classList.contains('vpw-slider') ||
              tag.classList.contains('vp-settings-btn') ||
              tag.classList.contains('vp-container') ||
              tag.classList.contains('vpw-content') ||
              tag.classList.contains('vpw-regions') ||
              tag.classList.contains('vpw-cont') ||
              tag.classList.contains('vpw-flag') ||
              tag.classList.contains('vpw-container-regions') ||
              tag.classList.contains('vpw-border-default') ||
              tag.classList.contains('vpw-img-default') ||
              tag.classList.contains('vpw-settings-btn-menu') ||
              tag.classList.contains('vpw-settings-btn-close') ||
              tag.parentElement?.getAttributeNames().includes('vw') ||
              tag.parentElement?.getAttribute('id') == 'gameContainer' ||
              tag.parentElement?.getAttributeNames().includes('vp') ||
              tag.parentElement?.getAttributeNames().includes('vp-box') ||
              tag.parentElement?.getAttributeNames().includes('vp-info-screen') ||
              tag.parentElement?.getAttributeNames().includes('vp-suggestion-screen') ||
              tag.parentElement?.getAttributeNames().includes('vp-suggestion-button') ||
              tag.parentElement?.getAttributeNames().includes('vp-rate-box') ||
              tag.parentElement?.getAttributeNames().includes('vp-rate-button') ||
              tag.parentElement?.getAttributeNames().includes('vp-controls') ||
              (tag.tagName == 'p' && tag.parentElement?.classList.contains('divButtonToolbar')) ||
              tag.parentElement?.classList.contains('vp-controls-play') ||
              tag.parentElement?.classList.contains('vpw-slider') ||
              tag.parentElement?.classList.contains('vpw-content') ||
              tag.parentElement?.classList.contains('vpw-localism') ||
              tag.parentElement?.classList.contains('vpw-national') ||
              tag.parentElement?.classList.contains('vp-settings-btn') ||
              tag.parentElement?.classList.contains('vpw-controls-speed') ||
              tag.parentElement?.classList.contains('vp-close-button') ||
              tag.parentElement?.classList.contains('vpw-controls-subtitles') ||
              tag.parentElement?.classList.contains('vpw-btn-close') ||
              tag.parentElement?.classList.contains('vpw-clickable') ||
              tag.parentElement?.classList.contains('vpw-container-opacity') ||
              tag.parentElement?.classList.contains('vpw-vlibras-logo') ||
              tag.parentElement?.classList.contains('vp-button-change-avatar') ||
              tag.parentElement?.classList.contains('vp-button') ||
              tag.parentElement?.classList.contains('vp-container')
            ) {
              tag.style.removeProperty('background');
              tag.style.removeProperty('border');
              tag.style.removeProperty('color');
            }

            if (tag.classList.contains('toolbar')) tag.style.background = 'white';
          }

      } else {
        if (elements)
          for (let i = 0; i < elements.length; i += 1) {
            const tag = elements[ i ];
            console.log('ELSE CONTRAST FOR ' + tag)
            tag.style.removeProperty('color');
            tag.style.removeProperty('background');
            tag.style.removeProperty('text-decoration');

            if (tag.tagName === 'BUTTON' && tag.style.border) tag.style.removeProperty('border');

            if (tag.classList.contains('floatingIcon')) {
              tag.style.background = '#003F86'
              tag.style.color = 'white'
              tag.style.border = '1px solid #003F86'
            }

            if (tag.classList.contains('toolbar')) tag.style.background = 'white';
          }
      }
    } catch (error) {
      console.log('ERROR CONTRAST', error);
    }
  };

  let storageContrast: string | null;

  if (typeof window !== 'undefined') {
    storageContrast = localStorage.getItem('storageContrast') || null;

    if (!storageContrast) {
      localStorage.setItem('storageContrast', JSON.stringify(1));
    } else if (localStorage.getItem('storageContrast') != '1') {
      changeContrast(true)
    }
  }

  return (
    disabledContrast ? <ToolbarButton
      icon='contrast'
      alt='Contraste'
      color='#DCDCDC'
    /> : <ToolbarButton
      icon='contrast'
      alt='Contraste'
      onClick={ () => changeContrast(false) }
    />
  );
}
