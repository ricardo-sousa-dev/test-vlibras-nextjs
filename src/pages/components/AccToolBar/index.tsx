import { useEffect } from 'react';
import Script from 'next/script'
import MicAccessTool from '../AccToolBar/app/js/common';

export default function AccToolBar (){
  
  useEffect(()=>{
    new MicAccessTool({});
  },[])
  return <Script src="./acctoolbar.min.js" />  
}