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
  }

  return (
    <ToolbarButton
      icon='sign_language'
      alt='Libras'
      onClick={ setLibras }
    />
  );
}
