import React, { MouseEventHandler } from 'react';

interface Icon {
  icon: string;
  alt: string;
  onClick?: MouseEventHandler<HTMLElement>;
  id?: string;
}

export default function ToolbarButton({ icon, alt, onClick, id}: Icon) {
  return (
    <div
      className='divButtonToolbar'
      style={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: 'none',
      } }>
      <button
        type='button'
        style={ {
          padding: '2px 4px',
          border: '2px solid gray',
          borderRadius: '7px',
          cursor: 'pointer',
          background: 'transparent',
        } }
        className='a11yIcon'
        onClick={ onClick }>
        <span 
        style={{
            borderRadius: '7px'
          }}
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
