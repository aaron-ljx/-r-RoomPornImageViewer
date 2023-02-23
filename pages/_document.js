import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>/r/RoomPorn Image Viewer</title>
        <link rel="stylesheet" href="assets/css/main.css" />
        <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}