'use client'
import {
 FC,
 useEffect,
 useRef,
 useState,
} from 'react'
import { Toc } from '../../../types/markdown'

type Props = {
 toc: Toc
 indentDepth?: number
 fromHeading?: number
 toHeading?: number
 exclude?: string | string[]
}

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 */
const TOCInline: FC<Props> = ({
 toc,
 indentDepth = 2,
 fromHeading = 1,
 toHeading = 1,
 exclude = '',
}) => {
 const re = Array.isArray(exclude)
  ? new RegExp(
     '^(' + exclude.join('|') + ')$',
     'i'
    )
  : new RegExp('^(' + exclude + ')$', 'i')

 const filteredToc = toc.filter(
  (heading) =>
   heading.depth >= fromHeading &&
   heading.depth <= toHeading &&
   !re.test(heading.value)
 )

 // Ref for storing the observer instance
 const observerRef =
  useRef<IntersectionObserver | null>(null)

 const [currentHash, setCurrentHash] =
  useState<string>('') // State to store current hash

 useEffect(() => {
  // Function to handle hash change
  const handleHashChange = () => {
   setCurrentHash(window.location.hash)
  }

  // Attach the hashchange event listener
  window.addEventListener(
   'hashchange',
   handleHashChange
  )

  // Call the handler immediately to initialize the current hash
  handleHashChange()

  observerRef.current = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      setCurrentHash(`#${entry.target.id}`)
     }
    })
   },
   {
    threshold: 1, // Adjust as needed
   }
  )

  // Attach the observer to each heading
  filteredToc.forEach((heading) => {
   const target = document.querySelector(
    heading.url
   )
   if (target) {
    observerRef.current?.observe(target)
   }
  })

  // Clean up the event listener when the component unmounts
  return () => {
   window.removeEventListener(
    'hashchange',
    handleHashChange
   )
   if (observerRef.current) {
    observerRef.current.disconnect()
   }
  }
 }, []) // Empty dependency array ensures the effect runs once on mount

 // FIXME: Replace with link when it will work or when a method to get hash will be introduced
 return (
  <ul className='flex flex-col gap-y-5'>
   {filteredToc.map((heading) => (
    <li
     key={heading.url}
     className={`${
      heading.depth >= indentDepth && 'ml-6'
     }`}>
     <a
      className={`${
       heading.url === currentHash
        ? 'text-blue-600'
        : 'text-dark'
      } md-text transition-colors hover:text-gray-500`}
      href={heading.url}>
      {heading.value}
     </a>
    </li>
   ))}
  </ul>
 )
}

export default TOCInline
