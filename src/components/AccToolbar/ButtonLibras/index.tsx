import { useEffect, useState } from 'react';
import ToolbarButton from '../ToolbarButton';

/*eslint-disable */
export default function Libras() {
  const [ disabledLibras, setDisabledLibras ] = useState(true);

  const storageLibras = localStorage.getItem('storageLibras');

  const delayButton = () => {

    const closeWidget: HTMLElement = document.getElementsByClassName('vpw-settings-btn-close')[ 0 ] as HTMLElement;
    if (closeWidget) {
      closeWidget.style.opacity = '0';
      // closeWidget.setAttribute('src', '');
    }
    setDisabledLibras(true);

    setTimeout(() => {
      setDisabledLibras(false);

      const closeWidget: HTMLElement = document.getElementsByClassName('vpw-settings-btn-close')[ 0 ] as HTMLElement;
      if (closeWidget) {
        closeWidget.style.opacity = '0';
        // closeWidget.setAttribute('src', '');
      }
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
      } catch (error) {
        console.log('error: ' + error)
      }

      // setTimeout(() => {
      //   setDisabledLibras(false);
      //   document.getElementsByClassName('vpw-settings-btn-close')[ 0 ]
      //     .addEventListener('click', () =>
      //       localStorage.setItem('storageLibras', JSON.stringify(1))
      //     )
      // }, 10000);
    }

    if (storageLibras == '2') {
      console.log('ToolbarButton LIBRAS: 2')
      delayButton()
      localStorage.setItem('storageLibras', JSON.stringify(1))

      try {
        // const showWidget = document.getElementsByClassName('access-button')[ 0 ] as HTMLElement
        // showWidget.click();
        const closeWidget: HTMLElement = document.getElementsByClassName('vpw-settings-btn-close')[ 0 ] as HTMLElement;
        closeWidget.click()
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
