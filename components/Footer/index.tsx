'use client'
import { FC } from 'react'
import Book from '../../public/icons/Book.svg'
import SecurityShield from '../../public/icons/SecurityShield.svg'
import Weight from '../../public/icons/Weight.svg'
import Binary from '../../public/icons/Binary.svg'
import ContactForm from '../ContactForm'
import Card from '../Card'

/*
  Provide a contact form with some graphic details
*/
const Footer: FC = () => {
 return (
  <footer className="layout flex h-full w-full flex-col bg-[url('/illustrations/footer.svg')] bg-cover bg-bottom py-24 lg:flex-row">
   <div className='z-10 mb-0 mt-12 flex h-[80%] flex-col gap-y-12 rounded-t-lg bg-white px-8 py-4 lg:mt-auto lg:px-24 lg:py-12 xl:w-2/3'>
    <h1 className='mb-12'>Contact me</h1>
    <ContactForm />
    <p className='sm-text mb-0 mt-auto'>
     Copyright © {new Date().getFullYear()}{' '}
     Samuele Sciatore
    </p>
   </div>
   <div className='-ml-24 hidden w-1/3 flex-col-reverse gap-y-12 lg:flex'>
    <div className='flex flex-row'>
     <Card className='rotate-[15deg] bg-white shadow-lg'>
      <Book
       viewBox='0 0 1146 864'
       className='h-64 w-64'
      />
     </Card>
     <Card className='ml-64 rotate-[15deg] bg-white shadow-lg'>
      <Weight
       viewBox='0 0 733 733'
       className='h-64 w-64'
      />
     </Card>
    </div>
    <div className='flex flex-row'>
     <Card className='ml-48 rotate-[15deg] bg-white shadow-lg'>
      <SecurityShield
       viewBox='0 0 644 702'
       className='h-64 w-64'
      />
     </Card>
     <Card className='ml-56 rotate-[15deg] bg-white shadow-lg'>
      <Binary
       viewBox='0 0 765 765'
       className='h-64 w-64'
      />
     </Card>
    </div>
   </div>
  </footer>
 )
}

export default Footer
