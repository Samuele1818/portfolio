import { Metadata, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Loader from '../../../components/Loader'
import React from '../../../public/assets/skills/React.svg'
import { notFound } from 'next/navigation'
import './Post.css'
import { extractTocHeadings } from '../../../utils/remark-toc-headings'
import TOCInline from '../../../components/blog/TOC'
import { getStaticPost } from '../../../utils/files'
import Tag from '../../../components/blog/Tag'

export const metadata: Metadata = {
 title: 'Samuele Sciatore',
 description: "Samuele Sciatore's blog",
 viewport:
  'initial-scale=1.0, width=device-width',
}

const Index: NextPage = async ({
 params,
}: any) => {
 const { post } = params

 const PostFile = await dynamic(
  () =>
   import(`/posts/${post}.mdx`).catch(() =>
    notFound()
   ),
  {
   loading: () => <Loader />,
  }
 )

 const { meta } = await import(
  `/posts/${post}.mdx`
 )

 const postContent = getStaticPost(post)

 const toc = await extractTocHeadings(postContent)

 return (
  <main className='flex flex-wrap justify-between'>
   <aside className=''>
    <p className='lg-text mb-2 font-bold'>
     On this page
    </p>
    <hr />
   </aside>
   <article className='prose prose-slate lg:prose-xl'>
    <section className='not-prose flex flex-col gap-y-0'>
     <h1>{meta.title}</h1>
     <p>
      {meta.author} - {meta.date}
     </p>
    </section>
    <PostFile />
   </article>
   <aside className='sticky top-24 h-full'>
    <p className='lg-text mb-2 font-bold text-electricViolet'>
     On this page
    </p>
    <TOCInline toc={toc} />
    <hr className='my-4 h-0.5 w-full bg-bastille' />
    <div className='flex flex-row flex-wrap items-center justify-between gap-x-2 gap-y-4'>
     {meta?.tags?.map((text, index) => {
      return <Tag key={index} text={text} />
     })}
    </div>
   </aside>
  </main>
 )
}

export default Index
