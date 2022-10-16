import { FC } from 'react'
import HTML from '../../public/assets/skills/HTML.svg'
import CSS from '../../public/assets/skills/CSS.svg'
import TailwindCSS from '../../public/assets/skills/TailwindCSS.svg'
import SASS from '../../public/assets/skills/SASS.svg'
import Javascript from '../../public/assets/skills/Javascript.svg'
import Typescript from '../../public/assets/skills/Typescript.svg'
import React from '../../public/assets/skills/React.svg'
import NodeJS from '../../public/assets/skills/NodeJS.svg'
import NextJS from '../../public/assets/skills/NextJS.svg'
import CPP from '../../public/assets/skills/C++.svg'
import Java from '../../public/assets/skills/Java.svg'
import Kotlin from '../../public/assets/skills/Kotlin.svg'
import Firebase from '../../public/assets/skills/Firebase.svg'
import MySQL from '../../public/assets/skills/MySQL.svg'
import SkillCard from '../../components/SkillCard'

const AboutMe: FC = () => {
  return (
    <section
      className="layout pt-48 pb-24 bg-bastille hr-align-md text-hintOfRed flex flex-col rounded-br-[20%_5%] rounded-bl-[20%_5%]">
      <div>
        <h1 className="xl-text">Call me Samuele1818</h1>
        <h2 className="lg-text mt-4">I&apos;m a full stack developer and software engineer that love </h2>
      </div>
      <section className="mt-12">
        <h1 className="sm-text opacity-75 text-hintOfRed">Languages</h1>
        <div className="mt-2 grid md:grid-cols-4 md:gap-x-14 gap-y-8">
          <SkillCard text="HTML" icon={<HTML viewBox="0 0 48 55"/>}/>
          <SkillCard text="CSS" icon={<CSS viewBox="0 0 48 55"/>}/>
          <SkillCard text="Javascript" icon={<Javascript viewBox="0 0 48 48"/>}/>
          <SkillCard text="Typescript" icon={<Typescript viewBox="0 0 48 48"/>}/>
          <SkillCard text="C++" icon={<CPP viewBox="0 0 48 55"/>}/>
          <SkillCard text="Java" icon={<Java viewBox="0 0 48 66"/>}/>
          <SkillCard text="Kotlin" icon={<Kotlin viewBox="0 0 48 48"/>}/>
        </div>
      </section>
      <section className="mt-12">
        <h1 className="sm-text opacity-75 text-hintOfRed">Technologies</h1>
        <div className="mt-2 grid md:grid-cols-4 md:gap-x-14 gap-y-8">
          <SkillCard text="TailwindCSS" icon={<TailwindCSS viewBox="0 0 48 48"/>}/>
          <SkillCard text="SASS" icon={<SASS viewBox="0 0 48 36"/>}/>
          <SkillCard text="React" icon={<React viewBox="0 0 48 43"/>}/>
          <SkillCard text="NodeJS" icon={<NodeJS viewBox="0 0 48 55"/>}/>
          <SkillCard text="NextJS" icon={<NextJS viewBox="0 0 48 48"/>}/>
          <SkillCard text="Firebase" icon={<Firebase viewBox="0 0 48 66"/>}/>
          <SkillCard text="MySQL" icon={<MySQL viewBox="0 0 48 48"/>}/>
        </div>
      </section>
      <section className="mt-12">
        <h1 className="sm-text opacity-75 text-hintOfRed">Tools</h1>
        <div className="mt-2 grid md:grid-cols-4 md:gap-x-14 gap-y-8">
          <SkillCard text="TailwindCSS" icon={<TailwindCSS viewBox="0 0 48 48"/>}/>
          <SkillCard text="SASS" icon={<SASS viewBox="0 0 48 36"/>}/>
          <SkillCard text="React" icon={<React viewBox="0 0 48 43"/>}/>
          <SkillCard text="NodeJS" icon={<NodeJS viewBox="0 0 48 55"/>}/>
          <SkillCard text="NextJS" icon={<NextJS viewBox="0 0 48 48"/>}/>
          <SkillCard text="Firebase" icon={<Firebase viewBox="0 0 48 66"/>}/>
          <SkillCard text="MySQL" icon={<MySQL viewBox="0 0 48 48"/>}/>
        </div>
      </section>
    </section>
  )
}

export default AboutMe
