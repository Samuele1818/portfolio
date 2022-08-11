import { FC } from 'react'
import CTA from '../../components/CTA'
import RightArrow from '../../public/static/icons/RightArrow.svg'
import DesktopIllustration from '../../public/static/illustrations/Desktop.svg'
import { useRouter } from 'next/router'

const Hero: FC = () => {
  const { push } = useRouter()
  
  return (
    <section className="h-auto mt-24 layout flex flex-col lg:flex-row">
      <div className="flex-col flex lg:max-w-xs hr-align">
        <h1 className="xl-text">Full-stack & software developer</h1>
        <h2 className="lg-text mt-8">Create things and solve problems with love</h2>
        <CTA onClick={() => push('', { hash: 'projects'})} icon={<RightArrow/>} className="mt-8 hr-align" text="Explore" />
      </div>
      <DesktopIllustration
        className="mx-auto mt-16 lg:mt-0 lg:mr-0 lg:ml-auto w-full h-full md:w-[400px] md:h-[400px]"
        viewBox="0 0 2507 2472"/>
    </section>
  )
}

export default Hero
