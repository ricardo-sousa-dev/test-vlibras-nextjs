import style from './floatingIcon.module.scss'
import Image from 'next/image'

export default function FloatingIcon({ setShowToolbar, showToolbar }: React.ComponentState){

  return(
    <span 
    className={ style.floatingIcon }
    onClick={()=>setShowToolbar(!showToolbar)}>
      <Image
        alt='Acessibility Toolbar'
        src='/vision-down-simbol.png'
        width={35}
        height={35}
        quality={ 100 }
      />
    </span>)
}