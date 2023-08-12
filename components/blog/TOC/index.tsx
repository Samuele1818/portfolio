'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Toc } from '../../../types/markdown'

export interface TOCInlineProps {
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
 *
 * @param {TOCInlineProps} {
 *   toc,
 *   indentDepth = 3,
 *   fromHeading = 1,
 *   toHeading = 6,
 *   asDisclosure = false,
 *   exclude = '',
 * }
 *
 */
const TOCInline = ({
 toc,
 indentDepth = 2,
 fromHeading = 1,
 toHeading = 1,
 exclude = '',
}: TOCInlineProps) => {
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

 const [currentHref, setCurrentHref] =
  useState('')

 return (
  <ul className='flex flex-col gap-y-5'>
   {filteredToc.map((heading) => (
    <li
     key={heading.value}
     className={`${
      heading.depth >= indentDepth && 'ml-6'
     }`}>
     <Link
      onClick={(e) => {
       setCurrentHref(e.currentTarget.href)
      }}
      className={`${
       currentHref.indexOf(heading.url) != -1
        ? 'text-[#76A9FA]'
        : ''
      } md-text text-dark transition-colors hover:text-gray-500`}
      href={heading.url}>
      {heading.value}
     </Link>
    </li>
   ))}
  </ul>
 )
}

export default TOCInline
