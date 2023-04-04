import { useEffect, useState } from 'react';
import ToolbarButton from '../ToolbarButton';
import ButtonContrast from '../ButtonContrast'

/*eslint-disable */
export default function Libras() {
  const [ disabledLibras, setDisabledLibras ] = useState(true);

  const storageLibras = localStorage.getItem('storageLibras');
  const delayButton = () => {

    const closeWidget: HTMLElement = document.getElementsByClassName('vpw-settings-btn-close')[ 0 ] as HTMLElement;
    if (closeWidget) {
      closeWidget.style.opacity = '0';
    }
    setDisabledLibras(true);

    setTimeout(() => {
      setDisabledLibras(false);
      // changeContrast(true)

      const closeWidget: HTMLElement = document.getElementsByClassName('vpw-settings-btn-close')[ 0 ] as HTMLElement;
      if (closeWidget) closeWidget.style.opacity = '0';
      
      const titleWidget: HTMLElement = document.getElementsByClassName('vpw-mes')[0]as HTMLElement;
      if (titleWidget) titleWidget.innerText = 'LIBRAS'
    }, 10000);
  }

  useEffect(() => delayButton(), [])

  const setLibras = () => {
    if (storageLibras == '1') {
      console.log('ToolbarButton LIBRAS: 1')
      delayButton()
      localStorage.setItem('storageLibras', JSON.stringify(2))

      try {
        const showWidget = document.getElementsByClassName('access-button')[ 0 ] as HTMLElement
        showWidget.click();
        const selectText = document.getElementsByClassName('vw-text')

        for (let index = 0; index < selectText.length; index++) {
          const element = selectText[index];
          if(!element.parentElement?.classList.contains('material-symbols-outlined')){
            element.remove();
          }
        }

      } catch (error) {
        console.log('error: ' + error)
      }
    }

    if (storageLibras == '2') {
      console.log('ToolbarButton LIBRAS: 2')
      delayButton()
      localStorage.setItem('storageLibras', JSON.stringify(1))
     
      try {
        const closeWidget: HTMLElement = document.getElementsByClassName('vpw-settings-btn-close')[ 0 ] as HTMLElement;
        closeWidget.click()
        const selectText = document.getElementsByClassName('vw-text')

        for (let index = 0; index < selectText.length; index++) {
          const element = selectText[ index ];
          if (!element.parentElement?.classList.contains('material-symbols-outlined')) {
            element.remove();
          }
        }

      } catch (error) {
        console.log('error: ' + error)
      }
    }
  }

  return (
    disabledLibras ? <ToolbarButton
      icon='sign_language'
      alt='Libras'
      color='#DCDCDC'
    /> : <ToolbarButton
      icon='sign_language'
      alt='Libras'
      onClick={ setLibras }
    />
  );
}
