import ToolbarButton from '../ToolbarButton';

/*eslint-disable */
export default function Libras() {

  const setLibras = () => {
    // for (let index = 0; index < document.getElementsByTagName('IMG').length; index++) {
    //   const element: HTMLElement = document.getElementsByTagName('IMG')[ index ] as HTMLElement;
    //   if (element.getAttribute('class') === 'access-button') {
    //     element.click()
    //     setTimeout(() =>
    //       document.getElementsByClassName('vpw-settings-btn-close')[ 0 ]
    //         .addEventListener('click', () =>
    //           localStorage.setItem('storageLibras', JSON.stringify(1)))

    //       , 5000);
    //   }
    // }

    const openLibras = document.getElementsByClassName('access-button')[ 0 ] as HTMLElement;
    openLibras.click();

    setTimeout(() =>
      document.getElementsByClassName('vpw-settings-btn-close')[ 0 ]
        .addEventListener('click', () =>
          localStorage.setItem('storageLibras', JSON.stringify(1)))
      , 10000);

    const storageLibras = localStorage.getItem('storageLibras');

    if (storageLibras == '1') {
      localStorage.setItem('storageLibras', JSON.stringify(2))

    } else if (storageLibras == '2') {
      localStorage.setItem('storageLibras', JSON.stringify(1))
    }
  }

  return (
    <ToolbarButton
      icon='sign_language'
      alt='Libras'
      onClick={ setLibras }
    />
  );
}
