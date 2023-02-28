import { useEffect, useState } from 'react';

import FloatingIcon from './FloatingIcon';
import Toolbar from './Toolbar';

export default function AccToolbar() {
  const [ showToolbar, setShowToolbar ] = useState(false);

  useEffect(() => {
    const textSize = localStorage.getItem('storageTextSize');
    const contrast = localStorage.getItem('storageContrast');

    if ((textSize || contrast) === null) {
      setShowToolbar(false)
    } else {
      if ((textSize || contrast) !== '1') {
        setShowToolbar(true);
      }
      else {
        setShowToolbar(false);
      }
    }

  }, []);

  return (
    <>
      <FloatingIcon
        setShowToolbar={ setShowToolbar }
        showToolbar={ showToolbar }
      />

      { showToolbar ? <Toolbar /> : null }
    </>
  );
}
