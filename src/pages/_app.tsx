import type { AppProps } from 'next/app'
// import AccToolBar from '../components/AccToolBar'
// import VLibras from '../components/VLibras';
import VLibras from 'vlibras-nextjs';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      { process.env.NODE_ENV === "production" && <VLibras forceOnload /> }
      {/* <AccToolBar /> */ }
      <Component { ...pageProps } />
      {/* <VLibras forceOnload={true} /> */}
    </>
  )
}
