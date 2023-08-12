import { FC } from 'react'
import Link from 'next/link'
import ExternalLink from '../../public/icons/ExternalLink.svg'
import '../CTA/cta.css'

type Props = {
 link: string // Href to redirect
 text: string // Text to display
 linkIcon?: boolean
 className?: string // Additional classnames
 fill?: 'violet' | 'blue' // Choose the background color
 variant?: 'primary' | 'secondary' // Primary or secondary style
}

/*
  Linked styles as a Click to action button to make it more visible and important
*/
const CTALink: FC<Props> = ({
 link,
 text,
 linkIcon = true,
 fill = 'violet',
 className,
 variant = 'primary',
}) => {
 return (
  <Link
   href={link}
   target='_blank'
   className={`${className} ${
    fill == 'blue'
     ? variant == 'primary'
       ? 'primary-blue'
       : 'secondary-blue'
     : variant == 'primary'
     ? 'primary-violet'
     : 'secondary-violet'
   } inline-flex h-fit w-fit items-center gap-x-2 rounded-lg border-2 px-4 py-2 text-white transition-all disabled:opacity-60`}>
   {text}
   {linkIcon && (
    <ExternalLink
     className='h-4 w-4'
     viewBox='0 0 50 50'
    />
   )}
  </Link>
 )
}

export default CTALink
