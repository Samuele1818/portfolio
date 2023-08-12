import { FC } from 'react'

type Props = {}

const Searchbar: FC<Props> = ({}) => {
 return (
  <form className='h-fit w-full'>
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
     type='search'
     id='default-search'
     className='xs-text md:sm-text block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500'
     placeholder='Search posts or categories...'
     required
    />
    <button
     type='submit'
     className='xs-text md:sm-text absolute right-2.5 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300'>
     Search
    </button>
   </div>
  </form>
 )
}

export default Searchbar
