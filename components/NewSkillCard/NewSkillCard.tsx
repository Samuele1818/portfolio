import { FC, ReactNode } from 'react'

type Props = {
 illustration: ReactNode
 title: string
 description: string
 id?: string
}

const NewSkillCard: FC<Props> = ({
 illustration,
 title,
 description,
 id,
}) => {
 return (
  <div
   id={id}
   className='layout w-screen text-white flex-align-md rounded-xl items-center'>
   <div className='max-w-sm md:max-w-md lg:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl'>
    {illustration}
   </div>
   <div className='flex flex-col w-full md:max-w-2/5'>
    <h1 className='lg-text font-bold'>{title}</h1>
    <p className='sm-text opacity-75 mt-2'>
     {description}
    </p>
   </div>
  </div>
 )
}

export default NewSkillCard
