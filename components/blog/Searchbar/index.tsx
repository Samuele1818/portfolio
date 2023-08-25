'use client'
import { FC, useMemo, useState } from 'react'
import CTA from '../../CTA'
import debounce from 'lodash.debounce'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import RightArrow from '../../../public/icons/RightArrow.svg'

type Props = {
 value?: string
}

const Searchbar: FC<Props> = ({ value }) => {
 const [opened, setOpened] = useState(false)
 const [results, setResults] =
  useState<{ slug: string; title: string }[]>()

 const onSearch = useMemo(
  () =>
   debounce(async (e) => {
    const response = await fetch(
     `/api/getPosts?searchParam=${e.target.value}`
    )

    if (response.ok) {
     const { results } = await response.json()

     setResults(results)
    }
   }, 400),
  []
 )

 const { push } = useRouter()

 return (
  <div className='relative h-fit w-full overflow-visible'>
   <form
    className='h-fit w-full'
    onFocus={() => setOpened(true)}
    onBlur={() => setOpened(false)}
    onSubmit={(e) => {
     e.preventDefault()
     push(
      `/blog/search/${e.currentTarget.search.value}`
     )
    }}>
    <label
     htmlFor='default-search'
     className='sr-only mb-2 text-sm font-medium text-gray-900'>
     Search
    </label>
    <div className='relative flex h-fit w-full flex-row items-center'>
     <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
      <svg
       className='h-6 w-6'
       aria-hidden='true'
       xmlns='http://www.w3.org/2000/svg'
       fill='none'
       viewBox='0 0 20 20'>
       <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
       />
      </svg>
     </div>
     <input
      name='search'
      onInput={onSearch}
      type='search'
      className='xs-text md:sm-text block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-lightDark focus:border-blue-500 focus:ring-blue-500'
      placeholder='Search posts or categories...'
      defaultValue={decodeURIComponent(
       value || ''
      )}
      required
     />
     <CTA
      text='Search'
      fill='blue'
      className='absolute right-2'
     />
    </div>
   </form>
   {opened && (
    <ul className='absolute z-10 flex h-fit w-full flex-col rounded-b-lg bg-white shadow-lg'>
     {results?.map((result, index) => (
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
     ))}
    </ul>
   )}
  </div>
 )
}

export default Searchbar
