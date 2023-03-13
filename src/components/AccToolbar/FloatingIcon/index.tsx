export default function FloatingIcon({ setShowToolbar, showToolbar, icon }: React.ComponentState) {
  let storageContrast;
  let storageTextSize;
  let storageTextStyle;

  if (typeof window !== 'undefined') {
    storageContrast = localStorage.getItem('storageContrast') || null;
    storageTextSize = localStorage.getItem('storageTextSize') || null;
    storageTextStyle = localStorage.getItem('storageTextStyle') || null;
    
    if (!storageContrast) localStorage.setItem('storageContrast', JSON.stringify(1))
    if (!storageTextSize) localStorage.setItem('storageTextSize', JSON.stringify(1))
    if (!storageTextStyle) localStorage.setItem('storageTextStyle', JSON.stringify(1))
  }

  return (
    <button
      type='button'
      className='floatingIcon'
      onClick={ () => setShowToolbar(!showToolbar) }
      style={ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        bottom: '60%',
        right: '0',
        width: '30px',
        height: '30px',
        borderRadius: '10px',
        border: '1px solid white',
        cursor: 'pointer',
        zIndex: '999',
        background: 'blue',
        padding: '0',
        color: 'white'
      } }>
      <span className="material-symbols-outlined">
        { icon }
      </span>
    </button>
  );
}
