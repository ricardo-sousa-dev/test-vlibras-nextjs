import { useEffect } from 'react';
import ToolbarButton from '../ToolbarButton';

/*eslint-disable */
export default function Libras() {

  const setLibras = () => {
    for (let index = 0; index < document.getElementsByTagName('IMG').length; index++) {
      const element: HTMLElement = document.getElementsByTagName('IMG')[ index ] as HTMLElement;
      if (element.getAttribute('class') === 'access-button') {
        element.click()
      }
    }

    const storageLibras = localStorage.getItem('storageLibras');

    if (storageLibras == '1') {
      localStorage.setItem('storageLibras', JSON.stringify(2))

      for (let index = 0; index < document.getElementsByTagName('IMG').length; index++) {
        const element: HTMLElement = document.getElementsByTagName('IMG')[ index ] as HTMLElement;
        if (element.getAttribute('class') === 'vpw-settings-btn-close') {
          console.log('{{{{{{{{{{{ ᕙ༼~_~༽ᕗ }}}}}}}}}}} ->  element:', element);
          element.addEventListener('click', () => {
            console.log('Inserted event click in close button Libras')
            localStorage.setItem('storageLibras', JSON.stringify(1))
          })
        }
      }

    } else if (storageLibras == '2') {
      localStorage.setItem('storageLibras', JSON.stringify(1))
    }

  //   setTimeout(() => {
  //     for (let index = 0; index < document.getElementsByTagName('IMG').length; index++) {
  //       const element: HTMLElement = document.getElementsByTagName('IMG')[ index ] as HTMLElement;
  //       if (element.getAttribute('class') === 'vpw-settings-btn-close') {
  //         console.log('{{{{{{{{{{{ ᕙ༼~_~༽ᕗ }}}}}}}}}}} ->  element:', element);
  //         element.addEventListener('click', () => {
  //           console.log('Inserted event click in close button Libras')
  //           localStorage.setItem('storageLibras', JSON.stringify(1))
  //         })
  //       }
  //     }
  //   }, 5000);
  }

  // useEffect(() => {
  //  document.getElementsByClassName('vpw-settings-btn-close')[ 0 ]?.addEventListener('click', () => {
  //   localStorage.setItem('storageLibras', JSON.stringify(1))
  //   })
  // }, [ setLibras ])


  return (
    <ToolbarButton
      icon='sign_language'
      alt='Libras'
      onClick={ setLibras }
    />
  );
}
