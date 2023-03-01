import Image from 'next/image';

export default function FloatingIcon({ setShowToolbar, showToolbar }: React.ComponentState) {
  return (
    <button
      type='button'
      className='floatingIcon'
      onClick={() => setShowToolbar(!showToolbar)}
      style={{
        display: 'flex',
        position: 'fixed',
        bottom: '60%',
        right: '0',
        width: '30px',
        height: '30px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        zIndex: '999',
        background: 'transparent',
        padding: '0',
      }}>
      <Image
        alt='Acessibility Toolbar'
        src='/img/a11y-symbol.webp'
        width={30}
        height={30}
        quality={100}
        style={{
          borderRadius: '10px',
        }}
      />
    </button>
  );
}
