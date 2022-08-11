import { FC, ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  icon: ReactNode
  theme: 'light' | 'dark'
  link: string
}

const IconWrapper: FC<Props> = ({ icon, theme, link }) => {
  return (
    <Link href={link}>
      <a target="_blank"
         className={`${theme === 'light' ? 'text-hintOfRed border-hintOfRed hover:bg-hintOfRed hover:text-electricViolet' : 'color-animation'} border-[1px] rounded-full w-fit h-fit p-2 cursor-pointer [&_svg]:w-6 [&_svg]:h-6`}>
        {icon}
      </a>
    </Link>
  )
}

export default IconWrapper
