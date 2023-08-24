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
  <div className='grid grid-cols-2 place-content-evenly gap-y-8 text-center text-slate-300 sm:grid-cols-3 md:gap-y-12 lg:grid-cols-4 xl:grid-cols-5'>
   <div className='flex flex-col items-center gap-y-4'>
    <NodeJS className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>NodeJS</p>
   </div>{' '}
   <div className='flex flex-col items-center gap-y-4'>
    <NextJS className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>NextJS</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <React className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>React</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <SASS className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>SASS</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <Firebase className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>Firebase</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <SqlLite className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>SQLite</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <MySQL className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>MySQL</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <Git className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>Git</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <Github className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>Github</p>
   </div>
  </div>
 )
}

export default TechnologiesSlider
