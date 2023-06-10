import { FC, ReactNode } from 'react'

type Props = {
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
   disabled={isDisabled || isLoading}
   onClick={onClick}
   className={`${className} ${
    fill == 'lochmara'
     ? 'color-animation-lochmara'
     : 'color-animation-electricViolet'
   } disabled:opacity-60 inline-flex items-center gap-x-2 w-fit h-fit px-4 py-2 rounded-3xl`}>
   {text}
   {icon}
  </button>
 )
}

export default CTA
