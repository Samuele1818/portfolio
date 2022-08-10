import { FC, ReactNode } from 'react'
import CTA from '../CTA'
import ExternalLink from '../../public/static/icons/ExternalLink.svg'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
    <div className="bg-white w-full h-full rounded-xl flex flex-col items-center px-8 py-8 text-bastille">
      {logo}
      <p className='mt-8 text-lg font-normal line-clamp-3'>{description}</p>
      <Link href={link}>
        <a target='_blank' className='mt-4 px-2 py-1 bg-electricViolet inline-flex gap-x-2 items-center text-hintOfRed rounded-xl border-electricViolet border-[2px] hover:bg-white hover:text-electricViolet'>
          {visibleLink}
          <ExternalLink className='w-4 h-4' viewBox='0 0 50 50'/>
        </a>
      </Link>
    </div>
  )
}

export default Startup
