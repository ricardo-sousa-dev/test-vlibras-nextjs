
import ToolbarButton from '../ToolbarButton';
import tags from '../utils/tags';

/*eslint-disable */
export default function Reset() {

  let elements: string | any[]

  const reset = () => {

    //contrast
    for (let i = 0; i < elements.length; i += 1) {
      const tag = elements[ i ];

      tag.style.removeProperty('background');
      tag.style.removeProperty('color');
      tag.style.removeProperty('border');
      tag.style.removeProperty('text-decoration');

      if (tag.classList.contains('toolbar')) {
        tag.style.background = 'white'
        tag.style.border = '1px solid black'
      }

      if (tag.classList.contains('a11yIcon')) {
        tag.style.border = '1px solid black'
      }

      if (tag.classList.contains('containerToolbar')
        // ||tag.classList.contains('divButtonToolbar')
      ) {
        tag.style.border = '1px solid transparent'
      }

      if (tag.classList.contains('floatingIcon')) {
        tag.style.background = '#003F86'
        tag.style.color = 'white'
        tag.style.border = '1px solid white'
      }

    }
    localStorage.setItem('storageContrast', JSON.stringify(1));


    // text style
    for (let i = 0; i < elements.length; i += 1) {
      const tag = elements[ i ];

      if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
        tag.style.removeProperty('font-family');
      }
    }
    localStorage.setItem('storageTextStyle', JSON.stringify(1));

    // zoom page
    for (let i = 0; i < elements.length; i += 1) {
      const tag = elements[ i ];

      if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
        tag.style.removeProperty('font-size');
        tag.style.removeProperty('transform')
      }
    }
    localStorage.setItem('storageZoomPage', JSON.stringify(1));

    // Libras
    localStorage.setItem('storageLibras', JSON.stringify(1))

    // if (typeof window != 'undefined') {
    //   for (let index = 0; index < document.getElementsByTagName('DIV').length; index++) {
    //     const element = document.getElementsByTagName('DIV')[ index ];
    //     if (element.getAttribute('vw-plugin-wrapper')) element.removeAttribute('class')
    //   }
    // }
  };

  if (typeof window !== 'undefined') elements = tags()


  return (
    <ToolbarButton
      icon='cleaning_services'
      alt='Limpar'
      onClick={ reset }
      id='clearButtonToolbar'
    />
  );
}
