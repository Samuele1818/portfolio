import NInput from '../NInput/NInput'
import CTA from '../CTA'
import Send from '../../public/icons/Send.svg'
import Github from '../../public/icons/Github.svg'
import Email from '../../public/icons/Email.svg'
import StackOverflow from '../../public/icons/StackOverflow.svg'
import React from '../../public/assets/skills/React.svg'
import IconWrapper from '../IconWrapper'

/*
Contact form with three inputs (email, name, message) and a button to send.
There are also three buttons to link my email, GitHub and StackOverflow 
*/
const NContactForm = () => {
 return (
  <form
   className='flex flex-col w-full gap-y-12'
   onSubmit={(e) => {
    e.preventDefault()
    e.currentTarget.reset()
   }}
   action='/api/sendEmail'
   method='POST'>
   <div className='flex flex-col xl:flex-row gap-x-12 gap-y-12 w-full'>
    <NInput
     label='Email'
     inputType='email'
     errorText='Provided email is invalid!'
     name='email'
    />
    <NInput
     label='Name'
     inputType='text'
     minLength={4}
     errorText='Name invalid. Your name has to be as least 4 chars length'
     name='name'
    />
   </div>
   <NInput
    label='Message'
    elementType='textarea'
    minLength={10}
    errorText='Message invalid. Your message has to be as least 10 chars length'
    name='message'
   />
   <div className='flex flex-col gap-y-12 lg:flex-row w-full lg:justify-between lg:items-center'>
    {/*  TODO: If errors in form disable button */}
    <CTA
     className='rounded-none'
     icon={
      <Send
       viewBox='0 0 9 9'
       className='w-4 h-4'
      />
     }
     text='Send'
    />
    <div className='flex flex-row gap-x-8 items-center'>
     <IconWrapper
      link='https://github.com/Samuele1818'
      icon={<Github viewBox='0 0 18 20' />}
     />
     <IconWrapper
      link='mailto:samuelesciatore.19@gmail.com'
      icon={<Email viewBox='0 0 134 97' />}
     />
     <IconWrapper
      link='https://stackoverflow.com/users/12119966/samuele1818'
      icon={<StackOverflow viewBox='0 0 16 16' />}
     />
    </div>
   </div>
  </form>
 )
}

export default NContactForm
