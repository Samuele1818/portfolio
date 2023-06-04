import { FC } from 'react'
import User from '../../public/icons/User.svg'
import Clock from '../../public/icons/Clock.svg'
import RightArrow from '../../public/icons/RightArrow.svg'
import Link from 'next/link'

type Props = {
 id: string
 image1: string
 image2: string
 image3?: string
 title: string
 type: string
 description: string
 role: string
 date: string
}

const ProjectContainer: FC<Props> = ({
 id,
 image1,
 image2,
 image3,
 title,
 type,
 description,
 role,
 date,
}) => {
 return (
  <section
   id={id}
   className='w-screen layout flex flex-col-reverse lg:flex-row gap-x-4 text-hintOfRed fill-hintOfRed mb-auto mt-auto h-[600px]'>
   <div className='flex-col flex mt-12 lg:mt-auto lg:mb-auto'>
    <p className='xs-text opacity-75 -mb-2'>
     {type}
    </p>
    <Link
     href='https://a-boutall.com'
     target='_blank'
     className='group cursor-pointer text-hintOfRed xl-text font-bold inline-flex items-center'>
     <RightArrow
      viewBox='0 0 13 8'
      className='transition-all w-0 h-fit group-hover:w-10 delay-75'
     />
     {title}
     <RightArrow
      viewBox='0 0 13 8'
      className='ml-4 w-10 h-fit opacity-75 group-hover:w-0 group-hover:translate-x-12 transition-all'
     />
    </Link>
    <p className='first-letter:capitalize mt-2'>
     {description}
    </p>
    <div className='flex-align-md mt-8 gap-x-8 md:items-center'>
     <div className='flex flex-row gap-x-2 items-center'>
      <User
       viewBox='0 0 1000 1046'
       className='w-4 h-4 lg:w-8 lg:h-8'
      />
      <p className='sm-text capitalize'>{role}</p>
     </div>
     <div className='flex flex-row gap-x-2 items-center'>
      <Clock
       viewBox='0 0 1000 1000'
       className='w-4 h-4 lg:w-8 lg:h-8 text-hintOfRed'
      />
      <p className='sm-text capitalize'>{date}</p>
     </div>
    </div>
   </div>
   <div className='w-full overflow-clip flex bg-bastille'>
    <img
     src={image1}
     className='w-96 h-fit -rotate-12 rounded-xl hover:scale-125 transition-transform'
    />
    <img
     src={image2}
     className='w-96 h-fit -rotate-12 rounded-xl ml-auto mr-0 xl:ml-auto xl:mr-auto hover:scale-150 transition-transform'
    />
    {image3 && (
     <img
      src={image3}
      className='w-96 h-fit -rotate-12 rounded-xl hidden xl:block hover:scale-125 transition-transform'
     />
    )}
   </div>
  </section>
 )
}

export default ProjectContainer
