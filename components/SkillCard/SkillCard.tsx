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
   className={`${className} flex h-36 w-36 flex-col items-center justify-center rounded-xl bg-[#2B2236] px-8 py-6 md:h-48 md:w-48 lg:h-64 lg:w-96 [&>svg]:h-16 [&>svg]:w-16 [&>svg]:lg:h-24 [&>svg]:lg:w-24`}>
   {icon}
   <h1 className='md-text lg:lg-text mt-6 font-bold text-white'>
    {text}
   </h1>
  </div>
 )
}

export default SkillCard
