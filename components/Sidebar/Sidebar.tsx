import React, { FC } from 'react'
import Link from 'next/link'
import CTA from '../CTA'

const Sidebar: FC = () => {
  
  return (
    <nav
      id="sidebar"
      className='absolute h-full w-full hidden'>
      <div id="close-sidebar"
           className="scale-transition cursor-pointer absolute flex items-center justify-center mt-4 right-4 bg-black rounded-full w-12 h-12">
        <span className="bg-white w-0.5 rounded-xl rotate-45 h-6 absolute block"/>
        <span className="bg-white w-0.5 rounded-xl h-6 -rotate-45 absolute block"/>
      </div>
      <ul className="translate-x-[60%] mt-36 flex flex-col">
        <li className="mb-4">
          <Link href="/">
            <a className="hover-underline-animation">Blog</a>
          </Link>
        </li>
        <li>
          <CTA text="Contact Me"/>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
