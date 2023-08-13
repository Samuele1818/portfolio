import { FC, ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import ExternalLink from '../../public/icons/ExternalLink.svg'
import '../CTA/cta.css'

type Props = {
 text: string // Text to display
 hasIcon?: boolean
 icon?: ReactNode
 className?: string // Additional classnames
 fill?: 'violet' | 'blue' // Choose the background color
 variant?: 'primary' | 'secondary' // Primary or secondary style
} & LinkProps

/*
  Linked styles as a Click to action button to make it more visible and important
*/
const CTALink: FC<Props> = ({
 text,
 hasIcon = true,
 icon = (
  <ExternalLink
   className='h-4 w-4'
   viewBox='0 0 50 50'
  />
 ),
 fill = 'violet',
 className,
 variant = 'primary',
 ...props
}) => {
 return (
  <Link
   {...props}
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
   {hasIcon && icon}
  </Link>
 )
}

export default CTALink
