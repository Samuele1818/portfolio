import { FC } from 'react'
import Link from 'next/link'
import RightArrow from '../../../../public/icons/RightArrow.svg'

type Props = {
 results:
  | { slug: string; title: string }[]
  | undefined
}

const Results: FC<Props> = ({ results }) => {
 return (
  <>
   {results?.length !== 0 ? (
    results?.map((result, index) => (
     <li
      key={index}
      className='w-full px-4 py-4 text-blue-600 hover:bg-blue-100 hover:text-blue-800'
      onMouseDown={(e) => e.preventDefault()}>
      <Link
       href={`/blog/${result.slug}`}
       className='inline-flex w-full items-center justify-between gap-x-4 whitespace-break-spaces'>
       {result.title}
       <RightArrow className='h-fit w-6 flex-shrink-0' />
      </Link>
     </li>
    ))
   ) : (
    <p className='sm-text m-auto py-8 text-slate-600'>
     Nothing found... Try again
    </p>
   )}
  </>
 )
}

export default Results
