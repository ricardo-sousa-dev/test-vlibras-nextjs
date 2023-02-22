import Image from 'next/image'

export default function FloatingIcon({ setShowToolbar, showToolbar }: React.ComponentState) {

  return (
    <span
      onClick={ () => setShowToolbar(!showToolbar) }
      style={ {
        position: 'fixed',
        bottom: '60%',
        right: '0',
        width: '30px',
        height: '30px',
        borderRadius: '10px',
        cursor: 'pointer'
      } }>
      <Image
        alt='Acessibility Toolbar'
        src='/a11y-symbol.webp'
        width={ 30 }
        height={ 30 }
        quality={ 100 }
        style={{
         borderRadius:'10px'
        }}
      />
    </span>)
}