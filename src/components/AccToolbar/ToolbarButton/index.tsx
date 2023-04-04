import React, { MouseEventHandler } from 'react';

interface Icon {
  icon: string;
  alt: string;
  onClick?: MouseEventHandler<HTMLElement>;
  idButton?: string;
  id?: string;
  color?:string;
}

export default function ToolbarButton({ icon, alt, onClick, idButton, color }: Icon) {
  return (
    <div
      className='divButtonToolbar'
      style={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid transparent',
      } }>
      <button
        type='button'
        style={ {
          padding: '2px 4px',
          border: '1px solid black !important',
          borderRadius: '7px',
          cursor: 'pointer',
          background: '#f1f1f1',
        } }
        className='a11yIcon'
        id={ idButton }
        onClick={ onClick }>
        <span
          style={ {
            borderRadius: '7px',
            color: color
          } }
          className="material-symbols-outlined">
          { icon }
        </span>
      </button>
      <p
        style={ {
          margin: '0',
          padding: '0',
          fontSize: '8px',
          color: 'black',
          fontFamily: 'Lexend Deca, sans-serif'
        } }>
        { alt }
      </p>
    </div>
  );
}
