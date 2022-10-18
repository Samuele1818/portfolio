import { FC } from 'react'
import IconWrapper from '../IconWrapper'
import Github from '../../public/icons/Github.svg'
import Email from '../../public/icons/Email.svg'
import StackOverflow from '../../public/icons/StackOverflow.svg'
import RightArrow from '../../public/icons/RightArrow.svg'
import ContactForm from '../ContactForm'

const Footer: FC = () => {
  return (
    <footer className="bg-electricViolet w-full py-24 mt-24 text-hintOfRed">
      <div className="w-full flex-align-lg">
        <div
          className="w-full hr-align-lg lg:w-2/3 bg-bastille flex px-8 md:px-16 flex-col py-24 lg:pl-40 xl:pl-52 2xl:pl-64 lg:pr-12 lg:rounded-r-xl">
          <ContactForm />
          <div className="relative flex flex-row gap-x-4 mt-12">
            <IconWrapper link="https://github.com/Samuele1818" icon={<Github viewBox="0 0 18 20"/>} theme="light"/>
            <IconWrapper link="mailto:samuelesciatore.19@gmail.com" icon={<Email viewBox="0 0 134 97"/>} theme="light"/>
            <IconWrapper link="https://stackoverflow.com/users/12119966/samuele1818"
                         icon={<StackOverflow viewBox="0 0 16 16"/>} theme="light"/>
          </div>
        </div>
        <div className="w-full hr-align-lg lg:w-1/3 px-8 md:px-16 lg:pr-40 xl:pr-52 2xl:pr-64 py-24 flex flex-col px-8 md:px-16">
            <div
              onClick={() => {
                window.scrollTo(0, 0)
              }} className="cursor-pointer flex flex-col items-center mb-0 mt-auto">
              <div className="w-fit py-2 px-4 h-fit rounded-full flex items-center justify-center bg-white gap-x-2">
                <p className='text-bastille'>Scroll top</p>
                <RightArrow viewBox="0 0 13 8" className="w-6 h-6 rotate-[270deg] text-electricViolet"/>
              </div>
            </div>
        </div>
      </div>
      <h1 className="center lg-text mt-24">Copyright © {new Date().getFullYear()} Samuele Sciatore</h1>
    </footer>
  )
}

export default Footer
