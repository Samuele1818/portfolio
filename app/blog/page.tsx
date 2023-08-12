import { Metadata, NextPage } from 'next'
import Post from '../../components/blog/Post'
import Tag from '../../components/blog/Tag'
import { getRecentPosts } from '../../utils/files'
import Searchbar from '../../components/blog/Searchbar'
import './blog.css'

export const metadata: Metadata = {
 title: 'Samuele Sciatore',
 description:
  "Home of Samuele Sciatore's portfolio website",
 viewport:
  'initial-scale=1.0, width=device-width',
}

const Index: NextPage = async () => {
 const recentPosts = await getRecentPosts(2)

 return (
  <main className='flex w-full flex-col items-center'>
   <div className='max-w-screen-xl'>
    <div className='flex w-full flex-col items-center'>
     <h1 className='hero-title border-thin w-full !border-t-[1px] text-center'>
      See experiences of developing
     </h1>

     <h2 className='hero-sub border-thin w-full text-center'>
      Well made and useful write-ups, tutorials
      and articles,{' '}
      <strong>
       computer science seasoned with a bit of
       life stories.
      </strong>
     </h2>

     <div className='border-thin flex w-full flex-col items-center'>
      <div className='mt-6 flex w-full max-w-2xl flex-col items-center'>
       <Searchbar />
       <p className='sm-text mt-2'>
        or search popular categories
       </p>

       <div className='mt-4 flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-4'>
        <Tag text='React' />
        <Tag text='NextJS' />
        <Tag text='Javascript' />
        <Tag text='HTML' />
       </div>
      </div>
     </div>
    </div>

    <div className='mt-36 flex w-fit flex-col items-center'>
     <div className='flex flex-wrap items-center justify-center gap-x-3'>
      <h1 className='font-bold text-violet-800'>
       Recently published posts
      </h1>
      <p className='sm-text font-normal'>
       Check either the old!
      </p>
     </div>

     <div className='mt-6 flex flex-col gap-x-6 md:flex-row'>
      {recentPosts?.map((post, index) => {
       return <Post key={index} {...post.meta} />
      })}
     </div>
    </div>
   </div>
  </main>
 )
}

export default Index
