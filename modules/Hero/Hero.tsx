'use client'
import { FC, useEffect } from 'react'
import CTA from '../../components/CTA'
import RightArrow from '../../public/icons/RightArrow.svg'
import DesktopIllustration from '../../public/illustrations/desktop.svg'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero: FC = () => {
 const { push } = useRouter()

 useEffect(() => {
  const darkWindow = document.getElementById(
   'dark-window'
  )
  const purpleWindow = document.getElementById(
   'purple-window'
  )

  window.addEventListener('mousemove', (e) => {
   const { clientX, clientY } = e
   const x =
    Math.round(
     (clientX / window.innerWidth) * 100
    ) / 5
   const y =
    Math.round(
     (clientY / window.innerHeight) * 100
    ) / 5

   gsap.to(darkWindow, {
    translateX: `${x * 2}%`,
    translateY: `${y * 2}%`,
   })
   gsap.to(purpleWindow, {
    translateX: `${x / 2}%`,
    translateY: `${y}%`,
   })
  })
 }, [])

 return (
  <section className='mt-24 layout flex flex-col lg:flex-row lg:items-center lg:h-[600px] xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px]'>
   <div className='flex-col flex lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[600px] hr-align-lg'>
    <h1>
     Transform your ideas in{' '}
     <a className='relative content after:absolute after:w-full after:-bottom-2 after:left-0 after:h-4 after:bg-cover after:bg-[url("/icons/CurlyAccent.svg")]'>
      solid
     </a>{' '}
     websites and applications
    </h1>
    <h2 className='mt-4'>
     I&apos;m a full stack developer and software
     engineer
    </h2>
    {/*TODO: Fix push to anchor*/}
    <CTA
     onClick={() => push('#projects')}
     icon={<RightArrow />}
     className='mt-8 hr-align-lg font-bold'
     text='View projects'
    />
   </div>
   <div className='relative isolate mx-auto mt-16 lg:mt-auto lg:-mr-[10%] mb-0 w-full h-full md:max-w-[450px] md:h-fit xl:max-w-xl 2xl:max-w-2xl'>
    <div className='absolute top-[10%] left-[15%] w-[90%] h-[80%] -z-10 rounded-xl shadow-shadow bg-opacity-40 bg-[#50B56F]' />
    <DesktopIllustration
     className='w-full h-full'
     viewBox='0 0 2507 2472'></DesktopIllustration>
   </div>
  </section>
 )
}

export default Hero
