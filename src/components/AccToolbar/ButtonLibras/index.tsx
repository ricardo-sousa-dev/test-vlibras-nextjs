import { useEffect } from 'react';
import ToolbarButton from '../ToolbarButton';

/*eslint-disable */
export default function Libras() {

  const storageLibras = localStorage.getItem('storageLibras');
  const toolbarLibras: HTMLButtonElement = document.getElementById('toolbarLibras') as HTMLButtonElement;

  if (toolbarLibras){
    toolbarLibras.disabled = true;
    toolbarLibras.style.color= 'red';
  }

  setTimeout(() =>{
    document.getElementById('toolbarLibras')?.removeAttribute('disabled')
    toolbarLibras.style.removeProperty('color');

  },5000)

  const setLibras = () => {

    if (storageLibras == '1') {
      console.log('ToolbarButton LIBRAS: 1')

      localStorage.setItem('storageLibras', JSON.stringify(2))

      for (let index = 0; index < document.getElementsByTagName('IMG').length; index++) {
        const element: HTMLElement = document.getElementsByTagName('IMG')[ index ] as HTMLElement;
        if (element.getAttribute('class') === 'access-button') {
            element.click()
        }
      }

      setTimeout(() => {
        document.getElementById('toolbarLibras')?.removeAttribute('disabled')

        document.getElementsByClassName('vpw-settings-btn-close')[ 0 ]
          .addEventListener('click', () =>
            localStorage.setItem('storageLibras', JSON.stringify(1))
          )
      }, 6000);
    }

    if (storageLibras == '2') {
      console.log('ToolbarButton LIBRAS: 2')
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
