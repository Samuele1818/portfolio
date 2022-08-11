import { FC } from 'react'
import ProjectCard from '../../components/PojectCard'
import ProjectsList from '../../data/projects.json'

const Projects: FC = () => {
  return (
    <section
      id='projects'
      className="pt-24 bg-bastille text-hintOfRed flex flex-col-reverse lg:flex-row layout pr-0 lg:px-0 lg:pr-40">
      <div
        className="mx-auto lg:mx-0 grid grid-cols-1 gap-x-0 md:gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-2 lg:gap-y-12">
        {
          ProjectsList.map((item, index) => {
              return (
                <div key={index}
                     className="mx-auto lg:mx-0 lg:[&:nth-child(-n+2)]:-ml-16 lg:[&:nth-child(5)]:ml-16 lg:[&:nth-child(6)]:ml-16">
                  <ProjectCard background="#ccc" description={item.description} link={item.link}/>
                </div>
              )
            }
          )
        }
      </div>
      <div className="mb-8 text-center lg:text-left lg:mb-0 ml-auto mr-0 lg:max-w-[25%]">
        <h1 className="text-4xl font-bold">My works</h1>
        <h2 className="text-2xl font-normal mt-4">These are my public projects, if you are interested to see more,
          feel free to contact me</h2>
      </div>
    </section>
  )
}

export default Projects
