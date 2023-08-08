import { FC } from 'react'
import Tag from '../Tag'
import Link from 'next/link'

type Props = {
 category: 'writeup' | 'article' | 'tutorial'
 title: string
 description: string
 author: string
 date: string
 tags: Array<string>
}

const Post: FC<Props> = ({
 category,
 title,
 description,
 author,
 date,
 tags,
}) => {
 return (
  <div className='bg-white px-6 py-12 text-bastille shadow-xl'>
   <div className='flex flex-row flex-wrap items-center justify-between gap-x-2 gap-y-4'>
    <Tag
     text={category}
     className='border-[#B876FA] bg-[#F5E1FE] text-[#661E9F]'
    />
    <p>
     {author}, {date}
    </p>
   </div>
   <div className='mt-4'>
    <Link
     href='/'
     className='xl-text font-bold text-[#4300A8] underline-offset-4 hover:underline'>
     {title}
    </Link>
    <p>{description}</p>
   </div>
   <div className='mt-6 flex flex-row items-center'>
    <div className='flex max-w-[50%] flex-row flex-wrap items-center gap-x-6 gap-y-4'>
     {tags.map((item, index) => {
      return <Tag key={index} text={item} />
     })}
    </div>
    <Link
     className='md-text ml-auto mr-0 font-bold text-[#1E429F] transition-opacity hover:opacity-60'
     href='/'>
     Read More...
    </Link>
   </div>
  </div>
 )
}

export default Post
