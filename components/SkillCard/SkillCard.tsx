import { FC, ReactNode } from 'react'

type Props = {
 text: string // Name of the icon
 icon: ReactNode // Icon of the skill
 className?: string // Additional classnames
}

/*
   Show an icon with the name of what represents.
   Used to show skills.
*/
const SkillCard: FC<Props> = ({
 text,
 icon,
 className,
}) => {
 return (
  <div
   className={`${className} bg-[#354F6C] w-36 h-36 md:w-48 md:h-48 rounded-xl flex flex-col items-center justify-center px-8 py-6 [&>svg]:w-16 [&>svg]:h-16`}>
   {icon}
   <h1 className='md-text font-bold mt-4'>
    {text}
   </h1>
  </div>
 )
}

export default SkillCard
