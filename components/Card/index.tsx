import { FC, ReactNode } from 'react'

type Props = {
 className?: string
 children: ReactNode
}

/*
  Linked styles as a Click to action button to make it more visible and important
*/
const Card: FC<Props> = ({
 children,
 className,
}) => {
 return (
  <div
   className={`${className} rounded-lg bg-slate-800 px-8 py-8`}>
   {children}
  </div>
 )
}

export default Card
