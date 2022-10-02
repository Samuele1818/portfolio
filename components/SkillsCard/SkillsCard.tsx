import { FC, ReactNode } from 'react'

type Props = {
  icon: ReactNode
  title: string
  description: string
  sections: {
    title: string
    values: string[]
  }[]
}

const SkillsCard: FC<Props> = ({ icon, title, description, sections }) => {
  return (
    <div
      className="[&_svg]:w-12 [&_svg]:h-12 bg-white px-4 py-8 flex flex-col text-bastille text-center max-w-[24rem] rounded-xl items-center">
      {icon}
      <h1 className="font-bold text-xl mt-2">{title}</h1>
      <p className="font-normal text-lg mt-4">{description}</p>
      {
        sections?.map((section, index) => {
          return (
            <div key={index} className="flex flex-col">
              <h2 className="mt-8 text-electricViolet text-md font-bold">
                {section.title}
              </h2>
              <div className="flex flex-col">
                {
                  section.values?.map((value, index) => {
                    return <p key={index} className="font-light text-sm">{value}</p>
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default SkillsCard
