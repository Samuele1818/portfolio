import { NextPage } from 'next'
import DesktopIllustration from '../public/static/illustrations/Desktop.svg'
import RightArrow from '../public/static/icons/RightArrow.svg'
import Header from '../components/Header'
import CTA from '../components/CTA'
import Projects from '../projects.json'
import ProjectCard from '../components/PojectCard'
import SkillsCard from '../components/SkillsCard'
import WebDevelopment from '../public/static/icons/WebDevelopment.svg'

const Index: NextPage = () => {
  return (
    <div className="bg-white w-full h-full">
      <Header/>
      <section className="h-auto mt-24 layout flex flex-col lg:flex-row">
        <div className="flex-col flex lg:max-w-xs whitespace-pre-wrap text-center mx-auto lg:mx-0 lg:text-left">
          <h1 className="text-4xl font-bold">Full-stack & software developer</h1>
          <h2 className="text-2xl font-normal mt-4">Create things and solve problems with love</h2>
          <CTA icon={<RightArrow/>} className="mt-8 mx-auto lg:mx-0" text="Explore"/>
        </div>
        <DesktopIllustration className="mx-auto mt-16 lg:mt-0 lg:mr-0 lg:ml-auto w-full h-full md:w-[400px] md:h-[400px]"
                             viewBox="0 0 2507 2472"/>
      </section>
      
      <section className="h-auto relative py-24 bg-bastille text-hintOfRed flex flex-col-reverse lg:flex-row layout pr-0 lg:px-0 lg:pr-40">
        <div className="mx-auto lg:mx-0 grid grid-cols-1 gap-x-0 md:gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-2 lg:gap-y-12">
          {
            Projects.map((item, index) => {
                return (
                  <div key={index} className='mx-auto lg:mx-0 lg:[&:nth-child(-n+2)]:-ml-16 lg:[&:nth-child(5)]:ml-16 lg:[&:nth-child(6)]:ml-16'>
                    <ProjectCard background="#ccc" description={item.description} link={item.link}/>
                  </div>
                )
              }
            )
          }
        </div>
        <div className="mb-8 text-center lg:text-left lg:mb-0 ml-auto mr-0 lg:max-w-[25%]">
          <h1 className="text-4xl font-bold">My works</h1>
          <h2 className="text-2xl font-normal mt-4">These are my public projects, if you are interested to see more, feel free to contact me</h2>
        </div>
      </section>
      
      <section className="h-auto relative py-24 bg-bastille text-hintOfRed flex flex-col layout">
        <h1 className='text-center mx-auto text-4xl font-bold'>Call me Samuele1818</h1>
        <h2 className="text-2xl text-center mt-8 font-normal mb-16">Hi, I'm Samuele an Italian teenager that love coding and solve logic problems. I love create websites but I also enjoy software engineering.</h2>
        <SkillsCard icon={<WebDevelopment viewBox='0 0 500 414'/>} title='Web development' description='I like to transform ideas in reality with my coding skills'  sections={[
          {
            title: 'test1',
            values: ['Test1', 'Test2']
          },
        {
          title: 'test2',
          values: ['Test2', 'Test3']
        }
        ]}/>
      </section>
      <section> {/* Footer with project collaboration */}
        <h1></h1>
      </section>
    </div>
  )
}

export default Index
