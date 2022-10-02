import { FC } from 'react'
import Link from 'next/link'
import ExternalLink from '../../public/icons/ExternalLink.svg'

type Props = {
  link: string
  text: string
  className?: string
  fill?: 'electricViolet' | 'lochmara' | 'none'
}

const CTALink: FC<Props> = ({ link, text, fill = 'electricViolet', className }) => {
  return (
    <Link href={link}>
      <a target="_blank" className={`${className} ${fill == 'lochmara' ? 'color-animation-lochmara' : fill =='electricViolet' ? 'color-animation-electricViolet' : 'bg-none text-white border-lochmara border-[1px] hover:color-animation-lochmara'} inline-flex gap-x-2 items-center rounded-xl color-animation px-2 py-1`}>
        {text}
        <ExternalLink className="w-4 h-4" viewBox="0 0 50 50"/>
      </a>
    </Link>
  )
}

export default CTALink
