import { FC } from 'react'
import CTA from '../../CTA'

const Contact: FC = ({}) => {
 return (
  <section className='mx-auto mt-48 flex max-w-screen-xl flex-col items-center gap-y-6 text-center'>
   <h1>
    Connect with me when you want, anywhere
   </h1>
   <div className='flex flex-wrap items-center gap-x-6 gap-y-6'>
    <CTA fill='blue' text='Contact me' />
    <CTA
     fill='blue'
     variant='secondary'
     text='See portfolio'
    />
   </div>
  </section>
 )
}

export default Contact
