'use client'
import {FC} from 'react'
import FooterCard from '../FooterCard'
import Book from '../../public/icons/Book.svg'
import SecurityShield from '../../public/icons/SecurityShield.svg'
import Weight from '../../public/icons/Weight.svg'
import Binary from '../../public/icons/Binary.svg'
import React from '../../public/assets/skills/React.svg'
import NContactForm from '../NContactForm/NContactForm'

/*
Provide a contact form with some graphic details
 */

// TODO: Create animations / transitions
const Footer: FC = () => {
 return (
  <footer className="flex flex-col lg:flex-row bg-[url('/illustrations/Footer.svg')] bg-cover bg-bottom w-full h-full layout mt-24">
   <div className='z-10 flex flex-col bg-white h-[80%] xl:w-2/3 mb-0 mt-12 lg:mt-auto rounded-t-xl px-8 py-4 lg:py-12 lg:px-24 gap-y-12'>
    <h1 className='mb-12'>Contact me</h1>
    <NContactForm />
    <p className='lg-text mb-0 mt-auto'>
     Copyright © {new Date().getFullYear()}{' '}
     Samuele Sciatore
    </p>
   </div>
   <div className='flex-col-reverse hidden lg:flex w-1/3 -ml-24 gap-y-12'>
    <div className='flex flex-row'>
     <FooterCard
      icon={
       <Book
        viewBox='0 0 1146 864'
        className='w-64 h-64'
       />
      }
     />
     <FooterCard
      className='ml-64'
      icon={
       <Weight
        viewBox='0 0 733 733'
        className='w-64 h-64'
       />
      }
     />
    </div>
    <div className='flex flex-row'>
     <FooterCard
      className='ml-48'
      icon={
       <SecurityShield
        viewBox='0 0 644 702'
        className='w-64 h-64'
       />
      }
     />
     <FooterCard
      className='ml-56'
      icon={
       <Binary
        viewBox='0 0 765 765'
        className='w-64 h-64'
       />
      }
     />
    </div>
   </div>
  </footer>
 )
}

export default Footer
