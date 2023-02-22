import type { AppProps } from 'next/app'
import AccToolBar from '../components/AccToolBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AccToolBar />
      <Component { ...pageProps } />
    </>
  )
}
