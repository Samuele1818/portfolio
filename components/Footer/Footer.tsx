import { FC } from 'react'
import CTA from '../CTA'
import Clock from '../../public/static/icons/Clock.svg'
import IconWrapper from '../IconWrapper'
import Github from '../../public/static/icons/Github.svg'
import Email from '../../public/static/icons/Email.svg'

const Footer: FC = () => {
  return (
    <footer className="relative bg-electricViolet w-full py-24 mt-24 text-hintOfRed">
      <div className="w-full flex flex-col lg:flex-row gap-x-24">
        <div className="w-full text-center mx-auto lg:mx-0 lg:text-left lg:w-1/2 bg-bastille flex px-8 md:px-16 flex-col py-24 lg:pl-40 lg:pr-12 lg:rounded-r-xl">
          <h1 className="text-4xl font-bold">Want to collaborate?</h1>
          <h2 className="text-2xl mt-8 font-normal">If you want to start a collaboration contact me. I'm interested to
            know your ideas and open to cooperate to transform this ideas into reality</h2>
          <CTA text="Setup an appointment" className="mt-4 mx-auto lg:mx-0"
               icon={<Clock className="w-4 h-4" viewBox="0 0 1000 1000"/>}/>
        </div>
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:pr-40 py-24 h-auto flex flex-col px-8 md:px-16 lg:pl-0">
          <h1 className="text-3xl">
            "If your dreams don’t scare you, they are too small"
          </h1>
          <div className='flex flex-row gap-x-4 mt-16 mx-auto lg:mx-0 mb-0 lg:mt-auto'>
            <IconWrapper icon={<Github viewBox='0 0 18 20' />} theme='light' />
            <IconWrapper icon={<Email viewBox='0 0 134 97' />} theme='light' />
          </div>
        </div>
      </div>
      <h1 className="text-2xl text-center mt-12">Copyright © {new Date().getFullYear()} Samuele Sciatore</h1>
    </footer>
  )
}

export default Footer
