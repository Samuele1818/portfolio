import { FC } from 'react'
import Tag from '../Tag'
import Link from 'next/link'
import { formatDate } from '../../../utils/dates'
import './post.css'
import { Metadata } from '../../../types/posts'

type Props = {} & Metadata

const Post: FC<Props> = ({
 slug,
 category,
 title,
 description,
 author,
 date,
 tags,
}) => {
 return (
  <div className='post flex flex-col bg-white px-6 py-12 text-dark'>
   <div className='flex flex-row flex-wrap items-center justify-between gap-x-2 gap-y-4'>
    <Tag
     text={category}
     className='border-[#B876FA] bg-[#F5E1FE] text-[#661E9F]'
    />
    <p className='sm-text'>
     {author}, {formatDate(date)}
    </p>
   </div>
   <div className='mb-4 mt-4'>
    <Link
     href={`/blog/${slug}`}
     className='lg-text line-clamp-1 font-bold text-violet-800 underline-offset-4 hover:underline'>
     {title}
    </Link>
    <p className='sm-text line-clamp-3'>
     {description}
    </p>
   </div>
   <div className='mb-0 mt-auto flex flex-row flex-wrap-reverse items-center justify-between gap-x-4 gap-y-4'>
    <div className='flex flex-row flex-wrap items-center gap-x-4 gap-y-4'>
     {tags.map((item, index) => {
      return <Tag key={index} text={item} />
     })}
    </div>
    <Link
     className='md-text font-bold text-[#1E429F] transition-opacity hover:opacity-60'
     href={`/blog/${slug}`}>
     Read More...
    </Link>
   </div>
  </div>
 )
}

export default Post
