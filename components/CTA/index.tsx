import {
 ButtonHTMLAttributes,
 FC,
 ReactNode,
} from 'react'

type Props = {
 text: string // Text of the button
 className?: string // Additional classnames
 icon?: ReactNode // Optional icon to display after the text
 fill?: 'violet' | 'blue' // Choose the color of the background
 variant?: 'primary' | 'secondary' // Primary or secondary style
} & ButtonHTMLAttributes<HTMLButtonElement>

/*
   Click to action button to grab user attention and made him click on it.
*/
const CTA: FC<Props> = ({
 text,
 className,
 icon,
 fill = 'violet',
 variant = 'primary',
 ...props
}) => {
 return (
  <button
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
   {icon}
  </button>
 )
}

export default CTA
