import { useEffect } from 'react';
import ToolbarButton from '../ToolbarButton';

/*eslint-disable */
export default function Libras() {

  const storageLibras = localStorage.getItem('storageLibras');
  let openLibrasButton: HTMLElement;

  const setLibras = () => {
    const toolbarLibras: HTMLButtonElement = document.getElementById('toolbarLibras') as HTMLButtonElement;

    if (toolbarLibras) toolbarLibras.disabled = true;
    console.log(toolbarLibras)

    setTimeout(() => {
      document.getElementById('toolbarLibras')?.removeAttribute('disabled')
      console.log(document.getElementById('toolbarLibras'))
    }, 5000);

    if (storageLibras == '1') {
      console.log('LIBRAS: 1')
      localStorage.setItem('storageLibras', JSON.stringify(2))

      for (let index = 0; index < document.getElementsByTagName('IMG').length; index++) {
        const element: HTMLElement = document.getElementsByTagName('IMG')[ index ] as HTMLElement;
        if (element.getAttribute('class') === 'access-button') {
          console.log('if clica')
          element.click()
        }
      }

      setTimeout(() => {
        document.getElementsByClassName('vpw-settings-btn-close')[ 0 ]
          .addEventListener('click', () =>
            localStorage.setItem('storageLibras', JSON.stringify(1))
          )
      }, 5000);

    }
    
    if (storageLibras == '2') {
      console.log('LIBRAS: 2')
      localStorage.setItem('storageLibras', JSON.stringify(1))
      const closeWidget: HTMLElement = document.getElementsByClassName('vpw-settings-btn-close')[ 0 ] as HTMLElement;
      closeWidget.click()
    }
  }

  return (
    <ToolbarButton
      icon='sign_language'
      alt='Libras'
      onClick={ setLibras }
      id='toolbarLibras'
    />
  );
}
