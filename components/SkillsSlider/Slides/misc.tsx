import { FC } from 'react'
import Communication from '../../../public/icons/misc/Communication.svg'
import ProblemSolving from '../../../public/icons/misc/ProblemSolving.svg'
import Document from '../../../public/icons/misc/Document.svg'
import Teamwork from '../../../public/icons/misc/Teamwork.svg'

const Misc: FC = ({}) => {
 return (
  <div className='flex flex-row flex-wrap gap-x-16 gap-y-8 px-12 py-8 text-slate-300'>
   <div className='flex flex-col items-center gap-y-4'>
    <Document className='h-12 w-12 lg:h-24 lg:w-24' />
    <p>Document</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <Communication className='h-12 w-12 lg:h-24 lg:w-24' />
    <p>Communication</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <ProblemSolving className='h-12 w-12 lg:h-24 lg:w-24' />
    <p>ProblemSolving</p>
   </div>
   <div className='flex flex-col items-center gap-y-4'>
    <Teamwork className='h-12 w-12 lg:h-24 lg:w-24' />
    <p>Teamwork</p>
   </div>
  </div>
 )
}

export default Misc
