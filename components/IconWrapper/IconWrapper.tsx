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
   className='border-bastille h-fit w-fit cursor-pointer rounded-full border-[1px] bg-white p-3 text-dark transition-all hover:bg-white hover:p-2 [&_svg]:h-8 [&_svg]:w-8'>
   {icon}
  </Link>
 )
}

export default IconWrapper
