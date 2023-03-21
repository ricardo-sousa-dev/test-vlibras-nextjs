import ToolbarButton from '../ToolbarButton';

/*eslint-disable */
export default function Libras() {
  let widgetLibras: Element;

  if (typeof window != 'undefined') {
    for (let index = 0; index < document.getElementsByTagName('DIV').length; index++) {
      const element = document.getElementsByTagName('DIV')[ index ];
      if (element.getAttribute('vw-plugin-wrapper')) {
        widgetLibras = element;
        if (localStorage.getItem('storageLibras') == '2') {
          widgetLibras.setAttribute('class', 'active')
        }
      }
    }
  }

  const setLibras = () => {
    if (localStorage.getItem('storageLibras') == '1') {
      widgetLibras.setAttribute('class', 'active')
      localStorage.setItem('storageLibras', JSON.stringify(2))

    } else if (localStorage.getItem('storageLibras') == '2') {
      widgetLibras.removeAttribute('class')
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
