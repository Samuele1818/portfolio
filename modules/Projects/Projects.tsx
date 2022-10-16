import { FC } from 'react'
import CTA from '../../components/CTA'
import CTALink from '../../components/CTALink'
import RightArrow from '../../public/icons/RightArrow.svg'
import dynamic from 'next/dynamic'

const AboutallDarkDyn = dynamic(() => import('../../public/assets/projects/AboutAll/About_Dark.svg')) as any
const AboutallLightDyn = dynamic(() => import('../../public/assets/projects/AboutAll/About_Light.svg')) as any
const AboutallTabletDyn = dynamic(() => import('../../public/assets/projects/AboutAll/AboutAllTablet.svg')) as any

const Projects: FC = () => {
  /*  const path = useRef<SVGPathElement>()
    const pathLength = useRef<number>(0)
    
    useEffect(() => {
      const highlightRef = document.getElementById('highlightRef')
      if (!highlightRef) return
      path.current = highlightRef.querySelector('path') || undefined
      if (path.current) {
        pathLength.current = path.current.getTotalLength()
        path.current.style.strokeDasharray = `${pathLength.current} ${pathLength.current}`
        path.current.style.strokeDashoffset = `${pathLength.current}`
        highlightRef.style.display = 'block'
      }
      
      window.addEventListener('scroll', () => {
        if (path.current && pathLength.current) {
          const scrollTopPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
          
          const drawLength = pathLength.current * scrollTopPercentage
          
          path.current.style.strokeDashoffset = `${pathLength.current - drawLength * 6}`
        }
      })
    }, [])*/
  
  return (
    <section
      id="projects"
      className="pt-24 bg-bastille text-hintOfRed">
      <div className="w-full layout flex flex-col">
        <h1 className="xl-text hr-align-md">
          Projects
        </h1>
        <section
          className="w-full relative flex flex-col-reverse md:flex-row md:items-center mt-48 md:mt-16">
          <div className="flex flex-col md:absolute z-20 w-fit md:max-w-[40%] hr-align-md items-center md:items-start">
            <h1 className="xl-text text-lochmara">About All</h1>
            <h2 className="md-text mt-4">Know the opinions of others about everything</h2>
            <div className="inline-flex gap-x-4 mt-8 items-center">
              <CTA text="Study case" className="!color-animation-lochmara" icon={<RightArrow/>}/>
              <CTALink text="Website" link="https://www.a-boutall.com" fill="none"/>
            </div>
          </div>
          <div
            className="flex w-full bg-[#25005b] bg-opacity-25 rounded-xl justify-center -mb-36 pb-48 md:justify-start md:pb-0 md:mb-0 md:pt-12 md:mt-12 md:w-10/12 md:ml-auto md:mr-0">
            <AboutallDarkDyn viewBox="0 0 78 129"
                             className="hidden md:block w-[200px] h-fit ml-[40%] mr-auto mb-0 mt-auto"/>
            <AboutallLightDyn viewBox="0 0 78 129"
                              className="hidden md:block w-[200px] h-fit ml-[15%] mr-auto -mb-16 mt-auto overflow-visible"/>
            <AboutallTabletDyn viewBox="0 0 212 162" className="w-[80%] h-fit md:hidden h-fit -mt-20 mb-auto"/>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Projects
