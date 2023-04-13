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
    <div
      className='divButtonToolbar'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid transparent',
      }}>
      <button
        type='button'
        style={{
          padding: '2px 4px',
          border: '1px solid #000000',
          borderRadius: '7px',
          cursor: 'pointer',
          background: '#f1f1f1',
        }}
        className='a11yIcon'
        onClick={() => changeZoomPage(false)}>
        <svg
          className='iconToolbar'
          xmlns='http://www.w3.org/2000/svg'
          height='25'
          viewBox='0 96 960 960'
          width='25'>
          <path d='M120 936V706h60v127l148-148 43 43-148 148h127v60H120Zm490 0v-60h127L590 729l43-43 147 147V706h60v230H610ZM327 466 180 319v127h-60V216h230v60H223l147 147-43 43Zm306 0-43-43 147-147H610v-60h230v230h-60V319L633 466Z' />
        </svg>
      </button>
      <p
        style={{
          margin: '0',
          padding: '0',
          fontSize: '8px',
          color: '#000000 !important',
          fontFamily: 'Lexend Deca, sans-serif',
        }}
        className='legendButton'>
        Zoom
      </p>
    </div>
  );
}
