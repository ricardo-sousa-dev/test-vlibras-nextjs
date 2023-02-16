import style from './toolbar.module.scss';
import ContrastButton from '../Contrast';
import { ComponentState} from 'react';

export default function Toolbar({ showToolbar }:ComponentState) {
  
  return (
    <div 
    className={ style.toolBar } 
    style={ showToolbar ? {} : {visibility: "hidden"}}>
      <ContrastButton />
    </div>
  )
}
