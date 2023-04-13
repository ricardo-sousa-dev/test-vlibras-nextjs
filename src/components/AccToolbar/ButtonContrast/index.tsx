import { useEffect, useState } from 'react';

import tags from '../utils/tags';
/*eslint-disable */
let elements: string | any[] | null;

export default function ContrastButton() {
  const [ disabledContrast, setDisabledContrast ] = useState(true);

  const changeContrast = (init: boolean) => {
    if (!document.getElementsByClassName('vpw-box')[ 0 ]) {
      setTimeout(() => {
        setDisabledContrast(false);
      }, 10000);
    }

    try {
      elements = tags();
      const storageContrast = localStorage.getItem('storageContrast');

      if (!init) {
        if (storageContrast == '1') localStorage.setItem('storageContrast', JSON.stringify(2));
        if (storageContrast == '2') localStorage.setItem('storageContrast', JSON.stringify(3));
        if (storageContrast == '3') localStorage.setItem('storageContrast', JSON.stringify(4));
        if (storageContrast == '4') localStorage.setItem('storageContrast', JSON.stringify(1));
      }

      if (localStorage.getItem('storageContrast') != '1') {
        let primary = '';
        let secondary = '';

        switch (localStorage.getItem('storageContrast')) {
          case '2':
            primary = 'blue';
            secondary = 'white';
            break;
          case '3':
            primary = 'black';
            secondary = 'yellow';
            break;
          case '4':
            primary = 'white';
            secondary = 'black';
            break;
        }

        if (elements) {
          for (let i = 0; i < elements.length; i += 1) {
            const tag = elements[ i ];

            tag.style.color = primary;
            tag.style.background = secondary;

            if (
              tag.tagName !== 'H1' &&
              tag.tagName !== 'H2' &&
              tag.tagName !== 'H3' &&
              tag.tagName !== 'H4' &&
              tag.tagName !== 'H5' &&
              tag.tagName !== 'H6' &&
              tag.tagName !== 'P' &&
              tag.tagName !== 'A'
            )
              tag.style.border = `1px solid ${ primary }`;

            if (tag.tagName === 'BUTTON' && typeof tag !== 'undefined') {
              tag.style.background = primary;
              tag.style.color = secondary;
              tag.style.border = `1px solid ${ primary } important`;
            }

            if (tag.getAttribute('class') === 'a11yIcon') tag.style.background = secondary;

            if (tag.tagName === 'A') {
              tag.style.textDecoration = 'underline';
            }

            Array.from(document.getElementsByClassName('iconToolbar')).forEach((item) => {
                item.setAttribute('fill', `${ primary }`)
            })
            document.getElementsByClassName('floatingIcon')[ 0 ].children[ 0 ].setAttribute('fill', `${ secondary}`)
          }
        }
      } else {
        if (elements) {
          for (let i = 0; i < elements.length; i += 1) {
            const tag = elements[ i ];
            tag.style.removeProperty('color');
            tag.style.removeProperty('background');
            tag.style.removeProperty('text-decoration');
            tag.style.removeProperty('border');
            Array.from(document.getElementsByClassName('iconToolbar')).forEach((item) => {
              item.setAttribute('fill', 'black')
            })
          }
        }
      }
    } catch (error) {
      console.log('ERROR CONTRAST', error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('storageLibras') === '2') {
      setTimeout(() => {
        setDisabledContrast(false);
      }, 8000);
    } else {
      setDisabledContrast(false);
    }
    changeContrast(true);
  }, []);

  return (

    <div
      className='divButtonToolbar'
      style={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid transparent',
      } }>
      <button
        type='button'
        style={ {
          padding: '2px 4px',
          border: '1px solid black !important',
          borderRadius: '7px',
          cursor: 'pointer',
        } }
        className='a11yIcon'
        onClick={ () => changeContrast(false) }>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="25"
          width="25"
          fill={ disabledContrast ? 'inherit' : '#EEEEEE' }
          className='iconToolbar'
          viewBox="0 96 960 960"
        >
          <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm20-60q137-10 228.5-106T820 576q0-138-91.5-234T500 236v680Z" />
        </svg>
      </button>
      <p
        style={ {
          margin: '0',
          padding: '0',
          fontSize: '8px',
          color: '#000000 !important',
          fontFamily: 'Lexend Deca, sans-serif',
        } }
        id='legendButton'>
        Contraste
      </p>
    </div>
  );
}
