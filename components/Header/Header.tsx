'use client'
import { FC } from 'react'
import Link from 'next/link'
import Logo from '../../public/logo.svg'
import CTA from '../CTA'
import { useRouter } from 'next/navigation'

/*
  Provides logo and the CTA to redirect to the Contact Form
*/
const Header: FC = () => {
 const { push } = useRouter()

 // Slidebar with hamburger menu for mobile devices with animation (works with the next container so in NextJs13 this code needs adjustments )
 /*  const [isSidebar, toggleSidebar] =
                                   useState<boolean>(false)
                                 
                                 const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
                                 
                                 const handleContainer = async () => {
                                   const nextContainer =
                                     document.getElementById('__next')
                                   if (nextContainer) {
                                     if (isSidebar) {
                                       timeout.current && clearTimeout(timeout.current)
                                       nextContainer.style.height = '100vh'
                                       nextContainer.style.overflowY = 'hidden'
                                     } else {
                                       timeout.current && clearTimeout(timeout.current)
                                       timeout.current = setTimeout(() => {
                                         nextContainer.style.height = '100%'
                                         nextContainer.style.overflowY = 'auto'
                                       }, 800)
                                     }
                                     nextContainer.style.cursor = isSidebar
                                       ? 'pointer'
                                       : 'inherit'
                                     nextContainer.style.transform = isSidebar
                                       ? 'scaleY(0.8) translateX(-50%)'
                                       : ''
                                   }
                                 }
                                 
                                 useEffect(() => {
                                   const sidebar = document.getElementById('sidebar')
                                   const closeButton = document.getElementById(
                                     'close-sidebar'
                                   )
                                   if (closeButton && sidebar) {
                                     handleContainer()
                                     sidebar.style.display = isSidebar ? 'block' : 'none'
                                     // Make animation
                                     // Make open/close button animation
                                     closeButton.style.scale = isSidebar ? '1' : '0'
                                     // Disallow page scrolling
                                     document.documentElement.style.overflow =
                                       isSidebar ? 'hidden' : 'auto'
                                   }
                                 }, [isSidebar])*/

 // https://stackoverflow.com/questions/60540985/react-usestate-doesnt-update-in-window-events
 /*  const mouseDownListener = (e: Event) => {
                                                  // Fix typescript error "Property 'id' does not exist on type 'EventTarget'"
                                                  const t = e.target as HTMLDivElement
                                                  const sidebar = document.getElementById('sidebar')
                                                  toggleSidebar((isSidebar) => {
                                                    if (t == null) return false
                                                    if (t.id == 'open-sidebar') return true
                                                    if (t.id == 'close-sidebar') return false
                                                    return isSidebar && sidebar ? sidebar.contains(t) : false
                                                  })
                                                }
                                                
                                                const resizeListener = () => {
                                                  // If page width is greater or equal to large size, close sidebar
                                                  if (window.outerWidth >= 1024)
                                                    toggleSidebar(false)
                                                }
                                                
                                                useEffect(() => {
                                                  document.addEventListener(
                                                    'mousedown',
                                                    mouseDownListener
                                                  )
                                                  window.addEventListener(
                                                    'resize',
                                                    resizeListener,
                                                    true
                                                  )
                                                  return () => {
                                                    document.removeEventListener(
                                                      'mousedown',
                                                      mouseDownListener
                                                    )
                                                    window.removeEventListener(
                                                      'resize',
                                                      resizeListener
                                                    )
                                                  }
                                                }, [])*/

 return (
  <header className='layout inline-flex w-full items-center justify-between bg-white pt-12 text-electricViolet'>
   <Link
    className='inline-flex items-center gap-x-2'
    href='/'>
    <Logo className='fill-electricViolet' />
    <p className='hidden font-extrabold md:block'>
     Samuele Sciatore
    </p>
   </Link>
   {/*      <HamburgerMenu
        id="open-sidebar"
        className="lg:hidden"
        width="24"
        height="24"
        viewBox="0 0 14 10"
      />*/}
   <div className='inline-flex items-center'>
    {/*<Link href="resume" target="_blank" className="mr-4 hover-underline-animation text-bastille">Resume</Link>*/}
    <CTA
     text='Contact Me'
     onClick={() => push('#contact-form')}
    />
   </div>
  </header>
 )
}

export default Header
