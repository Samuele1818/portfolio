import { NextPage } from 'next'
import RightArrow from '../public/icons/RightArrow.svg'
import IconWrapper from '../components/IconWrapper'
import Github from '../public/icons/Github.svg'
import Email from '../public/icons/Email.svg'
import Checkmark from '../public/icons/Checkmark.svg'
import ErrorCloud from '../public/icons/ErrorCloud.svg'
import StackOverflow from '../public/icons/StackOverflow.svg'
import Input from '../components/Input'
import useFormFieldStorage from '../hooks/useFormFieldStorage'
import CTA from '../components/CTA'
import { useRouter } from 'next/router'
import Send from '../public/icons/Send.svg'
import { getWithExpiry, isValidEmail, isValidMessage, isValidName, setWithExpiry } from '../utils/validator'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Head from 'next/head'

const ContactMe: NextPage = () => {
  const { push, query } = useRouter()
  const { prevUrl } = query
  
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
    <div className="opacity-animation bg-white w-full h-full layout pb-12">
      <Head>
        <title>Contact Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <section
        className="flex flex-row border-bastille border-opacity-30 border-b-[0.5px] mt-12 items-center justify-between p-4">
        <RightArrow onClick={() => push(prevUrl as string || '/')} className="rotate-180 w-6 h-6 text-electricViolet"
                    viewBox="0 0 13 8"/>
        <div className="flex flex-row gap-x-4">
          <IconWrapper link="https://github.com/Samuele1818" icon={<Github viewBox="0 0 18 20"/>} theme="dark"/>
          <IconWrapper link="mailto:samuelesciatore.19@gmail.com" icon={<Email viewBox="0 0 134 97"/>} theme="dark"/>
          <IconWrapper link="https://stackoverflow.com/users/12119966/samuele1818"
                       icon={<StackOverflow viewBox="0 0 16 16"/>} theme="dark"/>
        </div>
      </section>
      {
        formStatus.status === 'form' ? (
          <section className="w-full">
            <h1 className="xl-text mt-12">Send me a message, I will contact you on your email</h1>
            <h1 className="lg-text mt-4">I&apos;m happy to see that you are dedicating your time to me!</h1>
            <form className="w-full flex flex-col" onSubmit={e => {
              e.preventDefault()
              sendEmail()
            }}>
              <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-12">
                <Input ref={emailRef} required label="Your Email" containerClassName="mt-16" elementType="input"
                       inputType="email" onChange={email => setEmailInformation(isValidEmail(email))}
                       statusInformation={emailInformation}/>
                <Input ref={nameRef} required label="Name" containerClassName="mt-16" elementType="input"
                       inputType="text"
                       onChange={name => setNameInformation(isValidName(name))} statusInformation={nameInformation}/>
                <Input ref={messageRef} required label="Message" containerClassName="col-span-2 mt-16"
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
      }
    </div>
  )
}

export default ContactMe
