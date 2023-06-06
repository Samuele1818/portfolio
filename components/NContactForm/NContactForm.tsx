import NInput from '../NInput/NInput'
import CTA from '../CTA'
import Send from '../../public/icons/Send.svg'
import Github from '../../public/icons/Github.svg'
import Email from '../../public/icons/Email.svg'
import StackOverflow from '../../public/icons/StackOverflow.svg'
import React from '../../public/assets/skills/React.svg'
import IconWrapper from '../IconWrapper'

const NContactForm = () => {
 return (
  <form className='flex flex-col w-full h-screen gap-y-12'>
   <div className='flex flex-row gap-x-12 w-full'>
    <NInput label='Email' />
    <NInput label='Name' />
   </div>
   <NInput label='Message' />
   <div className='flex flex-row w-full justify-between items-center'>
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
      theme='dark'
     />
     <IconWrapper
      link='mailto:samuelesciatore.19@gmail.com'
      icon={<Email viewBox='0 0 134 97' />}
      theme='dark'
     />
     <IconWrapper
      link='https://stackoverflow.com/users/12119966/samuele1818'
      icon={<StackOverflow viewBox='0 0 16 16' />}
      theme='dark'
     />
    </div>
   </div>
  </form>
 )
}

export default NContactForm
