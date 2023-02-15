import style from './accToolBar.module.scss';
import ContrastButton from './Contrast'

export default function AccToolBar() {

  return (
    <div className={ style.accToolBar }>
      <ContrastButton />
    </div>
  )
}
