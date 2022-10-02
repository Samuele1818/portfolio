import { FC, ReactNode } from 'react'
import ExternalLink from '../../public/icons/ExternalLink.svg'
import Link from 'next/link'
import CTALink from '../CTALink'

type Props = {
  logo: ReactNode
  description: string
  link: string
  visibleLink: string
}

const Startup: FC<Props> = ({
                              logo,
                              description,
                              link,
                              visibleLink
                            }) => {
  
  return (
    <div className="shadow-md shadow-gray-300 bg-white w-full h-full rounded-xl flex flex-col items-center px-8 py-8 text-bastille">
      {logo}
      <p className="mt-8 text-lg font-normal line-clamp-3">{description}</p>
      <CTALink link={link} text={visibleLink} className='mt-4' />
    </div>
  )
}

export default Startup
