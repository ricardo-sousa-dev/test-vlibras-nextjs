import type { AppProps } from 'next/app'
import AccToolbar from '../components/AccToolbar'
import VLibras from '../components/VLibras';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    { process.env.NODE_ENV === "production" && <VLibras forceOnload /> }
      <AccToolbar />
      <Component { ...pageProps } />
    </>
  )
}
