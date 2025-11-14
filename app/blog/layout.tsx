import { ReactNode } from 'react'
import '../../styles/globals.css'
import Header from '../../components/Header'
import Footer from '../../components/blog/Footer'
import Contact from '../../components/blog/Contact'

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
  <>
   <Header />
   <div className='layout mt-36 w-full'>
    {children}
    <Contact />
    <Footer />
   </div>
  </>
 )
}
