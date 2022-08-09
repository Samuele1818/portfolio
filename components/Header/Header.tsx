import { FC, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from '../../public/logo.svg'
import CTA from '../CTA'
import HamburgerMenu from '../../public/static/icons/HamburgerMenu.svg'
import { SidebarContext } from '../../pages/_app'

const Header: FC = () => {
  const { isSidebarOpen, toggleIsSidebarOpen } = useContext(SidebarContext)
  
  useEffect(() => {
    const nextContainer =
      document.getElementById('__next')
    const closeButton = document.getElementById(
      'close-sidebar'
    )
    if (nextContainer && closeButton) {
      // Make animation
      nextContainer.style.transform = isSidebarOpen
        ? 'scaleY(0.8) translateX(-50%)'
        : ''
      // Change cursor to pointer when sidebar is open on page container hovering
      nextContainer.style.cursor = isSidebarOpen
        ? 'pointer'
        : 'inherit'
      // Make open/close button animation
      closeButton.style.scale = isSidebarOpen ? '1' : '0'
      // Disallow page scrolling
      document.documentElement.style.overflowY =
        isSidebarOpen ? 'hidden' : 'auto'
      nextContainer.style.overflowY = isSidebarOpen
        ? 'hidden'
        : 'auto'
    }
  }, [isSidebarOpen])
  
  // https://stackoverflow.com/questions/60540985/react-usestate-doesnt-update-in-window-events
  const mouseDownListener = (e: Event) => {
    // Fix typescript error "Property 'id' does not exist on type 'EventTarget'"
    const target = e.target as HTMLDivElement
    toggleIsSidebarOpen((isSidebar) => {
      // If t is null, close sidebar
      if (target == null) return false
      // if clicked item is the toggle button, toggle sidebar
      if (target.id == 'sidebar-toggle') return !isSidebar
      // if clicked item id differ from 'sidebar' and sidebar is open, close it
      return isSidebar && target.id == 'sidebar'
    })
  }
  
  const resizeListener = () => {
    // If page width is greater or equal to medium size, close sidebar
    if (window.outerWidth >= 768)
      toggleIsSidebarOpen(false)
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
  }, [])
  
  return (
      <header className='inline-flex items-center justify-between w-full layout mt-12'>
        <Link href='/'><Logo /></Link>
        <HamburgerMenu
          id='sidebar-toggle'
          className='lg:hidden'
          width='24'
          height='24'
          viewBox='0 0 14 10'
        />
        <div className='hidden lg:block inline-flex items-center'>
          <Link href='/blog'><a className='mr-4 hover-underline-animation'>Blog</a></Link>
          <CTA text='Contact Me' />
        </div>
      </header>
  )
}

export default Header
