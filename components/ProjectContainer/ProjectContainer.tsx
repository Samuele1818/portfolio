import { FC } from 'react'
import User from '../../public/icons/User.svg'
import Clock from '../../public/icons/Clock.svg'
import RightArrow from '../../public/icons/RightArrow.svg'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
 id: string // Identifier of the container
 image1: string // First image to display
 image2: string // Second image to display
 image3?: string // Third image to display
 title: string // Title of the project
 type: string // Type of the project (website, application, ecc.)
 description: string // Description of the project
 role: string // My role in the project
 date: string // Date of start and end of the project
}

// TODO-LATER: Implement a study case for the projects and create a CTA to the study case and a secondary CTA that link to the site / product created
/*
  Show a project description and name with a link to the site / product created. Also show images of the project
*/
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
    <Image
     width={2000}
     height={2000}
     src={image1}
     sizes='1536px'
     className='w-96 h-fit -rotate-12 rounded-xl hover:scale-125 transition-transform'
     alt='Project image'
    />
    <Image
     width={2000}
     height={2000}
     sizes='1536px'
     src={image2}
     className='w-96 h-fit -rotate-12 rounded-xl ml-auto mr-0 xl:ml-auto xl:mr-auto hover:scale-150 transition-transform'
     alt='Project image'
    />
    {image3 && (
     <Image
      width={2000}
      height={2000}
      src={image3}
      sizes='(max-width: 1280px) 0, 1536px'
      className='w-96 h-fit -rotate-12 rounded-xl hidden xl:block hover:scale-125 transition-transform'
      alt='Project image'
     />
    )}
   </div>
  </section>
 )
}

export default ProjectContainer
