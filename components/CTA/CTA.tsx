import { FC, ReactNode, RefObject } from 'react'

type Props = {
 sendButtonRef?: RefObject<HTMLButtonElement>
 text: string // Text of the button
 onClick?: () => unknown // Function on click
 className?: string // Additional classnames
 icon?: ReactNode // Optional icon to display after the text
 isDisabled?: boolean // Disable the button
 isLoading?: boolean // Put the button in loading state
 fill?: 'electricViolet' | 'lochmara' // Choose the color of the background
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
 fill = 'electricViolet',
}) => {
 return (
  <button
   ref={sendButtonRef}
   disabled={isDisabled || isLoading}
   onClick={onClick}
   className={`${className} ${
    fill == 'lochmara'
     ? 'color-animation-lochmara'
     : 'color-animation-electricViolet'
   } inline-flex h-fit w-fit items-center gap-x-2 rounded-3xl px-4 py-2 disabled:opacity-60`}>
   {text}
   {icon}
  </button>
 )
}

export default CTA
