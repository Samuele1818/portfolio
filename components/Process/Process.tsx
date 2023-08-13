// 'use client'
import { FC } from 'react'
import VerticalProcess from '../../public/assets/AboutMe/VerticalProcess.svg'
import HorizontalProcess from '../../public/assets/AboutMe/HorizontalProcess.svg'
import React from '../../public/assets/skills/React.svg'
// import gsap from 'gsap'

/*
  Contains the process of the creation of a product with an animation on appear. Adapted based on screen size
*/
const Process: FC = () => {
 // const svgPathRef = useRef(null)
 // // @ts-ignore
 // useEffect(() => {
 //  const tl = gsap.timeline({
 //   scrollTrigger: {
 //    trigger: '#process-container',
 //    start: 'center top',
 //    toggleActions: 'play none reverse none',
 //   },
 //  })
 //
 //  const ctx = tl
 //   .to('#process-line', {
 //    duration: 0.5,
 //    strokeOpacity: 1,
 //   })
 //   .to('#process-circles', {
 //    duration: 0.2,
 //    fillOpacity: 1,
 //   })
 //   .to('#process', {
 //    duration: 0.5,
 //    fillOpacity: 1,
 //    stagger: 0.1,
 //   })
 //
 //  return () => ctx.revert()
 // }, [])

 return (
  <div
   id='process-container'
   className='h-full w-full'>
   <HorizontalProcess
    viewBox='0 0 6375 2284'
    className='hidden h-fit w-full lg:block'
   />
   <VerticalProcess
    viewBox='0 0 3508 7294'
    className='block h-fit w-full lg:hidden'
   />
  </div>
 )
}

export default Process
