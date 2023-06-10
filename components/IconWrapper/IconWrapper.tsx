import { FC, ReactNode } from 'react'
import Link from 'next/link'

type Props = {
 icon: ReactNode // Icon to display in the wrapper
 link: string // Link to redirect when user click the wrapper
}

/*
   Wrapper that contains and icon and redirect on a link on user click.
   Used to link social media
*/
const IconWrapper: FC<Props> = ({
 icon,
 link,
}) => {
 return (
  <Link
   href={link}
   target='_blank'
   className='text-white bg-bastille hover:bg-white hover:text-bastille transition-all border-bastille border-[1px] rounded-full w-fit h-fit p-2 cursor-pointer [&_svg]:w-8 [&_svg]:h-8'>
   {icon}
  </Link>
 )
}

export default IconWrapper
