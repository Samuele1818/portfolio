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
   className={`${className} flex h-fit w-fit rotate-[15deg] items-center justify-center rounded-xl bg-white px-12 py-8 shadow-xl`}>
   {icon}
  </div>
 )
}

export default FooterCard
