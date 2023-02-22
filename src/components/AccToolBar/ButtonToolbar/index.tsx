
import Image from "next/image";
import React, { MouseEventHandler } from 'react';

interface Icon{
  icon: string;
  alt: string;
  onClick: MouseEventHandler<HTMLElement>
}

export default function ButtonTollbar({icon, alt, onClick}:Icon){
  
  return (
      <button
      type="button"
        style={ {
          padding: '5px 10px',
          borderRadius: '7px',
          margin: '5px',
          cursor: 'pointer',
          background: 'transparent'
        } }
        className='a11yIcon'
        onClick={ onClick }
      >
        <Image
          alt={alt}
          src={icon}
          width={ 30 }
          height={ 30 }
          quality={ 100 }
        />
      </button>
  )
}