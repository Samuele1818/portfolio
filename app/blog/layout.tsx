import { ReactNode } from 'react'
import '../../styles/globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

/*
   Create the common layout to all pages
   @param children: Children to be rendered
*/
export default function RootLayout({
 children,
}: {
 children: ReactNode
}) {
 return (
  <html lang='en'>
   <head>
    {/*  Set the favicon */}
    <link
     rel='shortcut icon'
     href='/favicon.svg'
    />
    {/*  Preload connection to font source */}
    <link
     rel='preconnect'
     href='https://fonts.gstatic.com'
     crossOrigin='anonymous'
    />
    {/*  Set the font family */}
    <link
     href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap'
     rel='stylesheet'
    />
   </head>
   <body>
    <Header />
    <div className='layout mt-24 w-full'>
     {children}
    </div>
    <Footer />
   </body>
  </html>
 )
}
