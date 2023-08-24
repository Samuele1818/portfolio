import { FC } from 'react'
import RightArrow from '../../public/icons/RightArrow.svg'
import DesktopIllustration from '../../public/illustrations/desktop.svg'
import CTALink from '../../components/CTALink'
import './hero.css'

// gsap.registerPlugin(ScrollTrigger)

/*
  Hero section to grab client attention, introduce my self and make the client click the CTA to view my works
*/
const Hero: FC = () => {
 // useEffect(() => {
 //  const darkWindow = document.getElementById(
 //   'dark-window'
 //  )
 //  const purpleWindow = document.getElementById(
 //   'purple-window'
 //  )
 //
 //  window.addEventListener('mousemove', (e) => {
 //   const { clientX, clientY } = e
 //   const x =
 //    Math.round(
 //     (clientX / window.innerWidth) * 100
 //    ) / 5
 //   const y =
 //    Math.round(
 //     (clientY / window.innerHeight) * 100
 //    ) / 5
 //
 //   gsap.to(darkWindow, {
 //    translateX: `${x * 2}%`,
 //    translateY: `${y * 2}%`,
 //   })
 //   gsap.to(purpleWindow, {
 //    translateX: `${x / 2}%`,
 //    translateY: `${y}%`,
 //   })
 //  })
 // }, [])

 return (
  <section className='layout mt-24 flex flex-col items-center gap-x-48 gap-y-16 lg:h-[600px] lg:flex-row xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px]'>
   <div className='flex flex-grow flex-col text-center lg:w-1/2 lg:text-start'>
    <h1 className='animate-title hero-title !text-dark'>
     Transform your ideas in{' '}
     <span className='content relative after:absolute after:-bottom-2 after:left-0 after:h-6 after:w-full after:bg-[url("/icons/CurlyAccent.svg")] after:bg-cover'>
      solid
     </span>{' '}
     websites and applications
    </h1>
    <h2 className='animate-subtitle hero-sub mt-4'>
     I&apos;m a full stack developer and software
     engineer
    </h2>
    <CTALink
     href='#projects'
     icon={<RightArrow />}
     className='hr-align-lg mt-8 font-bold'
     text='View projects'
    />
   </div>

   <div className='animate-desktop relative isolate mx-auto mb-0 mt-auto h-fit w-full lg:-mr-[10%] lg:w-1/2 lg:flex-shrink'>
    <div className='shadow-shadow absolute left-[15%] top-[10%] -z-10 h-[80%] w-[90%] rounded-xl bg-[#50B56F] bg-opacity-40' />
    <DesktopIllustration
     className='h-full w-full'
     viewBox='0 0 2507 2472'
    />
   </div>
  </section>
 )
}

export default Hero
