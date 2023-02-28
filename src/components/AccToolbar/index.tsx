import { useEffect, useState } from 'react';

import FloatingIcon from './FloatingIcon';
import Toolbar from './Toolbar';

export default function AccToolbar() {
  const [showToolbar, setShowToolbar] = useState(false);

  useEffect(() => {
    const textSize = JSON.parse(localStorage.getItem('storageTextSize')||'');
    const contrast = JSON.parse(localStorage.getItem('storageContrast')||'');

    if (textSize !== 1 || contrast !== 1) {
      setShowToolbar(true);
    }
  }, []);

  return (
    <>
      <FloatingIcon
        setShowToolbar={setShowToolbar}
        showToolbar={showToolbar}
      />

      {showToolbar ? <Toolbar /> : null}
    </>
  );
}
