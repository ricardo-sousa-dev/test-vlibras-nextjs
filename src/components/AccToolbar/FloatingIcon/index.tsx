import Image from 'next/image';

export default function FloatingIcon({ setShowToolbar, showToolbar, icon }: React.ComponentState) {
  return (
    <button
      type='button'
      className='floatingIcon'
      onClick={() => setShowToolbar(!showToolbar)}
      style={{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        position: 'fixed',
        bottom: '60%',
        right: '0',
        width: '30px',
        height: '30px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        zIndex: '999',
        background: 'blue',
        padding: '0',
        color:'white'
      }}>
      <span className="material-symbols-outlined">
        { icon }
      </span>
      {/* <Image
        alt='Acessibility Toolbar'
        src='/img/a11y-symbol.webp'
        width={30}
        height={30}
        quality={100}
        style={{
          borderRadius: '10px',
        }}
      /> */}
    </button>
  );
}
