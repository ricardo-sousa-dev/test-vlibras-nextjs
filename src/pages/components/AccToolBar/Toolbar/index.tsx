import style from './toolbar.module.scss';
import ContrastButton from '../Contrast';
import { useState } from 'react';

export default function Toolbar() {

  return (
    <div className={ style.toolBar }>
      <ContrastButton />
    </div>
  )
}
