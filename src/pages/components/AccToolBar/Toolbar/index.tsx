import ContrastButton from '../Contrast';
import { ComponentState } from 'react';

export default function Toolbar({ showToolbar }: ComponentState) {

  return (
    <div
    id='toolbar'
      style={ {
        visibility: showToolbar && "hidden",
        backgroundColor: '#f1f1f1',
        display: 'flex',
        justifyContent: 'center',
        padding: '5px',
        gap: '5px',
        borderRadius: '15px',
        position: 'sticky',
        top: '0',
      } }>
      <ContrastButton />
    </div>
  )
}
