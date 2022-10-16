import { FC } from 'react'
import CTA from '../CTA'
import Clock from '../../public/icons/Clock.svg'
import IconWrapper from '../IconWrapper'
import Github from '../../public/icons/Github.svg'
import Email from '../../public/icons/Email.svg'
import { useRouter } from 'next/router'
import StackOverflow from '../../public/icons/StackOverflow.svg'
import QuotesWatermark from '../QuotesWatermark'
import RightArrow from '../../public/icons/RightArrow.svg'

const Footer: FC = () => {
  const { push, route } = useRouter()
  
  return (
    <footer className="bg-electricViolet w-full py-24 mt-24 text-hintOfRed">
      <div className="w-full flex-align-lg gap-x-24">
        <div
          className="w-full hr-align-lg lg:w-1/2 bg-bastille flex px-8 md:px-16 flex-col py-24 lg:pl-40 lg:pr-12 lg:rounded-r-xl">
          <h1 className="xl-text">Want to collaborate?</h1>
          <h2 className="lg-text mt-4">If you want to start a collaboration contact me. I&apos;m interested to
            know your ideas and open to cooperate to transform this ideas into reality</h2>
          <CTA onClick={() => push('/contact-me', { query: { prevUrl: route } })}
               text="Setup an appointment" className="mt-4 mx-auto lg:mx-0"
               icon={<Clock className="w-4 h-4" viewBox="0 0 1000 1000"/>}/>
        </div>
        <div className="w-full hr-align-lg lg:w-1/2 lg:pr-40 py-24 flex flex-col px-8 md:px-16 lg:pl-0">
          <h1 className="xl-text relative">
            <QuotesWatermark className="-top-10 -left-4"/>
            If your dreams don’t scare you, they are too small
            <QuotesWatermark className="-bottom-10 right-0 rotate-180"/>
          </h1>
          <div className="relative flex flex-row gap-x-4 mt-16 mx-auto lg:mx-0 mb-0 lg:mt-auto">
            <IconWrapper link="https://github.com/Samuele1818" icon={<Github viewBox="0 0 18 20"/>} theme="light"/>
            <IconWrapper link="mailto:samuelesciatore.19@gmail.com" icon={<Email viewBox="0 0 134 97"/>} theme="light"/>
            <IconWrapper link="https://stackoverflow.com/users/12119966/samuele1818"
                         icon={<StackOverflow viewBox="0 0 16 16"/>} theme="light"/>
            <div
              data-aos="zoom-in"
              onClick={() => {
                window.scrollTo(0, 0)
              }} className="cursor-pointer absolute flex flex-col items-center gap-y-2 bottom-0 right-0">
              <div className="w-fit p-2 h-fit rounded-full flex items-center justify-center bg-white">
                <RightArrow viewBox="0 0 13 8" className="w-6 h-6 rotate-[270deg] text-electricViolet"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="center lg-text mt-24">Copyright © {new Date().getFullYear()} Samuele Sciatore</h1>
    </footer>
  )
}

export default Footer
