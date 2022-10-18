import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Input from '../Input'
import { getWithExpiry, isValidEmail, isValidMessage, isValidName, setWithExpiry } from '../../utils/validator'
import CTA from '../CTA'
import Send from '../../public/icons/Send.svg'
import ErrorCloud from '../../public/icons/ErrorCloud.svg'
import Checkmark from '../../public/icons/Checkmark.svg'
import useFormFieldStorage from '../../hooks/useFormFieldStorage'

type Props = {}

const ContactForm: FC<Props> = () => {
   const [formStatus, setFormStatus] = useState<{ status: 'form' | 'error' | 'already', information: string | undefined }>({
      status: 'form',
      information: undefined
   })
   
   const [emailInformation, setEmailInformation] = useFormFieldStorage()
   const [nameInformation, setNameInformation] = useFormFieldStorage()
   const [messageInformation, setMessageInformation] = useFormFieldStorage()
   
   const emailRef = useRef<HTMLInputElement>(null)
   const nameRef = useRef<HTMLInputElement>(null)
   const messageRef = useRef<HTMLInputElement>(null)
   
   const [CTAInformation, setCTAInformation] = useState<{ isDisabled: boolean, isLoading: boolean }>({
      isDisabled: true,
      isLoading: false
   })
   
   useEffect(() => {
      setCTAInformation(prev => ({
         ...prev,
         isDisabled: emailInformation.error || nameInformation.error || messageInformation.error
      }))
   }, [emailInformation, nameInformation, messageInformation])
   
   useLayoutEffect(() => {
      const item = getWithExpiry('SENT_EMAIL')
      if (item !== null) setFormStatus({
         status: 'already',
         information: 'You have already contacted me, if I haven\'t already respond, be patient, I will respond ASAP'
      })
   }, [])
   
   const sendEmail = async () => {
      setCTAInformation(prev => ({ ...prev, isLoading: true }))
      if (emailRef.current && nameRef.current && messageRef.current) {
         const res = await fetch(`/api/sendEmail?email=${emailRef.current.value}&name=${nameRef.current.value}&message=${messageRef.current.value}`)
         if (res.status == 200) {
            setWithExpiry('SENT_EMAIL', '', 172800000)
            setFormStatus({ status: 'already', information: 'Your message was sent successful' })
         } else {
            setFormStatus({
               status: 'error',
               information: `${res.statusText}, suggest to contact me in another way or retry a bit later`
            })
         }
      } else {
         setFormStatus({ status: 'error', information: 'Refresh the page and retry or contact me in another way' })
      }
      setCTAInformation(prev => ({ ...prev, isLoading: false }))
   }
   
  return (
    formStatus.status === 'form' ? (
      <section className="w-full">
         <form className="w-full flex flex-col text-bastille" onSubmit={e => {
            e.preventDefault()
            sendEmail()
         }}>
           <h3 className='xl-text font-bold text-hintOfRed'>Contact me</h3>
           <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-12">
               <Input ref={emailRef} required label="Your Email" labelClassname='!text-hintOfRed' containerClassName="mt-16" elementType="input"
                      inputType="email" onChange={email => setEmailInformation(isValidEmail(email))}
                      statusInformation={emailInformation}/>
               <Input ref={nameRef} required label="Name" labelClassname='!text-hintOfRed' containerClassName="mt-16" elementType="input"
                      inputType="text"
                      onChange={name => setNameInformation(isValidName(name))} statusInformation={nameInformation}/>
               <Input ref={messageRef} required label="Message" labelClassname='!text-hintOfRed' containerClassName="col-span-2 mt-12"
                      elementType="textarea" onChange={message => setMessageInformation(isValidMessage(message))}
                      statusInformation={messageInformation}/>
            </div>
            <CTA isDisabled={CTAInformation.isDisabled} isLoading={CTAInformation.isLoading} text="Send"
                 icon={<Send className="w-3 h-3" viewBox="0 0 9 9"/>} className="mt-8"/>
         </form>
      </section>
    ) : formStatus.status === 'error' ?
      (
        <section className="w-full">
           <h1 className="xl-text center mt-12">An error happened</h1>
           <h1 className="lg-text center mt-8">{formStatus.information}</h1>
           <ErrorCloud viewBox="0 0 100 100" className="center w-1/4 h-fit mt-16 fill-red-500"/>
        </section>
      )
      : (
        <section className="w-full">
           <h1 className="xl-text center mt-12">Grateful things!</h1>
           <h1 className="lg-text center mt-8">{formStatus.information}</h1>
           <Checkmark viewBox="0 0 50 50" className="center w-1/4 h-fit mt-16 fill-green-500"/>
        </section>
      )
  )
}

export default ContactForm
