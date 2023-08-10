import SkillCard from '../../../components/SkillCard'
import HTML from '../../../public/assets/skills/HTML.svg'
import CSS from '../../../public/assets/skills/CSS.svg'
import Javascript from '../../../public/assets/skills/Javascript.svg'
import Typescript from '../../../public/assets/skills/Typescript.svg'
import TailwindCSS from '../../../public/assets/skills/TailwindCSS.svg'
import SASS from '../../../public/assets/skills/SASS.svg'
import React from '../../../public/assets/skills/React.svg'
import NodeJS from '../../../public/assets/skills/NodeJS.svg'
import NextJS from '../../../public/assets/skills/NextJS.svg'
import Firebase from '../../../public/assets/skills/Firebase.svg'
import MySQL from '../../../public/assets/skills/MySQL.svg'
import Kotlin from '../../../public/assets/skills/Kotlin.svg'
import { useEffect } from 'react'
import gsap from 'gsap'

const SkillsScroller = () => {
 useEffect(() => {
  let panels: HTMLDivElement[] =
   gsap.utils.toArray('#skills-section')

  panels.forEach((panel, i) => {
   gsap.to(panel, {
    translateX: i % 2 == 0 ? 200 : -200,
    ease: 'back',
    duration: 0.4,
    scrollTrigger: {
     trigger: panel,
     start: 'top center',
     toggleActions: 'play none reverse none',
    },
   })
  })
 }, [])

 return (
  <div className='w-full'>
   <div
    id='skills-section'
    className='mb-48 flex w-full flex-row justify-between gap-x-4 md:-ml-12 md:mr-auto'>
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
    <SkillCard
     text='TailwindCSS'
     icon={<TailwindCSS viewBox='0 0 48 48' />}
    />
    <SkillCard
     text='SASS'
     icon={<SASS viewBox='0 0 48 36' />}
    />
   </div>
   <div
    id='skills-section'
    className='flex w-full flex-row justify-between gap-x-12 md:-ml-12 md:mr-auto'>
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
    <SkillCard
     text='Kotlin'
     icon={<Kotlin viewBox='0 0 48 48' />}
    />
   </div>
  </div>
 )
}

export default SkillsScroller
