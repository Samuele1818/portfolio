import React, { FC } from 'react'
import Link from 'next/link'

const Sidebar: FC = () => {
  
  //TODO: Fix prev url
  return (
    <nav id="sidebar" className="fixed h-full w-full hidden">
      <div id="close-sidebar"
           className="scale-transition cursor-pointer absolute flex items-center justify-center mt-4 right-4 bg-black rounded-full w-12 h-12">
        <span id="close-sidebar" className="bg-white w-0.5 rounded-xl rotate-45 h-6 absolute block"/>
        <span id="close-sidebar" className="bg-white w-0.5 rounded-xl h-6 -rotate-45 absolute block"/>
      </div>
      <ul className="translate-x-[60%] mt-36 flex flex-col">
        <li className="mb-4">
          <Link href="/blog"><a className="mr-4 hover-underline-animation">Blog</a></Link>
        </li>
        <li>
          <Link href={`/contact-me?prevUrl${'/'}`}><a
            className="mr-4 color-animation rounded-3xl w-fit h-fit px-4 py-2">Contact Me</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
