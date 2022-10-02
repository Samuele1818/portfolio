import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import Sidebar from '../components/Sidebar'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.svg" />
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
