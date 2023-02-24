import { Html, Head, Main, NextScript } from 'next/document'
import VLibras from 'vlibras-nextjs';

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="shortcut icon" href="/a11y-symbol.webp" />
      </Head>
      <body>
        { process.env.NODE_ENV === "production" && <VLibras forceOnload /> }

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
