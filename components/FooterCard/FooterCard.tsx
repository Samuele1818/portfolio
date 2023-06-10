import { FC, ReactNode } from 'react'

interface Props {
 icon: ReactNode // Inject svg icon
 className?: string // Inject classname
}

/*
   Card with an icon used in the Footer component
*/
const FooterCard: FC<Props> = ({
 icon,
 className,
}) => {
 return (
  <div
   className={`${className} bg-white rounded-xl shadow-xl flex items-center justify-center rotate-[15deg] w-fit h-fit px-12 py-8`}>
   {icon}
  </div>
 )
}

export default FooterCard
