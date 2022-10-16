import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import Sidebar from '../components/Sidebar'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.svg" />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
        <Sidebar/>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default Document
