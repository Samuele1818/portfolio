'use client'
import {FC, useEffect, useMemo, useRef,} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import ProjectContainer from '../../components/ProjectContainer'

// Register ScrollTrigger here because it is client side
gsap.registerPlugin(ScrollTrigger)

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
  <section
   ref={containerRef}
   id='projects'
   className={`py-24 h-screen bg-bastille w-max flex flex-nowrap overflow-hidden`}>
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
 )
}

export default Projects
