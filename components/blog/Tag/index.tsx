import { FC } from 'react'

type Props = {
 text: string
 className?: string
}

const Tag: FC<Props> = ({ text, className }) => {
 return (
  <div
   className={`${className} w-fit cursor-pointer rounded-md border-2 border-[#76A9FA] bg-[#E1EFFE] px-1 text-[#1E429F]`}>
   <p className='xs-text capitalize'>{text}</p>
  </div>
 )
}

export default Tag
