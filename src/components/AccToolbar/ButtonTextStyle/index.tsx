import ToolbarButton from '../ToolbarButton';
import tags from '../utils/tags';

/*eslint-disable */
export default function TextStyle() {

  let storageTextStyle: string | null;
  let elements: string | any[]

  const changeTextStyle = (init:boolean) => {
    const storageTextStyle = localStorage.getItem('storageTextStyle')

    if (!init) {
      if (storageTextStyle == '1') localStorage.setItem('storageTextStyle', JSON.stringify(2))
      if (storageTextStyle == '2') localStorage.setItem('storageTextStyle', JSON.stringify(3))
      if (storageTextStyle == '3') localStorage.setItem('storageTextStyle', JSON.stringify(4))
      if (storageTextStyle == '4') localStorage.setItem('storageTextStyle', JSON.stringify(1))
    }

    if (localStorage.getItem('storageTextStyle') != '1') {

      let fontFamily = '';

      switch (localStorage.getItem('storageTextStyle')) {
        case '2':
          fontFamily = 'Lexend Deca'
          break
        case '3':
          fontFamily = 'Lexend Peta'
          break
        case '4':
          fontFamily = 'Open-Dyslexic'
          break
      }

      for (let i = 0; i < elements.length; i += 1) {
        const tag = elements[ i ]

        if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
          tag.style.fontFamily = `${ fontFamily }, sans-serif`
        }
      }

    } else {
      for (let i = 0; i < elements.length; i += 1) {
        const tag = elements[ i ];

        if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
          tag.style.removeProperty('font-family');
        }
      }
    }
  }

  if (typeof window !== 'undefined') {
    storageTextStyle = localStorage.getItem('storageTextStyle') || null;
    elements = tags();

    if (!storageTextStyle) {
      localStorage.setItem('storageTextStyle', JSON.stringify(1));
    } else if (localStorage.getItem(storageTextStyle) != '1') {
      changeTextStyle(true)
    }
  }

  return (
    <ToolbarButton
      icon='text_format'
      alt='Fonte'
      onClick={ () => changeTextStyle(false) }
    />
  );
}
