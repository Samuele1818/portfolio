import { FC } from 'react'
import React from '../../../public/icons/technologies/React.svg'
import MySQL from '../../../public/icons/technologies/MySQL.svg'
import Firebase from '../../../public/icons/technologies/Firebase.svg'
import SASS from '../../../public/icons/technologies/SASS.svg'
import SqlLite from '../../../public/icons/technologies/SqlLite.svg'
import Git from '../../../public/icons/technologies/Git.svg'
import Github from '../../../public/icons/technologies/Github.svg'
import NextJS from '../../../public/icons/technologies/NextJS.svg'
import NodeJS from '../../../public/icons/technologies/NodeJS.svg'

const TechnologiesSlider: FC = ({}) => {
 return (
  <div className='flex flex-row flex-wrap gap-x-16 gap-y-8 px-12 py-8 text-slate-300'>
   <div className='flex flex-col items-center gap-y-4'>
    <NodeJS className='h-12 w-12 lg:h-24 lg:w-24' />
    <p>NodeJS</p>
   </div>{' '}
   <div className='flex flex-col items-center gap-y-4'>
    <NextJS className='h-12 w-12 lg:h-24 lg:w-24' />
    <p>NextJS</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <React className='h-12 w-12 lg:h-24 lg:w-24' />
    <p>React</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <SASS className='h-12 w-12 lg:h-24 lg:w-24' />
    <p>SASS</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <Firebase className='h-12 w-12 lg:h-24 lg:w-24' />
    <p>Firebase</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <SqlLite className='h-12 w-12 lg:h-24 lg:w-24' />
    <p>SQLite</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <MySQL className='h-12 w-12 lg:h-24 lg:w-24' />
    <p>MySQL</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <Git className='h-12 w-12 lg:h-24 lg:w-24' />
    <p>Git</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <Github className='h-12 w-12 lg:h-24 lg:w-24' />
    <p>Github</p>
   </div>
  </div>
 )
}

export default TechnologiesSlider
