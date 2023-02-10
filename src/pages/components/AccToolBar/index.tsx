import Script from 'next/script'
import MicAccessTool from '../AccToolBar/app/js/common';

export default function AccToolBar (){
  new MicAccessTool({});
  return <Script src="./acctoolbar.min.js" />  
}