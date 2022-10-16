import { FC, ReactNode } from 'react'

type Props = {
  text: string
  onClick?: () => unknown
  className?: string
  icon?: ReactNode
  isDisabled?: boolean
  isLoading?: boolean
  fill?: 'electricViolet' | 'lochmara'
}

const CTA: FC<Props> = ({
                          text,
                          className,
                          icon,
                          onClick,
                          isDisabled = false,
                          isLoading = false,
                          fill = 'electricViolet'
                        }) => {
  return (
    <button
      disabled={isDisabled || isLoading}
      onClick={onClick}
      className={`${className} ${fill == 'lochmara' ? 'color-animation-lochmara' : 'color-animation-electricViolet'} disabled:opacity-60 inline-flex items-center gap-x-2 w-fit h-fit px-4 py-2 rounded-3xl`}>
      {text}
      {icon}
    </button>
  )
}

export default CTA
