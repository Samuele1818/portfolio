import { FC } from 'react'
import Communication from '../../../public/icons/misc/Communication.svg'
import ProblemSolving from '../../../public/icons/misc/ProblemSolving.svg'
import Document from '../../../public/icons/misc/Document.svg'
import Teamwork from '../../../public/icons/misc/Teamwork.svg'

const Misc: FC = ({}) => {
 return (
  <div className='grid grid-cols-2 place-content-evenly gap-y-8 text-center text-slate-300 sm:grid-cols-3 md:gap-y-12 lg:grid-cols-4 xl:grid-cols-5'>
   <div className='flex flex-col items-center gap-y-4'>
    <Document className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>Document</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <Communication className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>Communication</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <ProblemSolving className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>Problem Solving</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <Teamwork className='h-12 w-12 lg:h-16 lg:w-16' />
    <p>Teamwork</p>
   </div>
  </div>
 )
}

export default Misc
