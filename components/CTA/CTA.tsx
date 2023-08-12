import { FC, ReactNode, RefObject } from 'react'
import './cta.css'

type Props = {
 sendButtonRef?: RefObject<HTMLButtonElement>
 text: string // Text of the button
 onClick?: () => unknown // Function on click
 className?: string // Additional classnames
 icon?: ReactNode // Optional icon to display after the text
 isDisabled?: boolean // Disable the button
 isLoading?: boolean // Put the button in loading state
 fill?: 'violet' | 'blue' // Choose the color of the background
 variant?: 'primary' | 'secondary' // Primary or secondary style
}

/*
   Click to action button to grab user attention and made him click on it.
*/
const CTA: FC<Props> = ({
 sendButtonRef,
 text,
 className,
 icon,
 onClick,
 isDisabled = false,
 isLoading = false,
 fill = 'violet',
 variant = 'primary',
}) => {
 return (
  <button
   ref={sendButtonRef}
   disabled={isDisabled || isLoading}
   onClick={onClick}
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
