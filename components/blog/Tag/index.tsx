import { FC } from 'react'
import Link from 'next/link'

type Props = {
 text: string
 className?: string
}

const Tag: FC<Props> = ({ text, className }) => {
 return (
  <Link
   href={`/blog/search/${text}`}
   className={`${className} w-fit cursor-pointer rounded-md border-2 border-[#76A9FA] bg-[#E1EFFE] px-1 text-[#1E429F]`}>
   <p className='xs-text capitalize'>{text}</p>
  </Link>
 )
}

export default Tag
