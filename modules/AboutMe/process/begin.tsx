import { FC } from 'react'
import Window from '../../../components/Window'
import Cake from '../../../public/assets/about-me/process/Cake.svg'
import Process from '../../../public/assets/about-me/process/Process.svg'
import Idea from '../../../public/assets/about-me/process/Idea.svg'
import Evaluate from '../../../public/assets/about-me/process/icons/Evaluate.svg'
import Plan from '../../../public/assets/about-me/process/icons/Plan.svg'

const Begin: FC = () => {
 return (
  <>
   <h1 className='xl-text whitespace-pre-line text-center'>
    Begin from the idea
   </h1>
   <p className='hero-sub text-center text-slate-400'>
    Start the process when the idea comes in.
   </p>

   <div className='mt-12 flex flex-col items-center gap-x-48 gap-y-12 lg:flex-row'>
    <Window>
     <div className='relative w-full border-b-2 border-b-slate-400'>
      <Cake className='absolute -right-24 -top-12 left-auto h-fit w-48 md:w-72' />
      <Process className='h-fit w-[250px] border-b-2 border-b-slate-400 sm:w-[300px] md:w-[500px]' />
     </div>
     <div className='mt-4 flex flex-row items-center'>
      <Idea className='h-fit w-12 ' />
      <hr className='h-1 w-24 rotate-90 bg-slate-400' />
      <div className='flex flex-col text-slate-400'>
       <p>Fail: 10%</p>
       <p>Succeed: 90%</p>
      </div>
     </div>
    </Window>

    <div className='flex flex-col items-center text-center lg:max-w-md lg:items-start lg:text-start'>
     <div className='w-fit bg-slate-800 px-2 py-2'>
      <Evaluate className='h-fit w-16' />
     </div>
     <h2 className='md-text font-bold'>
      Evaluate the idea
     </h2>
     <p className='sm-text text-slate-400'>
      An idea comes in to solve a problem. You
      have to evaluate the idea before spend
      money, time and resources.
     </p>

     <div className='mt-12 w-fit bg-slate-800 px-2 py-2'>
      <Plan className='h-fit w-16' />
     </div>
     <h2 className='md-text font-bold'>
      Make the plan
     </h2>
     <p className='sm-text text-slate-400'>
      Before start creating, a plan is mandatory.
      Risks, technologies and duration are
      inclueded here.
     </p>
    </div>
   </div>
  </>
 )
}

export default Begin
