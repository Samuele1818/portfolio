'use client'
import {
 FC,
 useEffect,
 useMemo,
 useRef,
} from 'react'
import gsap from 'gsap'
import ProjectContainer from '../../components/ProjectContainer'

/*
  Projects section with products that I made
*/
const Projects: FC = () => {
 const Projects = useMemo(
  () => [
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
  ],
  []
 )

 const containerRef = useRef(null)

 // @ts-ignore
 useEffect(() => {
  // If container is not initialized return
  if (!containerRef) return
  // Put panels in an array
  const panels = gsap.utils.toArray('#panel')
  let ctx = gsap.to(panels, {
   xPercent: -100 * (panels.length - 1),
   ease: 'none',
   scrollTrigger: {
    // Set the trigger to the container of panels
    trigger: containerRef.current,
    pin: true, // Make scrolling stop vertically
    start: 'top top',
    scrub: 1,
    snap: {
     // Auto snap if scroll is partial
     snapTo: 1 / (panels.length - 1),
     inertia: false,
     duration: { min: 0.1, max: 0.1 },
    },
    // Set the end of the container
    end: () =>
     '+=' +
     // @ts-ignore
     (containerRef.current.offsetWidth -
      innerWidth),
   },
  })
  return () => ctx.revert()
 }, [Projects])

 return (
  <div
   id='projects'
   className='bg-bastille relative py-24'>
   {/*<div className="ml-auto mr-auto text-white w-fit -mt-12">*/}
   {/* <p className="md-text mb-6">Scroll</p>*/}
   {/* <RightArrow viewBox="0 0 13 8" className="w-16 h-fit rotate-90" />*/}
   {/*</div>*/}
   <div className='layout mt-96 text-light'>
    <h1>My Projects</h1>
    <p className='absolute left-6 top-[26rem] scale-150 text-9xl opacity-[2%]'>
     Explore my Projects Explore my Projects
    </p>
   </div>
   <section
    ref={containerRef}
    className={`bg-bastille flex h-screen w-max flex-nowrap overflow-hidden`}>
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
