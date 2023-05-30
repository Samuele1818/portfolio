import { ReactNode } from 'react'
import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

export default function RootLayout({
 children,
}: {
 children: ReactNode
}) {
 return (
  <html>
   <head>
    <link
     rel='shortcut icon'
     href='/favicon.svg'
    />
    <link
     rel='preconnect'
     href='https://fonts.gstatic.com'
     crossOrigin='anonymous'
    />
    <link
     href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap'
     rel='stylesheet'
    />
   </head>
   <body>{children}</body>
  </html>
 )
}
