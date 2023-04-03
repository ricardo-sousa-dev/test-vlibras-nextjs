import { useEffect, useState } from 'react';
import ToolbarButton from '../ToolbarButton';

/*eslint-disable */
export default function Libras() {
  const [ disabledLibras, setDisabledLibras ] = useState(true);

  const storageLibras = localStorage.getItem('storageLibras');

  const delayButton = ()=>{
    setDisabledLibras(true);

    setTimeout(() => {
      setDisabledLibras(false);
    }, 10000);
  }

  useEffect(()=>delayButton(),[])
  
  const setLibras = () => {
    if (storageLibras == '1') {
      console.log('ToolbarButton LIBRAS: 1')

      localStorage.setItem('storageLibras', JSON.stringify(2))

      const openWidget = document.getElementsByClassName('access-button')[ 0 ] as HTMLElement
      openWidget.click();
      delayButton()

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
      localStorage.setItem('storageLibras', JSON.stringify(1))
      delayButton()

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
