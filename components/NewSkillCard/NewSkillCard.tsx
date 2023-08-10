import { FC, ReactNode } from 'react'

type Props = {
 illustration: ReactNode // Illustration to render
 title: string // Title of the card
 description: string // Specification on what to do
 id?: string // Assign an id to the card
}

/*
  Contains an illustration and a text in which is specified what I want to learn / do new
*/
const NewSkillCard: FC<Props> = ({
 illustration,
 title,
 description,
 id,
}) => {
 return (
  <div
   id={id}
   className='layout flex-align-lg w-screen items-center text-white lg:gap-x-12'>
   <div className='w-full lg:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl'>
    {illustration}
   </div>
   <div className='lg:max-w-2/5 mt-12 flex w-full flex-col lg:mt-0'>
    <h1 className='lg-text font-bold'>{title}</h1>
    <p className='sm-text mt-2 opacity-75'>
     {description}
    </p>
   </div>
  </div>
 )
}

export default NewSkillCard
