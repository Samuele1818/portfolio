import { NextPage } from 'next'
import RightArrow from '../public/static/icons/RightArrow.svg'
import IconWrapper from '../components/IconWrapper'
import Github from '../public/static/icons/Github.svg'
import Email from '../public/static/icons/Email.svg'
import Input from '../components/Input'
import useFormFieldStorage from '../hooks/useFormFieldStorage'
import CTA from '../components/CTA'
import { useRouter } from 'next/router'
import Send from '../public/static/icons/Send.svg'
import { isValidEmail, isValidMessage, isValidName } from '../utils/validator'
import { useEffect, useRef, useState } from 'react'

const ContactMe: NextPage = () => {
  const { push, query } = useRouter()
  const { prevUrl } = query
  
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
  
  const sendEmail = async () => {
    const res = await fetch(`/api/sendEmail?email=${}&name=${}&message=${}`)
    if(res.status == 500) {
    
    } else {
    
    }
  }
  
  return (
    <div className="opacity-animation bg-white w-full h-full layout pb-12">
      <section
        className="flex flex-row border-bastille border-opacity-30 border-b-[0.5px] mt-12 items-center justify-between p-4">
        <RightArrow onClick={() => push(prevUrl as string || '/')} className="rotate-180 w-6 h-6 text-electricViolet"
                    viewBox="0 0 13 8"/>
        <div className="flex flex-row gap-x-4">
          <IconWrapper link="https://github.com/Samuele1818" icon={<Github viewBox="0 0 18 20"/>} theme="dark"/>
          <IconWrapper link="mailto:samuelesciatore.19@gmail.com" icon={<Email viewBox="0 0 134 97"/>} theme="dark"/>
        </div>
      </section>
      <section className="w-full">
        <h1 className="xl-text center mt-12">Send me a message, I will contact you on your email</h1>
        <h1 className="lg-text center mt-8">I&apos;m happy to see that you are dedicating your time to me!</h1>
        <form className="w-full flex flex-col">
          <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-12">
            <Input ref={emailRef} required label="Email" containerClassName="mt-16" elementType="input" inputType="email" onChange={email => setEmailInformation(isValidEmail(email))} statusInformation={emailInformation}/>
            <Input ref={nameRef} required label="Name" containerClassName="mt-16" elementType="input" inputType="text" onChange={name => setNameInformation(isValidName(name))} statusInformation={nameInformation}/>
            <Input ref={messageRef} required label="Message" containerClassName="col-span-2 mt-16" elementType="textarea" onChange={message => setMessageInformation(isValidMessage(message))} statusInformation={messageInformation}/>
          </div>
          <CTA isDisabled={CTAInformation.isDisabled} isLoading={CTAInformation.isLoading} text="Send" icon={<Send className='w-3 h-3' viewBox='0 0 9 9' />} className="center mt-8"/>
        </form>
      </section>
    </div>
  )
}

export default ContactMe
