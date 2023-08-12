import { FC } from 'react'
import Tag from '../Tag'
import Link from 'next/link'

type Props = {
 slug: string
 category: 'writeup' | 'article' | 'tutorial'
 title: string
 description: string
}

const RelatedPost: FC<Props> = ({
 slug,
 title,
 description,
 category,
}) => {
 return (
  <div className='border-b-bastille w-fit border-b-2 bg-white py-4 text-dark'>
   <h1 className='lg-text'>{title}</h1>
   <p className='sm-text line-clamp-2'>
    {description}
   </p>
   <div className='mt-6 flex flex-row flex-wrap items-center'>
    <Tag
     text={category}
     className='border-[#B876FA] bg-[#F5E1FE] text-[#661E9F]'
    />
    <Link
     className='md-text ml-auto mr-0 font-bold text-[#1E429F] transition-opacity hover:opacity-60'
     href={`/blog/${slug}`}>
     Read More...
    </Link>
   </div>
  </div>
 )
}

export default RelatedPost
