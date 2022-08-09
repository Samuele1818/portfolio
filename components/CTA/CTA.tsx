import { FC, ReactNode } from 'react'

type Props = {
  text: string
  onClick?: () => unknown
  className?: string
  icon?: ReactNode
}

const CTA: FC<Props> = ({ text, className , icon, onClick}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} inline-flex items-center gap-x-2 w-fit h-fit px-4 py-2 rounded-3xl border-2 bg-electricViolet border-electricViolet text-white hover:text-electricViolet hover:bg-white transition-colors`}>
      {text}
      {icon}
    </button>
  )
}

export default CTA
