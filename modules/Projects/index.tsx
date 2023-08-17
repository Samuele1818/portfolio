import { FC } from 'react'
import ProjectContainer from '../../components/ProjectContainer'

/*
  Projects section with products that I made
*/
const Projects: FC = () => {
 const Projects = [
  {
   image1: '/assets/projects/AboutAll/home.png',
   image2: '/assets/projects/AboutAll/about.png',
   image3: '/assets/projects/AboutAll/topic.png',
   type: 'website',
   title: 'AboutAll',
   description:
    'a monitored community in which everyone can review products, services and almost all.',
   role: 'front / back end developer',
   date: 'aug 2022 - now',
  },
 ]

 return (
  <div
   id='projects'
   className='layout bg-slate-900 py-48'>
   <div className='relative text-light'>
    <h1 className='xl2-text'>My Projects</h1>
    <p className='watermark absolute -left-6 -top-[80%] md:-top-[200%]'>
     Explore my Projects
    </p>
   </div>

   <section className='mt-36 flex flex-col gap-y-24'>
    {Projects.map((project, index) => {
     return (
      <ProjectContainer
       key={index}
       id='panel'
       {...project}
      />
     )
    })}
   </section>
  </div>
 )
}

export default Projects
