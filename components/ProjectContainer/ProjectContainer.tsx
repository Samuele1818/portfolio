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
   className='layout mb-auto mt-auto flex h-[600px] w-screen flex-col-reverse gap-x-4 fill-hintOfRed text-hintOfRed lg:flex-row'>
   <div className='mt-12 flex flex-col lg:mb-auto lg:mt-auto'>
    <p className='xs-text -mb-2 opacity-75'>
     {type}
    </p>
    <Link
     href='https://a-boutall.com'
     target='_blank'
     className='xl-text group inline-flex cursor-pointer items-center font-bold text-hintOfRed'>
     <RightArrow
      viewBox='0 0 13 8'
      className='h-fit w-0 transition-all delay-75 group-hover:w-10'
     />
     {title}
     <RightArrow
      viewBox='0 0 13 8'
      className='ml-4 h-fit w-10 opacity-75 transition-all group-hover:w-0 group-hover:translate-x-12'
     />
    </Link>
    <p className='mt-2 first-letter:capitalize'>
     {description}
    </p>
    <div className='flex-align-md mt-8 gap-x-8 md:items-center'>
     <div className='flex flex-row items-center gap-x-2'>
      <User
       viewBox='0 0 1000 1046'
       className='h-4 w-4 lg:h-8 lg:w-8'
      />
      <p className='sm-text capitalize'>{role}</p>
     </div>
     <div className='flex flex-row items-center gap-x-2'>
      <Clock
       viewBox='0 0 1000 1000'
       className='h-4 w-4 text-hintOfRed lg:h-8 lg:w-8'
      />
      <p className='sm-text capitalize'>{date}</p>
     </div>
    </div>
   </div>
   <div className='flex w-full overflow-clip bg-bastille'>
    <Image
     width={2000}
     height={2000}
     src={image1}
     sizes='500px'
     className='h-fit w-96 -rotate-12 rounded-xl transition-transform hover:scale-125'
     alt='Project image'
    />
    <Image
     width={2000}
     height={2000}
     sizes='500px'
     src={image2}
     className='ml-auto mr-0 h-fit w-96 -rotate-12 rounded-xl transition-transform hover:scale-150 xl:ml-auto xl:mr-auto'
     alt='Project image'
    />
    {image3 && (
     <Image
      width={2000}
      height={2000}
      src={image3}
      sizes='(max-width: 1536px) 0, 500px'
      className='hidden h-fit w-96 -rotate-12 rounded-xl transition-transform hover:scale-125 2xl:block'
      alt='Project image'
     />
    )}
   </div>
  </section>
 )
}

export default ProjectContainer
