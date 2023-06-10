'use client'
import {FC, useEffect, useRef} from 'react'
import React from '../../public/assets/skills/React.svg'
import CyberSec from '../../public/assets/skills/new/Cybersecurity.svg'
import NewSkillCard from '../../components/NewSkillCard'
import gsap from 'gsap'
import Map from '../../public/illustrations/map.svg'
import HTML from '../../public/assets/skills/HTML.svg'
import CSS from '../../public/assets/skills/CSS.svg'
import Javascript from '../../public/assets/skills/Javascript.svg'
import Typescript from '../../public/assets/skills/Typescript.svg'
import TailwindCSS from '../../public/assets/skills/TailwindCSS.svg'
import SASS from '../../public/assets/skills/SASS.svg'
import NextJS from '../../public/assets/skills/NextJS.svg'
import Firebase from '../../public/assets/skills/Firebase.svg'
import MySQL from '../../public/assets/skills/MySQL.svg'
import NodeJS from '../../public/assets/skills/NodeJS.svg'
import SkillCard from '../../components/SkillCard'
import Process from '../../components/Process'

/*
  About me section with description of my self, skills and process that I use to build products
*/
const AboutMe: FC = () => {
 const containerRef = useRef(null)

 // @ts-ignore
 useEffect(() => {
  // If container is not initialized return
  // Put panels in an array
  const panels = gsap.utils.toArray('#new-skill')
  gsap.set(panels, {
   xPercent: -100 * (panels.length - 1),
  })
  if (!containerRef.current) return
  // @ts-ignore
  let ctx = gsap.to(panels, {
   xPercent: 0,
   ease: 'none',
   scrollTrigger: {
    // Set the trigger to the container of panels
    trigger: containerRef.current,
    pin: true, // Make scrolling stop vertically
    start: 'top top',
    scrub: 1,
    snap: {
     // Auto snap if scroll is partial
     snapTo: 1 / (panels.length - 1),
     inertia: false,
     duration: { min: 0.1, max: 0.1 },
    },
    // Set the end of the container
    end: () =>
     '+=' +
     // @ts-ignore
     (containerRef.current.offsetWidth -
      innerWidth),
   },
  })
  return () => ctx.revert()
 }, [])

 return (
  <>
   <section className='layout pt-36 bg-bastille overflow-clip text-hintOfRed flex flex-col'>
    <div className='flex-align-lg items-center'>
     <div className='lg:w-1/3'>
      <h1>Call me Sam1818</h1>
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
     <div className='lg:w-2/3 h-fit overflow-clip flex mt-12 lg:mt-0'>
      <Map
       viewBox='0 0 1440 560'
       className='scale-[1.60] w-full h-full ml-auto mt-12 lg:-mr-[20%] lg:-mt-[5%] mb-auto'
      />
     </div>
    </div>
    <div className='flex flex-col md:flex-row'>
    </div>
    <section className='md:mx-0 mt-12'>
     <h2 className='sm-text opacity-75 text-hintOfRed'>
      Languages
     </h2>
     <div className='mt-2 grid gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-14'>
      <SkillCard
       text='HTML'
       icon={<HTML viewBox='0 0 48 55' />}
      />
      <SkillCard
       text='CSS'
       icon={<CSS viewBox='0 0 48 55' />}
      />
      <SkillCard
       text='Javascript'
       icon={<Javascript viewBox='0 0 48 48' />}
      />
      <SkillCard
       text='Typescript'
       icon={<Typescript viewBox='0 0 48 48' />}
      />
      {/*<SkillCard*/}
      {/* text='C++'*/}
      {/* icon={<CPP viewBox='0 0 48 55' />}*/}
      {/*/>*/}
      {/*<SkillCard*/}
      {/* text='Java'*/}
      {/* icon={<Java viewBox='0 0 48 66' />}*/}
      {/*/>*/}
      {/*<SkillCard*/}
      {/* text='Kotlin'*/}
      {/* icon={<Kotlin viewBox='0 0 48 48' />}*/}
      {/*/>*/}
     </div>
    </section>
    <section className='mx-auto md:mx-0 mt-12'>
     <h2 className='sm-text opacity-75 text-hintOfRed'>
      Technologies
     </h2>
     <div className='mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-8'>
      <SkillCard
       text='TailwindCSS'
       icon={<TailwindCSS viewBox='0 0 48 48' />}
      />
      <SkillCard
       text='SASS'
       icon={<SASS viewBox='0 0 48 36' />}
      />
      <SkillCard
       text='React'
       icon={<React viewBox='0 0 48 43' />}
      />
      <SkillCard
       text='NodeJS'
       icon={<NodeJS viewBox='0 0 48 55' />}
      />
      <SkillCard
       text='NextJS'
       icon={<NextJS viewBox='0 0 48 48' />}
      />
      <SkillCard
       text='Firebase'
       icon={<Firebase viewBox='0 0 48 66' />}
      />
      <SkillCard
       text='MySQL'
       icon={<MySQL viewBox='0 0 48 48' />}
      />
     </div>
    </section>
    {/*<h2 className="sm-text opacity-75 text-hintOfRed">Next goals</h2>*/}
   </section>
   <section
    className='pb-24 bg-bastille fill-hintOfRed flex flex-nowrap items-center h-screen w-max overflow-hidden'
    ref={containerRef}>
    <NewSkillCard
     id='new-skill'
     illustration={
      <CyberSec
       viewBox='0 0 1205 853'
       className='w-full h-fit'
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
       className='w-full h-fit'
      />
     }
     title='Cyber security'
     description="I'm studying cyber security. I want to attend the eJPT certification from eLearnSecurity and in future the OSCP certification from offensive security."
    />
   </section>
   <section
    id='process-section'
    className='layout mt-24'>
    <h1 className='mb-12'>Trust the process</h1>
    <Process />
   </section>
  </>
 )
}

export default AboutMe
