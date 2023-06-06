'use client'
import { FC } from 'react'
import FooterCard from '../FooterCard'
import Book from '../../public/icons/Book.svg'
import SecurityShield from '../../public/icons/SecurityShield.svg'
import Weight from '../../public/icons/Weight.svg'
import Binary from '../../public/icons/Binary.svg'
import React from '../../public/assets/skills/React.svg'

const Footer: FC = () => {
 return (
  <footer className="flex flex-row bg-[url('/illustrations/Footer.svg')] bg-cover bg-bottom w-full h-full layout">
   <div className='z-10 flex flex-col bg-white h-[85%] w-2/3 mb-0 mt-auto rounded-t-xl py-12 px-24'>
    <h1>Contact me</h1>
    {/*<section className='relative flex flex-row gap-x-4 mt-12'>*/}
    {/*    <IconWrapper*/}
    {/*        link='https://github.com/Samuele1818'*/}
    {/*        icon={<Github viewBox='0 0 18 20' />}*/}
    {/*        theme='light'*/}
    {/*    />*/}
    {/*    <IconWrapper*/}
    {/*        link='mailto:samuelesciatore.19@gmail.com'*/}
    {/*        icon={<Email viewBox='0 0 134 97' />}*/}
    {/*        theme='light'*/}
    {/*    />*/}
    {/*    <IconWrapper*/}
    {/*        link='https://stackoverflow.com/users/12119966/samuele1818'*/}
    {/*        icon={*/}
    {/*            <StackOverflow viewBox='0 0 16 16' />*/}
    {/*        }*/}
    {/*        theme='light'*/}
    {/*    />*/}
    {/*</section>*/}
    <p className='lg-text mb-0 mt-auto'>
     Copyright © {new Date().getFullYear()}{' '}
     Samuele Sciatore
    </p>
   </div>
   <div className='flex flex-col-reverse h-full w-1/3 -ml-24 gap-y-12'>
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
