import { FC } from 'react'
import Link from 'next/link'
import ExternalLink from '../../public/icons/ExternalLink.svg'

type Props = {
 link: string // Href to redirect
 text: string // Text to display
 className?: string // Additional classnames
 fill?: 'electricViolet' | 'lochmara' | 'none' // Choose the background color
}

/*
  Linked styles as a Click to action button to make it more visible and important
*/
const CTALink: FC<Props> = ({
 link,
 text,
 fill = 'electricViolet',
 className,
}) => {
 return (
  <Link
   href={link}
   target='_blank'
   className={`${className} ${
    fill == 'lochmara'
     ? 'color-animation-lochmara'
     : fill == 'electricViolet'
     ? 'color-animation-electricViolet'
     : 'hover:color-animation-lochmara border-[1px] border-blue-600 bg-none text-white'
   } color-animation inline-flex items-center gap-x-2 rounded-xl px-2 py-1`}>
   {text}
   <ExternalLink
    className='h-4 w-4'
    viewBox='0 0 50 50'
   />
  </Link>
 )
}

export default CTALink
