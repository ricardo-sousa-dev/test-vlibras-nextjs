import tags from '../utils/tags';

/*eslint-disable */
export default function TextStyle() {
  let storageTextStyle: string | null;
  let elements: string | any[] | null;

  const changeTextStyle = (init: boolean) => {
    const storageTextStyle = localStorage.getItem('storageTextStyle');

    if (!init) {
      if (storageTextStyle == '1') localStorage.setItem('storageTextStyle', JSON.stringify(2));
      if (storageTextStyle == '2') localStorage.setItem('storageTextStyle', JSON.stringify(3));
      if (storageTextStyle == '3') localStorage.setItem('storageTextStyle', JSON.stringify(4));
      if (storageTextStyle == '4') localStorage.setItem('storageTextStyle', JSON.stringify(1));
    }

    if (localStorage.getItem('storageTextStyle') != '1') {
      let fontFamily = '';

      switch (localStorage.getItem('storageTextStyle')) {
        case '2':
          fontFamily = 'Lexend Deca';
          break;
        case '3':
          fontFamily = 'Lexend Peta';
          break;
        case '4':
          fontFamily = 'Open-Dyslexic';
          break;
      }

      if (elements)
        for (let i = 0; i < elements.length; i += 1) {
          const tag = elements[i];

          if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
            tag.style.fontFamily = `${fontFamily}, sans-serif`;
          }
        }
    } else {
      if (elements)
        for (let i = 0; i < elements.length; i += 1) {
          const tag = elements[i];

          if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
            tag.style.removeProperty('font-family');
          }
        }
    }
  };

  if (typeof window !== 'undefined') {
    storageTextStyle = localStorage.getItem('storageTextStyle') || null;
    elements = tags();

    if (!storageTextStyle) {
      localStorage.setItem('storageTextStyle', JSON.stringify(1));
    } else if (localStorage.getItem(storageTextStyle) != '1') {
      changeTextStyle(true);
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
          border: '1px solid black !important',
          borderRadius: '7px',
          cursor: 'pointer',
          background: '#f1f1f1',
        }}
        className='a11yIcon'
        onClick={() => changeTextStyle(false)}>
          <svg 
          className='iconToolbar'
          xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25">
            <path d="M200 856v-60h560v60H200Zm76-160 175-440h58l175 440h-55l-45-119H376l-45 119h-55Zm117-164h174l-85-222h-4l-85 222Z" />
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
        id='legendButton'>
        Fonte
      </p>
    </div>
  );
}
