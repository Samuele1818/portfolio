import { FC } from 'react'
import CTA from '../CTA'
import RightArrow from '../../public/icons/RightArrow.svg'
import Clock from '../../public/icons/Clock.svg'
import Pencil from '../../public/icons/Pencil.svg'

type Props = {
  title: string
  description: string
  date: string
  author: string
  timeToRead: string
}

const BlogPost: FC<Props> = ({ title, description, date, author, timeToRead }) => {
  return (
    <div className="flex flex-col px-4 py-8 bg-white shadow-shadow rounded-xl">
      <h1 className="text-center md-text font-bold">{title}</h1>
      <div className="inline-flex gap-x-2 mx-auto items-center mt-2">
        <Clock className="w-4 h-4" viewBox="0 0 1000 1001"/>
        <h2 className="text-md">Read time</h2>
        <h3 className="text-sm font-light">{timeToRead}</h3>
      </div>
      <div className="inline-flex gap-x-2 mx-auto items-center">
        <Pencil className="w-4 h-4" viewBox="0 0 1000 1001"/>
        <h2 className="text-md">Date</h2>
        <h3 className="text-sm font-light">{date}</h3>
      </div>
      <hr className="w-full bg-bastille w-full h-[0.5px] mt-4"/>
      <p className="line-clamp-3 mt-2 sm-text text-center">{description}</p>
      <CTA className="mx-auto mt-4" text="Read more" icon={<RightArrow/>}/>
    </div>
  )
}

export default BlogPost
