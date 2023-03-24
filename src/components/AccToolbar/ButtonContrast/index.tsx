import ToolbarButton from '../ToolbarButton';

/*eslint-disable */
export default function ContrastButton() {
  let tagsH1: HTMLHeadingElement[];
  let tagsH2: HTMLHeadingElement[];
  let tagsH3: HTMLHeadingElement[];
  let tagsH4: HTMLHeadingElement[];
  let tagsH5: HTMLHeadingElement[];
  let tagsH6: HTMLHeadingElement[];
  let tagsP: HTMLHeadingElement[];
  let tagsA: HTMLAnchorElement[];
  let tagsDiv: HTMLDivElement[];
  let tagsButton: HTMLButtonElement[];
  let tagHeader: HTMLElement[];
  let storageContrast: string | null;
  let arrayTags: (HTMLButtonElement | HTMLHeadingElement | HTMLAnchorElement | HTMLDivElement | HTMLElement)[];

  const changeContrast = (init = false) => {
    const storageContrast = localStorage.getItem('storageContrast')

    if (!init) {
      console.log('entrou no init')
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

      for (let i = 0; i < arrayTags.length; i += 1) {
        const tag = arrayTags[ i ];

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

        if (tag.tagName === 'DIV') {
          tag.style.border = `1px solid ${ secondary }!important`
          tag.style.background = secondary
        }

        if (tag.tagName === 'BUTTON') {
          tag.style.background = primary;
          tag.style.color = secondary;
          tag.style.border = `1px solid ${ secondary }`
        }

        if (tag.tagName === 'A') {
          tag.style.textDecoration = `underline ${ secondary }`
        }

        if (tag.parentElement?.classList.contains('divButtonToolbar')
          && tag.tagName !== 'P'
          && tag.tagName !== 'DIV'
        ) {
          tag.style.background = primary;
          tag.style.color = secondary;
        }

        if (tag.classList.contains('toolbar')) {
          tag.style.border = `1px solid ${ primary }`
        }

        if (tag.classList.contains('floatingIcon')) {
          tag.style.background = primary
          tag.style.color = secondary
          tag.style.border = `2px solid ${ primary }`
        }

        if (tag.classList.contains('divButtonToolbar')
          || tag.getAttribute('id') === 'closeToolbar'
          || tag.parentElement?.classList.contains('divButtonToolbar')
          || tag.parentElement?.classList.contains('toolbar')
          || tag.tagName == 'body'
        ) {
          tag.style.border = `1px solid ${ secondary }`
        }
      }
    } else {
      for (let i = 0; i < arrayTags.length; i += 1) {
        const tag = arrayTags[ i ];

        tag.style.removeProperty('color');
        tag.style.removeProperty('background');
        tag.style.removeProperty('text-decoration');
        
        if (!tag.parentElement?.classList.contains('toolbar')) tag.style.removeProperty('border');
        
        if (tag.classList.contains('toolbar')) {
          tag.style.border = '1px solid black'
          tag.style.background = 'white'
        }

        if (tag.parentElement?.classList.contains('divButtonToolbar')
          && tag.tagName === 'BUTTON') {
          tag.style.border = '1px solid gray'
        }

        if (tag.classList.contains('floatingIcon')) {
          tag.style.background = '#003F86'
          tag.style.color = 'white'
          tag.style.border = '1px solid gray'
        }

        if ((tag.parentElement?.classList.contains('divButtonToolbar')
          && tag.tagName == 'P') || tag.classList.contains('containerToolbar')) tag.style.border = '1px solid transparent'

        if (tag.classList.contains('divToolbarButton')) {
          tag.style.border = '1px solid transparent'
        }

        if (tag.classList.contains('divButtonToolbar')
          || tag.parentElement?.classList.contains('toolbar')
          || tag.tagName == 'body'
        ) {
          tag.style.border = `1px solid transparent`
        }
      }
    }
  };

  if (typeof window !== 'undefined') {

    tagsH1 = Array.from(document.querySelectorAll('h1'));
    tagsH2 = Array.from(document.querySelectorAll('h2'));
    tagsH3 = Array.from(document.querySelectorAll('h3'));
    tagsH4 = Array.from(document.querySelectorAll('h4'));
    tagsH5 = Array.from(document.querySelectorAll('h5'));
    tagsH6 = Array.from(document.querySelectorAll('h6'));
    tagsP = Array.from(document.querySelectorAll('p'));
    tagsA = Array.from(document.querySelectorAll('a'));
    tagsDiv = Array.from(document.querySelectorAll('div'));
    tagsButton = Array.from(document.querySelectorAll('button'));
    tagHeader = Array.from(document.querySelectorAll('header'));
    arrayTags = [
      tagHeader, tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP, tagsA, tagsDiv, tagsButton
    ].flatMap<HTMLButtonElement | HTMLHeadingElement | HTMLDivElement | HTMLElement>(tag => tag);
    storageContrast = localStorage.getItem('storageContrast') || null;

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
      onClick={ () => changeContrast() }
    />
  );
}
