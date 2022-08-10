import { FC, ReactNode } from 'react'

type Props = {
   icon: ReactNode
   theme: 'light' | 'dark'
}

const IconWrapper: FC<Props> = ({ icon, theme}) => {
  return (
    <div className={`${theme === 'light' ? 'text-hintOfRed border-hintOfRed' : 'text-bastille border-bastille'} border-[1px] rounded-full w-fit h-fit p-2 cursor-pointer hover:bg-white hover:text-electricViolet [&_svg]:w-6 [&_svg]:h-6`}>
       {icon}
    </div>
  )
}

export default IconWrapper
