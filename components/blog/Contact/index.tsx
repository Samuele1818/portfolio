import { FC } from 'react'
import CTA from '../../CTA'

const Contact: FC = ({}) => {
 return (
  <section className='mx-auto mt-48 flex max-w-screen-xl flex-col items-center gap-y-6 text-center'>
   <h1>
    Connect with me when you want, anywhere
   </h1>
   <div className='flex flex-wrap items-center gap-x-6 gap-y-6'>
    <CTA
     fill='lochmara'
     className='!md-text !bg-blue-600 !text-white'
     text='Contact me'
    />
    <CTA
     fill='lochmara'
     className='!md-text !bg-transparent !text-lightDark'
     text='See portfolio'
    />
   </div>
  </section>
 )
}

export default Contact
