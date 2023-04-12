import { useEffect, useState } from 'react';

import ToolbarButton from '../ToolbarButton';
import Head from '../utils/head';
import tags from '../utils/tags';

/*eslint-disable */

export default function ContrastButton() {
  const [disabledContrast, setDisabledContrast] = useState(true);
  let elements: string | any[] | null;

  const changeContrast = (init: boolean) => {
    if (!document.getElementsByClassName('vpw-box')[0]) {
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
            const tag = elements[i];

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
              tag.tagName !== 'LI' &&
              tag.tagName !== 'A' &&
              tag.tagName !== 'DIV' &&
              tag.tagName !== 'IMG'
            )
              tag.style.border = `1px solid ${primary}`;

            if (tag.tagName === 'BUTTON' && typeof tag !== 'undefined') {
              tag.style.background = primary;
              tag.style.color = secondary;
              tag.style.border = `1px solid ${primary} important`;
            }

            if (tag.tagName === 'A') {
              tag.style.textDecoration = 'underline';
            }
          }
        }
      } else {
        if (elements) {
          for (let i = 0; i < elements.length; i += 1) {
            const tag = elements[i];
            tag.style.removeProperty('color');
            tag.style.removeProperty('background');
            tag.style.removeProperty('text-decoration');
            tag.style.removeProperty('border');
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
    Head();
  }, []);

  useEffect(() => {
    changeContrast(true);
  }, [window.document.URL]);

  return disabledContrast ? (
    <ToolbarButton
      icon='contrast'
      alt='Contraste'
      color='#DCDCDC'
      onClick={(): void => {}}
      idButton={''}
    />
  ) : (
    <ToolbarButton
      icon='contrast'
      alt='Contraste'
      onClick={() => changeContrast(false)}
      color={''}
      idButton={''}
    />
  );
}
