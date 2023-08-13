'use client'
import { FC, useRef } from 'react'
import Image from 'next/image'
import React from '../../public/assets/skills/React.svg'
import CyberSec from '../../public/assets/skills/new/Cybersecurity.svg'
import NewSkillCard from '../../components/NewSkillCard'
// import gsap from 'gsap'
import Process from '../../components/Process'
import SkillsScroller from './SkillsScroller'
import Avatar from '../../public//illustrations/ReadyPlayerMe-Avatar-removebg-preview-transformed 1.png'

/*
  About me section with description of my self, skills and process that I use to build products
*/
const AboutMe: FC = () => {
 const containerRef = useRef(null)

 // // @ts-ignore
 // useEffect(() => {
 //  // If container is not initialized return
 //  // Put panels in an array
 //  const panels = gsap.utils.toArray('#new-skill')
 //  gsap.set(panels, {
 //   xPercent: -100 * (panels.length - 1),
 //  })
 //  if (!containerRef.current) return
 //  // @ts-ignore
 //  let ctx = gsap.to(panels, {
 //   xPercent: 0,
 //   ease: 'none',
 //   scrollTrigger: {
 //    // Set the trigger to the container of panels
 //    trigger: containerRef.current,
 //    pin: true, // Make scrolling stop vertically
 //    start: 'top top',
 //    scrub: 1,
 //    snap: {
 //     // Auto snap if scroll is partial
 //     snapTo: 1 / (panels.length - 1),
 //     inertia: false,
 //     duration: { min: 0.1, max: 0.1 },
 //    },
 //    // Set the end of the container
 //    end: () =>
 //     '+=' +
 //     // @ts-ignore
 //     (containerRef.current.offsetWidth -
 //      innerWidth),
 //   },
 //  })
 //  return () => ctx.revert()
 // }, [])

 return (
  <>
   <section className='layout bg-bastille flex flex-col overflow-clip pt-24 text-light'>
    {/* Description and image container */}
    <div className='flex-align-lg relative items-center'>
     <div className='mb-24 lg:mb-0 lg:w-1/3'>
      <h1>
       Call me{' '}
       <span className='text-[#E4049A]'>
        Sam1818
       </span>
      </h1>
      <p className='mt-4'>
       I&apos;m a full stack developer and
       software engineer that love transform good
       ideas into reality.
      </p>
      <p className='mt-4'>
       I&apos;m based in Rome (I was born in the
       colosseum).
      </p>
      <p className='mt-4'>
       When I&apos;m not learning I love read
       books and lift (heavy) weights.
      </p>
     </div>
     <div className='ml-auto mr-0 h-[700px] w-full rounded-xl bg-[#E4049A] lg:w-1/3'>
      <Image
       className='-mt-[50px] mb-auto h-[750px] w-[50%]'
       src={Avatar}
       alt='avator of me'
       priority
       quality={100}
      />
     </div>
    </div>
   </section>
   {/* Skills Scroller container (outside to avoid padding from layout class)*/}
   <section className='bg-bastille w-full pt-48 lg:pt-96'>
    <SkillsScroller />
   </section>
   {/* Next Goals (padding is applied to title not to containers )*/}
   <div className='bg-bastille relative h-fit w-full pb-24 pt-48 text-light lg:pt-96'>
    <div className='layout'>
     <h1>Next Goals</h1>
     <p className='absolute left-6 top-[22rem] scale-150 text-9xl opacity-[2%]'>
      Next Goals Next Goals Next Goals
     </p>
    </div>
    <section
     className='flex h-screen w-max flex-nowrap items-center overflow-hidden py-24'
     ref={containerRef}>
     <NewSkillCard
      id='new-skill'
      illustration={
       <CyberSec
        viewBox='0 0 1205 853'
        className='h-fit w-full'
       />
      }
      title='Cyber security'
      description="I'm studying cyber security. I want to attend the eJPT certification from eLearnSecurity and in future the OSCP certification from offensive security."
     />
     <NewSkillCard
      id='new-skill'
      illustration={
       <CyberSec
        viewBox='0 0 1205 853'
        className='h-fit w-full'
       />
      }
      title='Cyber security'
      description="I'm studying cyber security. I want to attend the eJPT certification from eLearnSecurity and in future the OSCP certification from offensive security."
     />
    </section>
   </div>
   {/* Process container with padding applied to all, h-screen to make animation more visible and smooth */}
   <section
    id='process-section'
    className='layout mt-24 flex flex-col justify-center lg:h-screen'>
    <div>
     <h1 className='mb-48'>Trust the process</h1>
     <Process />
    </div>
   </section>
  </>
 )
}

export default AboutMe
