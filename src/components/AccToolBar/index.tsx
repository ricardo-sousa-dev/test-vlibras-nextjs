import { useState } from 'react';
import FloatingIcon from './FloatingIcon';
import Toolbar from './Toolbar';

export default function AccToolbar() {
  const [ showToolbar, setShowToolbar ] = useState(true)

  return (
    <>
      <FloatingIcon 
      setShowToolbar={ setShowToolbar } 
      showToolbar={showToolbar}
      />
      <Toolbar
      showToolbar={showToolbar}
      />
    </>
  )
}
