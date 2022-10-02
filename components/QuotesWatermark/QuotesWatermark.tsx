import { FC } from 'react'
import Quote from '../../public/icons/Quote.svg'

type Props = {
   className?: string
}

const QuotesWatermark: FC<Props> = ({ className }) => {
  return (
    <Quote viewBox='0 0 512.0 512.0' className={`${className} absolute opacity-5 w-32 h-32`}/>
  )
}

export default QuotesWatermark
