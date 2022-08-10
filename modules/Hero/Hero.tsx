import { FC } from 'react'
import CTA from '../../components/CTA'
import RightArrow from '../../public/static/icons/RightArrow.svg'
import DesktopIllustration from '../../public/static/illustrations/Desktop.svg'

const Hero: FC = () => {
  return (
    <section className="h-auto mt-24 layout flex flex-col lg:flex-row">
       <div className="flex-col flex lg:max-w-xs whitespace-pre-wrap text-center mx-auto lg:mx-0 lg:text-left">
          <h1 className="text-4xl font-bold">Full-stack & software developer</h1>
          <h2 className="text-2xl font-normal mt-4">Create things and solve problems with love</h2>
          <CTA icon={<RightArrow/>} className="mt-8 mx-auto lg:mx-0" text="Explore"/>
       </div>
       <DesktopIllustration
         className="mx-auto mt-16 lg:mt-0 lg:mr-0 lg:ml-auto w-full h-full md:w-[400px] md:h-[400px]"
         viewBox="0 0 2507 2472"/>
    </section>
  )
}

export default Hero
