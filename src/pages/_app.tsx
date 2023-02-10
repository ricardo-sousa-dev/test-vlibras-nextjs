import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AccToolBar from './components/AccToolBar'
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
      <Script src='src/pages/components/AccToolBar/acctoolbar.min.js'/>
  {/* <AccToolBar/> */}
  <Component {...pageProps} />
  </>
  )
}
