import style from './floatingIcon.module.scss'
import Image from 'next/image'

export default function FloatingIcon({ setShowToolbar, showToolbar }: React.ComponentState){

  return(
    <span 
    className={ style.floatingIcon }
    onClick={()=>setShowToolbar(!showToolbar)}>
      <Image
        alt='Acessibility Toolbar'
        src='/a11y-symbol.webp'
        width={30}
        height={30}
        quality={ 100 }
      />
    </span>)
}