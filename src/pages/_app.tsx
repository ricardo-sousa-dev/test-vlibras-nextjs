import type { AppProps } from 'next/app'
import AccToolBar from '../components/AccToolBar'
import VLibras from '../components/VLibras';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <VLibras forceOnload />
      <AccToolBar />
      <Component { ...pageProps } />
    </>
  )
}
