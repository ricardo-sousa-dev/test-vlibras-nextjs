export default function FloatingIcon({ setShowToolbar, showToolbar, icon }: React.ComponentState) {
 if(!icon)return null;
 
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
        bottom: '75%',
        right: '0',
        width: '35px',
        height: '35px',
        borderRadius: '10px',
        border: '1px solid white',
        cursor: 'pointer',
        zIndex: '999',
        background: '#003F86',
        padding: '0',
        color: 'white'
      } }>
      <span className="material-symbols-outlined">
        { icon }
      </span>
    </button>
  );
}
