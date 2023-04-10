import { useEffect, useState } from 'react';
import ToolbarButton from '../ToolbarButton';

/*eslint-disable */
export default function Libras() {
  const [ disabledLibras, setDisabledLibras ] = useState(true);
  const [ firstLoading, setFirstLoading] = useState(true);

  const storageLibras = localStorage.getItem('storageLibras');

  const delayButton = () => {

    if (firstLoading) {
      setDisabledLibras(true);

      setTimeout(() => {
        setDisabledLibras(false);

        const closeWidget: HTMLElement = document.getElementsByClassName('vpw-settings-btn-close')[ 0 ] as HTMLElement;
        if (closeWidget) closeWidget.style.opacity = '0';

        const titleWidget: HTMLElement = document.getElementsByClassName('vpw-mes')[ 0 ] as HTMLElement;
        if (titleWidget) titleWidget.innerText = 'LIBRAS'
        setFirstLoading(false);
      }, 10000);
    
    } else {
      setDisabledLibras(true);
      setTimeout(() => {
        setDisabledLibras(false);
      }, 3000);
    }
  }

  useEffect(() => delayButton(), [])

  const setLibras = () => {
    delayButton()
    
    if (storageLibras == '1') {
      localStorage.setItem('storageLibras', JSON.stringify(2))

      try {
        const showWidget = document.getElementsByClassName('access-button')[ 0 ] as HTMLElement
        showWidget.click();
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

    if (storageLibras == '2') {
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
