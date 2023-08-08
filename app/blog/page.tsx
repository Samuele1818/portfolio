import { Metadata, NextPage } from 'next'
import Post from '../../components/blog/Post'
import Tag from '../../components/blog/Tag'
import AbstractDesktop from '../../public/illustrations/abstract-blog.svg'

export const metadata: Metadata = {
 title: 'Samuele Sciatore',
 description:
  "Home of Samuele Sciatore's portfolio website",
 viewport:
  'initial-scale=1.0, width=device-width',
}

const Index: NextPage = () => {
 return (
  <>
   <div className='flex items-center justify-between overflow-clip md:h-[500px]'>
    <div>
     <h1>Discover beautiful contents!</h1>
     <h2 className='mt-4'>
      Well made and useful write-ups, tutorial and
      articles
     </h2>
    </div>
    <AbstractDesktop
     className='hidden md:block'
     viewBox='0 0 305 204'
    />
   </div>

   <div className='mt-24 flex flex-col justify-between gap-x-12 lg:flex-row'>
    <div className='mt-24 w-fit'>
     <h2 className='font-bold'>
      Recently Published
     </h2>
     <div className='flex flex-col gap-y-12'>
      <Post
       category='tutorial'
       title='Best practices for successful prototypes'
       description='Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.
But then I found a component library based on Tailwind CSS called Flowbite. It comes with the most....'
       author='Samuele Sciatore'
       date='Aug, 7, 2023'
       tags={['React', 'NextJS', 'Javascript']}
      />
     </div>
    </div>
    <div className='mt-24'>
     <h2 className='font-bold'>
      Popular Categories
     </h2>
     <div className='mt-4 flex flex-row flex-wrap items-center gap-x-6 gap-y-4'>
      <Tag text='React' />
      <Tag text='NextJS' />
      <Tag text='Javascript' />
      <Tag text='HTML' />
     </div>
    </div>
   </div>
  </>
 )
}

export default Index
