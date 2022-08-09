import { FC } from 'react'
import { Property } from 'csstype'
import Background = Property.Background
import CTA from '../CTA'
import RightArrow from '../../public/static/icons/RightArrow.svg'

type Props = {
   background: Background  | undefined
   description: string
   link: string
}

const ProjectCard: FC<Props> = ({ background, description, link }) => {
  return (
    <div style={{ background: background}} className='w-80 h-40 group relative rounded-xl'>
       <div className='flex flex-col justify-center absolute py-4 px-8 bg-gray-600 rounded-xl text-hintOfRed left-0 top-0 w-full h-full md:hidden group-hover:flex'>
          <p className='text-center font-light'>{description}</p>
          <CTA className='mx-auto mt-6' text='Study case' icon={<RightArrow />}/>
       </div>
    </div>
  )
}

export default ProjectCard
