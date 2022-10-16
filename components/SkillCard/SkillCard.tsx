import { FC, ReactNode, useLayoutEffect } from 'react'

type Props = {
  text: string
  icon: ReactNode
  className?: string
}

const SkillCard: FC<Props> = ({ text, icon, className}) => {
  
  return <div className={`${className} w-48 h-48 bg-[#25005b] bg-opacity-25 rounded-xl flex flex-col items-center justify-center px-8 py-6 [&>svg]:w-16 [&>svg]:h-16`}>
    {icon}
    <h1 className="md-text font-bold mt-4">{text}</h1>
  </div>
}

export default SkillCard
