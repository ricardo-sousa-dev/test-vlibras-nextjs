import Image from 'next/image';

import React, { MouseEventHandler } from 'react';

interface Icon {
  icon: string;
  alt: string;
  onClick: MouseEventHandler<HTMLElement>;
}

export default function ButtonTollbar({ icon, alt, onClick }: Icon) {
  return (
    <div
      className='divButton'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: 'none',
      }}>
      <button
        type='button'
        style={{
          padding: '2px 4px',
          borderRadius: '7px',
          cursor: 'pointer',
          background: 'transparent',
        }}
        className='a11yIcon'
        onClick={onClick}>
        <Image
          alt={alt}
          src={icon}
          width={25}
          height={25}
          quality={100}
        />
      </button>
      <p
        style={{
          margin: '0',
          padding: '0',
          fontSize: '8px',
          color: 'black',
        }}>
        {alt}
      </p>
    </div>
  );
}
