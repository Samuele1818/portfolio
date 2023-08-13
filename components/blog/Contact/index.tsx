import { FC } from 'react'
import CTALink from '../../CTALink'

const Contact: FC = ({}) => {
 return (
  <section className='mx-auto mt-48 flex max-w-screen-xl flex-col items-center gap-y-6 text-center'>
   <h1>
    Connect with me when you want, anywhere
   </h1>
   <div className='flex flex-wrap items-center gap-x-6 gap-y-6'>
    <CTALink
     hasIcon={false}
     link='/#contact-me'
     fill='blue'
     text='Contact me'
    />
    <CTALink
     hasIcon={false}
     link='/'
     fill='blue'
     variant='secondary'
     text='See portfolio'
    />
   </div>
  </section>
 )
}

export default Contact
