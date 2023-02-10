import { useEffect } from 'react';
import Script from 'next/script'
import MicAccessTool from '../AccToolBar/app/js/common';

export default function AccToolBar() {
  const page = window.document

  useEffect(() => {
    if (typeof page !== 'undefined') {
      new MicAccessTool({});
    }
  }, [page])

  return <Script src="./acctoolbar.min.js" />
}