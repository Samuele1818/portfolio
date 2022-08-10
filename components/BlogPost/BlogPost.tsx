import { FC } from 'react'
import CTA from '../CTA'
import RightArrow from '../../public/static/icons/RightArrow.svg'
import Clock from '../../public/static/icons/Clock.svg'
import Pencil from '../../public/static/icons/Pencil.svg'

type Props = {
  title: string
  description: string
  date: string
  author: string
  timeToRead: string
}

const BlogPost: FC<Props> = ({ title, description, date, author, timeToRead}) => {
  return (
     <div className='flex flex-col px-4 py-8 bg-white rounded-xl'>
       <h1 className='text-xl font-bold'>{title}</h1>
       <div className='flex flex-row gap-x-2 mx-auto items-center mt-2'>
         <Clock className='w-4 h-4' viewBox='0 0 1000 1001' />
         <h3 className='text-sm font-normal opacity-90'>Read time</h3>
         <h3 className='text-sm font-light opacity-80'>{timeToRead}</h3>
       </div>
       <div className='flex flex-row gap-x-2 mx-auto items-center'>
         <Pencil className='w-4 h-4' viewBox='0 0 1000 1001'/>
         <h3 className='text-sm font-normal opacity-90'>Author</h3>
         <h3 className='text-sm font-light opacity-80'>{author}</h3>
       </div>
       <hr className='w-full bg-bastille w-full h-[0.5px] mt-4' />
       <p className='line-clamp-3 mt-2 font-light'>{description}</p>
       <CTA className='mx-auto mt-4' text='Read more' icon={<RightArrow />}/>
     </div>
  )
}

export default BlogPost
