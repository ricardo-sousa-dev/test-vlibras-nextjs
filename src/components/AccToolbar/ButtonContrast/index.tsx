import ToolbarButton from '../ToolbarButton';
import tags from '../utils/tags';

/*eslint-disable */
export default function ContrastButton() {

  let storageContrast: string | null;
  let elements: string | any[]

  const changeContrast = (init: boolean) => {
    const storageContrast = localStorage.getItem('storageContrast')

    if (!init) {
      if (storageContrast == '1') localStorage.setItem('storageContrast', JSON.stringify(2))
      if (storageContrast == '2') localStorage.setItem('storageContrast', JSON.stringify(3))
      if (storageContrast == '3') localStorage.setItem('storageContrast', JSON.stringify(4))
      if (storageContrast == '4') localStorage.setItem('storageContrast', JSON.stringify(1))
    }

    if (localStorage.getItem('storageContrast') != '1') {
      let primary = '';
      let secondary = '';

      switch (localStorage.getItem('storageContrast')) {
        case '2':
          primary = 'blue'
          secondary = 'white'
          break
        case '3':
          primary = 'black'
          secondary = 'yellow'
          break
        case '4':
          primary = 'white'
          secondary = 'black'
          break
      }

      for (let i = 0; i < elements.length; i += 1) {
        const tag = elements[ i ];

        tag.style.color = primary
        tag.style.background = secondary

        if (tag.tagName !== 'H1'
          && tag.tagName !== 'H2'
          && tag.tagName !== 'H3'
          && tag.tagName !== 'H4'
          && tag.tagName !== 'H5'
          && tag.tagName !== 'H6'
          && tag.tagName !== 'P'
          && tag.tagName !== 'A'

        ) tag.style.border = `1px solid ${ primary }`

        if (tag.tagName === 'BUTTON') {
          tag.style.background = primary;
          tag.style.color = secondary;
          tag.style.border = `1px solid ${ primary }`
        }

        if (tag.tagName === 'A') {
          tag.style.textDecoration = 'underline';
        }

        if (tag.classList.contains('floatingIcon')) {
          tag.style.background = `${ primary } !important`
          tag.style.color = secondary
          tag.style.border = `2px solid ${ primary } !important`
          if (localStorage.getItem('storageContrast') === '4') tag.style.border = `2px solid ${ secondary }`
        }

        if (tag.getAttribute('vw')
          || tag.getAttribute('vw-plugin-wrapper')
          || tag.getAttribute('vw-access-button')
          || tag.classList.contains('vw-plugin-top-wrapper')
        ) {
          tag.style.removeProperty('background');
          tag.style.removeProperty('border');
          tag.style.removeProperty('color');
        }
      }

    } else {
      for (let i = 0; i < elements.length; i += 1) {
        const tag = elements[ i ];

        tag.style.removeProperty('color');
        tag.style.removeProperty('background');
        tag.style.removeProperty('text-decoration');

        if (tag.tagName === 'BUTTON') tag.style.removeProperty('border');

        if (tag.classList.contains('floatingIcon')) {
          tag.style.background = '#003F86'
          tag.style.color = 'white'
          tag.style.border = '1px solid #003F86'
        }
      }
    }
  };

  if (typeof window !== 'undefined') {
    storageContrast = localStorage.getItem('storageContrast') || null;

    elements = tags().filter((tag) =>
      tag.tagName !== 'body'
      && tag.getAttribute('id') !== '__next'
      && !tag.classList.contains('toolbar')
      && tag.getAttribute('id') !== 'closeToolbar'
      && !tag.classList.contains('containerToolbar')
      && !tag.classList.contains('divButtonToolbar')
      && !tag.getAttribute('vw')
      && !tag.getAttribute('vw-plugin-wrapper')
      && !tag.getAttribute('vw-access-button')
      && !tag.classList.contains('vw-plugin-top-wrapper')
    )

    if (!storageContrast) {
      localStorage.setItem('storageContrast', JSON.stringify(1));
    } else if (localStorage.getItem('storageContrast') != '1') {
      changeContrast(true)
    }
  }

  return (
    <ToolbarButton
      icon='contrast'
      alt='Contraste'
      onClick={ () => changeContrast(false) }
    />
  );
}
