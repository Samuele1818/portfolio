import { FC } from 'react'
import CTA from '../../components/CTA'
import RightArrow from '../../public/icons/RightArrow.svg'
import DesktopIllustration from '../../public/illustrations/Desktop.svg'
import { useRouter } from 'next/router'

const Hero: FC = () => {
  const { push } = useRouter()
  
  return (
    <section className="mt-24 layout flex flex-col lg:flex-row">
      <div className="flex-col flex lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[600px] hr-align-lg">
        <h1 className="xl-text">Transform your ideas in <a
          className='relative content after:absolute after:w-full after:-bottom-2 after:left-0 after:h-4 after:bg-cover after:bg-[url("/icons/CurlyAccent.svg")]'>solid</a> websites
          and applications</h1>
        <h2 className="lg-text mt-4">I&apos;m a full stack developer and software engineer</h2>
        <CTA onClick={() => push('', { hash: 'projects' })} icon={<RightArrow/>}
             className="mt-8 hr-align-lg font-bold"
             text="View projects"/>
      </div>
      <div
        className="relative isolate mx-auto mt-16 lg:mt-0 lg:-mr-[10%] w-full h-full md:max-w-[450px] md:h-fit">
        <div
          className="absolute top-[10%] left-[15%] w-[90%] h-[80%] -z-10 rounded-xl shadow-shadow bg-opacity-40 bg-[#50B56F]"/>
        <DesktopIllustration
          className="w-full h-full"
          viewBox="0 0 2507 2472">
        </DesktopIllustration>
      </div>
    </section>
  )
}

export default Hero
