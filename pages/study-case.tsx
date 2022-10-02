import { NextPage } from 'next'
import { useRouter } from 'next/router'
import StudyCasesList from '../data/study-cases'
import { useEffect, useState } from 'react'
import AdminSettings from '../public/icons/AdminSettings.svg'
import Clock from '../public/icons/Clock.svg'
import Motherboard from '../public/icons/Motherboard.svg'
import MultipleDevices from '../public/icons/MultipleDevices.svg'
import CTALink from '../components/CTALink'
import RightArrow from '../public/icons/RightArrow.svg'
import ChooseCard from '../components/ChooseCard'

const StudyCase: NextPage = () => {
  const { query, push } = useRouter()
  const { name, prevUrl } = query
  
  const [currentCase, setCurrentCase] = useState<{
    nextProject: string,
    information: {
      siteUrl: string,
      sourceCodeUrl: string,
      role: string,
      platforms: string,
      technologies: string[],
      timeline: string,
      imagePath: string,
    },
    project: {
      title: string,
      description: string
    },
    problems: {
      description: string,
      technologies: [
        {
          name: string,
          description: string
        },
        {
          name: string,
          description: string
        }
      ],
      ui: [
        {
          name: string,
          description: string
        },
      ],
      uiElements: {
        fonts: [
          {
            name: string,
            description: string
          }
        ],
        colors: [
          {
            hex: string,
            description: string
          }
        ]
      }
    }
  }>({
    nextProject: '',
    information: {
      siteUrl: '',
      sourceCodeUrl: '',
      role: '',
      platforms: '',
      technologies: [],
      timeline: '',
      imagePath: ''
    },
    project: {
      title: '',
      description: ''
    },
    problems: {
      description: '',
      technologies: [
        {
          name: '',
          description: ''
        },
        {
          name: '',
          description: ''
        }
      ],
      ui: [
        {
          name: '',
          description: ''
        },
      ],
      uiElements: {
        fonts: [
          {
            name: '',
            description: ''
          }
        ],
        colors: [
          {
            hex: '',
            description: ''
          }
        ]
      }
    }
  })
  
  useEffect(() => {
    if (!name) return
    setCurrentCase(StudyCasesList[name as string])
  }, [name])
  
  return (
    <div className="w-full h-full bg-white opacity-animation overflow-x-hidden">
      <section className="bg-bastille pb-24 layout text-hintOfRed w-full flex flex-col">
        <section
          className="flex flex-row border-hintOfRed border-opacity-30 border-b-[0.5px] mt-12 items-center justify-between p-4">
          <RightArrow onClick={() => push(prevUrl as string || '/')} className="rotate-180 w-6 h-6 text-lochmara"
                      viewBox="0 0 13 8"/>
        </section>
        <div className='flex-align-md mt-12'>
          <div className='flex flex-col w-1/2 hr-align-md'>
            <h1 className='xl-text'>{currentCase.project.title}</h1>
            <h1 className='lg-text mt-8'>{currentCase.project.description}</h1>
          </div>
          <div className="[&_svg]:hidden md:[&_svg]:block justify-center mt-8 md:mt-0 gap-x-4 md:justify-start flex flex-wrap flex-row md:flex-col gap-y-4 mx-auto md:mr-0 md:ml-auto">
            <div className="flex flex-col">
              <div className="flex flex-row gap-x-4 items-center">
                <AdminSettings className="w-8 h-8" viewBox="0 0 100 100"/>
                <div className="flex flex-col">
                  <h1 className="xs-text text-lochmara">Role</h1>
                  <h2 className="-mt-2 sm-text">{currentCase.information.role}</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row gap-x-4 items-center">
                <Clock className="w-8 h-8" viewBox="0 0 1000 1000"/>
                <div className="flex flex-col">
                  <h1 className="xs-text text-lochmara">TImeline</h1>
                  <h2 className="-mt-2 sm-text">{currentCase.information.timeline}</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row gap-x-4 items-center">
                <MultipleDevices className="w-8 h-8" viewBox="0 0 100 100"/>
                <div className="flex flex-col">
                  <h1 className="xs-text text-lochmara">Platforms</h1>
                  <h2 className="-mt-2 sm-text">{currentCase.information.platforms}</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row gap-x-4">
                <Motherboard className="w-8 h-8 mt-1" viewBox="0 0 100 100"/>
                <div className="flex flex-col">
                  <h1 className="xs-text text-lochmara">Technologies</h1>
                  <div className='-mt-2'>
                    {
                      currentCase.information.technologies.map((item, index) => (
                        <h2 key={index} className="sm-text">{item}</h2>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='-mt-12 w-full layout relative'>
        <img src={currentCase.information.imagePath} className='w-full rounded-lg brightness-[0.2]'/>
        <div className='absolute left-0 right-0 top-0 bottom-0 my-auto mx-auto w-fit h-fit inline-flex gap-x-4'>
          <CTALink fill='lochmara' link={currentCase.information.siteUrl} linkText='Visit website' />
          <CTALink fill='lochmara' link={currentCase.information.sourceCodeUrl} linkText='Source code' />
        </div>
      </div>
      <h1 className='mt-24 xl-text center'>Chooses</h1>
      <h1 className='lg-text center'>{currentCase.problems.description}</h1>
      <ChooseCard title='Technologies' />
    </div>
  )
}

export default StudyCase
