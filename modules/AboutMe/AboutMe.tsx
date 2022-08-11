import { FC } from 'react'
import SkillsList from '../../data/skills'
import SkillsCard from '../../components/SkillsCard'

const AboutMe: FC = () => {
  return (
    <section className="py-24 bg-bastille text-hintOfRed flex flex-col layout">
      <h1 className="xl-text center">Call me Samuele1818</h1>
      <h2 className="lg-text center mt-8">Hi, I&apos;m Samuele an Italian teenager that love coding
        and solve logic problems. I love create websites but I also enjoy software engineering.</h2>
      <section
        className="mt-16 flex-align-md items-center gap-y-4 gap-x-0 md:gap-x-4 md:gap-y-0 md:justify-between w-full">
        {
          SkillsList.map((skill, index) => {
            return (
              <SkillsCard key={index} icon={skill.icon} title={skill.title} description={skill.description}
                          sections={skill.sections}/>
            )
          })
        }
      </section>
    </section>
  )
}

export default AboutMe
