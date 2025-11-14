'use client'
import Input from '../Input'
import CTA from '../CTA'
import Send from '../../public/icons/Send.svg'
import Github from '../../public/icons/Github.svg'
import Email from '../../public/icons/Email.svg'
import StackOverflow from '../../public/icons/StackOverflow.svg'
import LinkedIn from '../../public/icons/LinkedIn.svg'
import IconWrapper from '../IconWrapper'
import { useMemo, useRef, useState } from 'react'
import debounce from 'lodash.debounce'
import { isValidForm } from '../../utils/validator'

/*
   Contact form with three inputs (email, name, message) and a button to send.
   There are also social links
*/
const ContactForm = () => {
 const helperTextRef =
  useRef<HTMLParagraphElement>(null)

 const formRef = useRef<HTMLFormElement>(null)
 const [isEnabled, setIsEnabled] =
  useState<boolean>(false)

 const debouncedChangeHandler = useMemo(
  () =>
   debounce(() => {
    if (!formRef.current) return

    setIsEnabled(isValidForm(formRef.current))
   }, 300),
  []
 )

 return (
  <form
   id='contact'
   ref={formRef}
   onChange={debouncedChangeHandler}
   className='flex w-full flex-col gap-y-12'
   onSubmit={async (e) => {
    // Prevent form to redirect / refresh the page
    e.preventDefault()

    // Send a POST request to the endpoint to send the email
    const res = await fetch('/api/sendEmail', {
     method: 'POST',
     // Pass the body in JSON format
     body: JSON.stringify({
      // Take values from input fields
      email:
       e.currentTarget.elements['email'].value,
      name:
       e.currentTarget.elements['name'].value,
      message:
       e.currentTarget.elements['message'].value,
     }),
    })

    // Check if response is successful
    if (res.ok) {
     // Reset the form (suppress error cause on target reset not exist)
     // @ts-ignore
     e.target.reset()
     // Check if ref is initialized
     if (helperTextRef.current) {
      // Set text and color of the helper text
      helperTextRef.current.classList.add(
       'text-green-700'
      )
      helperTextRef.current.innerText =
       'Email has been delivered! Thank you.'
     }
    }
    // Check if ref is initialized
    else if (helperTextRef.current) {
     // Set text (response text) and color of the helper text
     helperTextRef.current.classList.add(
      'text-red-600'
     )
     helperTextRef.current.innerText = (
      await res.json()
     ).error
    }
   }}>
   {/*  Input fields */}
   <div className='flex w-full flex-col gap-x-12 gap-y-12 xl:flex-row'>
    <Input
     label='Email'
     type='email'
     errorText='Provided email is invalid!'
     required
     name='email'
    />
    <Input
     label='Name'
     type='text'
     minLength={4}
     required
     errorText='Name invalid. Your name has to be as least 4 chars length'
     name='name'
    />
   </div>
   <Input
    label='Message'
    elementType='textarea'
    required
    rows={10}
    minLength={10}
    errorText='Message invalid. Your message has to be as least 10 chars length'
    name='message'
   />
   <div className='flex w-full flex-col gap-y-12 lg:flex-row lg:items-center lg:justify-between'>
    {/*  CTA to send the form with helper text */}
    <div className='flex flex-col'>
     <CTA
      disabled={!isEnabled}
      className='rounded-none'
      fill='blue'
      icon={
       <Send
        viewBox='0 0 9 9'
        className='h-4 w-4'
       />
      }
      text='Send'
     />
     <p
      ref={helperTextRef}
      className='xs-text mt-2'
     />
    </div>
    {/*  Icons with social links */}
    <div className='flex flex-row flex-wrap items-center gap-x-8 gap-y-4'>
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
     <IconWrapper
      link='https://www.linkedin.com/in/samuele-sciatore-19895b285/'
      icon={<LinkedIn viewBox='0 0 50 50' />}
     />
    </div>
   </div>
  </form>
 )
}

export default ContactForm
