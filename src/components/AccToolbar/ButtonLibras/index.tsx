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

    // if (localStorage.getItem('storageLibras') == '1') {
    //   localStorage.setItem('storageLibras', JSON.stringify(2))

    // } else if (localStorage.getItem('storageLibras') == '2') {
    //   localStorage.setItem('storageLibras', JSON.stringify(1))
    // }
  }


  return (
    <ToolbarButton
      icon='sign_language'
      alt='Libras'
      onClick={ setLibras }
    />
  );
}
