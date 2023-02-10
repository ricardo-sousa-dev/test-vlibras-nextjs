import { useEffect } from 'react'
import Script from 'next/script'

export default function AccToolBar (){
  <>
    <Script src="./acctoolbar.min.js" />

      window.onload = function() {
        window.micAccessTool = new MicAccessTool({
          link: 'http://your-awesome-website.com/your-accessibility-declaration.pdf',
          contact: 'mailto:your-mail@your-awesome-website.com',
          buttonPosition: 'right', // default is 'left'
          forceLang: 'ru-RU' // default is 'en' may be 'he-IL', 'ru-RU', or 'fr_FR'
        })
      }
    </>
}