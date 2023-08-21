import { FC } from 'react'
import Kotlin from '../../../public/icons/languages/Kotlin.svg'
import CSS from '../../../public/icons/languages/CSS.svg'
import Typescript from '../../../public/icons/languages/Typescript.svg'
import Javascript from '../../../public/icons/languages/Javascript.svg'
import HTML from '../../../public/icons/languages/HTML.svg'

const Languages: FC = ({}) => {
 return (
  <div className='grid grid-cols-2 place-content-evenly gap-y-8 text-center text-slate-300 sm:grid-cols-3 md:gap-y-12 lg:grid-cols-4 xl:grid-cols-5'>
   <div className='flex flex-col items-center gap-y-4'>
    <Javascript className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>Javascript</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <Typescript className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>Typescript</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <HTML className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>HTML</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <CSS className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>CSS</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <Kotlin className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>Kotlin</p>
   </div>
  </div>
 )
}

export default Languages
