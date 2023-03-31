import { useEffect, useState } from 'react';
import ToolbarButton from '../ToolbarButton';

/*eslint-disable */
export default function Libras() {
  const [ disabledLibras, setDisabledLibras ] = useState(true);

  const storageLibras = localStorage.getItem('storageLibras');

  setTimeout(() => {
    setDisabledLibras(false);
  }, 5000);

  const setLibras = () => {
    if (storageLibras == '1') {
      console.log('ToolbarButton LIBRAS: 1')

      localStorage.setItem('storageLibras', JSON.stringify(2))

      const openWidget = document.getElementsByClassName('access-button')[ 0 ] as HTMLElement
      openWidget.click();
      setDisabledLibras(true);

      setTimeout(() => {
        setDisabledLibras(false);
        document.getElementsByClassName('vpw-settings-btn-close')[ 0 ]
          .addEventListener('click', () =>
            localStorage.setItem('storageLibras', JSON.stringify(1))
          )
      }, 6000);
    }

    if (storageLibras == '2') {
      console.log('ToolbarButton LIBRAS: 2')
      localStorage.setItem('storageLibras', JSON.stringify(1))
      setDisabledLibras(true);

      setTimeout(() => {
        setDisabledLibras(false);
      }, 6000);
      
      const closeWidget: HTMLElement = document.getElementsByClassName('vpw-settings-btn-close')[ 0 ] as HTMLElement;
      closeWidget.click()
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
