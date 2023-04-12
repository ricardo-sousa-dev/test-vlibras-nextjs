import ToolbarButton from '../ToolbarButton';
import tags from '../utils/tags';

/*eslint-disable */
export default function ZoomPage() {
  let storageZoomPage: string | null;
  let elements: string | any[] | null;

  const PERCENT = 1.05;

  const changeZoomPage = (init: boolean) => {
    const storageZoomPage = localStorage.getItem('storageZoomPage');

    if (!init) {
      if (storageZoomPage == '1') localStorage.setItem('storageZoomPage', JSON.stringify(2));
      if (storageZoomPage == '2') localStorage.setItem('storageZoomPage', JSON.stringify(3));
      if (storageZoomPage == '3') localStorage.setItem('storageZoomPage', JSON.stringify(4));
      if (storageZoomPage == '4') localStorage.setItem('storageZoomPage', JSON.stringify(1));
    }

    if (localStorage.getItem('storageZoomPage') != '1') {
      const genSizeCalc = (sizeTag: number) => {
        switch (localStorage.getItem('storageZoomPage')) {
          case '2':
            return sizeTag * PERCENT;
          case '3':
            return sizeTag * Math.pow(PERCENT, 2);
          case '4':
            return sizeTag * Math.pow(PERCENT, 3);
          default:
            break;
        }
      };
      if (elements)
        for (let i = 0; i < elements.length; i += 1) {
          const tag = elements[i];
          console.log(tag.tagName);
          if (!tag.parentElement?.classList.contains('divButtonToolbar') && tag.tagName != 'IMG') {
            const fontSizeOriginal = Number(getComputedStyle(tag).fontSize.replace('px', ''));
            tag.style.fontSize = `${genSizeCalc(Number(fontSizeOriginal))}`.slice(0, 5) + 'px';
          }

          if (tag.tagName == 'IMG') {
            tag.style.transform = `scale(1.${localStorage.getItem('storageZoomPage')})`;
          }
        }
    } else {
      if (elements)
        for (let i = 0; i < elements.length; i += 1) {
          const tag = elements[i];

          if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
            tag.style.removeProperty('font-size');
            tag.style.removeProperty('transform');
          }
        }
    }
  };

  if (typeof window !== 'undefined') {
    storageZoomPage = localStorage.getItem('storageZoomPage') || null;
    elements = tags();

    if (!storageZoomPage) {
      localStorage.setItem('storageZoomPage', JSON.stringify(1));
    } else if (localStorage.getItem(storageZoomPage) != '1') {
      changeZoomPage(true);
    }
  }

  return (
    <ToolbarButton
      icon='zoom_out_map'
      alt='Zoom'
      onClick={() => changeZoomPage(false)}
      color={''}
      idButton={''}
    />
  );
}
