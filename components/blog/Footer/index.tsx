import { FC } from 'react'
import Link from 'next/link'
import Logo from '../../../public/logo.svg'

const Footer: FC = ({}) => {
 return (
  <footer className='mt-36 bg-white p-4 sm:p-6'>
   <div className='mx-auto max-w-screen-xl'>
    <div className='md:flex md:justify-between'>
     <div className='mb-6 md:mb-0'>
      <Link
       className='inline-flex flex-wrap items-center gap-x-2'
       href='/'>
       <Logo className='h-fit w-10 fill-violet-800' />
       <p className='font-extrabold text-violet-800'>
        Samuele Sciatore
       </p>
      </Link>
     </div>
     <div className='grid grid-cols-2 gap-8'>
      <div>
       <h2 className='sm-text mb-6 font-semibold uppercase'>
        Contacts
       </h2>
       <ul className='text-lightDark'>
        <li className='mb-4'>
         <Link
          href='/#contact'
          className='hover:underline'>
          Contact me
         </Link>
        </li>
        <li>
         <Link
          href='mailto:samuelesciatore.19@gmail.com'
          className='hover:underline'>
          Email
         </Link>
        </li>
       </ul>
      </div>
      <div>
       <h2 className='sm-text mb-6 font-semibold uppercase'>
        Follow me
       </h2>
       <ul className='text-lightDark'>
        <li className='mb-4'>
         <Link
          href='https://github.com/Samuele1818'
          className='hover:underline '>
          Github
         </Link>
        </li>
        <li>
         <Link
          href='https://stackoverflow.com/users/12119966/samuele1818'
          className='hover:underline'>
          Stackoverflow
         </Link>
        </li>
       </ul>
      </div>
     </div>
    </div>
    <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
    <div className='sm:flex sm:items-center sm:justify-between'>
     <span className='sm-text text-gray-500 sm:text-center'>
      © {new Date().getFullYear()}{' '}
      <Link href='/' className='hover:underline'>
       Samuele Sciatore
      </Link>
      . All Rights Reserved.
     </span>
     <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
      <Link
       href='https://github.com/Samuele1818'
       className='text-lightDark hover:text-gray-500'>
       <svg
        className='h-8 w-8'
        fill='currentColor'
        viewBox='0 0 24 24'
        aria-hidden='true'>
        <path
         fillRule='evenodd'
         d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
         clipRule='evenodd'
        />
       </svg>
      </Link>
     </div>
    </div>
   </div>
  </footer>
 )
}

export default Footer
