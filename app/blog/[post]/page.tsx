import { Metadata, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Loader from '../../../components/Loader'
import { notFound } from 'next/navigation'
import './Post.css'
import { extractTocHeadings } from '../../../utils/remark-toc-headings'
import TOCInline from '../../../components/blog/TOC'
import {
 getPost,
 getRelatedPosts,
} from '../../../utils/files'
import Tag from '../../../components/blog/Tag'
import { formatDate } from '../../../utils/dates'
import RelatedPost from '../../../components/blog/RelatedPost'

type Props = {
 params: Promise<{ post: string }>
}

export async function generateMetadata({
 params,
}: Props): Promise<Metadata> {
 // read route params
 const { post } = await params

 const { meta } = await import(
  `../../../posts/${post}.mdx`
 )

 return {
  title: meta.title,
  description: meta.description,
  keywords: meta.tags,
  creator: 'Samuele Sciatore',
  robots: {
   index: false,
   follow: true,
   nocache: true,
   googleBot: {
    index: true,
    follow: false,
    noimageindex: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
   },
  },
 }
}

const Index: NextPage = async ({
 params,
}: any) => {
 const { post } = await params

 const PostFile = dynamic(
  () =>
   import(`../../../posts/${post}.mdx`).catch(
    () => notFound()
   ),
  {
   loading: () => <Loader />,
  }
 )

 const { meta } = await import(
  `../../../posts/${post}.mdx`
 )

 const postContent = getPost(post)

 const toc = await extractTocHeadings(postContent)

 const relatedPosts = await getRelatedPosts(
  meta.slug,
  meta.tags
 )

 return (
  <main className='relative flex gap-x-12'>
   {/* First aside - Visible when there is enough space */}
   <aside className='3xl:block order-first hidden w-[284px] xl:shrink-0'>
    <p className='lg-text mb-2 font-bold text-[#4300A8]'>
     Related posts
    </p>
    {relatedPosts?.map((post, index) => (
     <RelatedPost key={index} {...post.meta} />
    ))}
   </aside>

   {/* Article content */}
   <section className='w-full'>
    <div>
     <p className='break-all whitespace-pre-wrap'>
      {meta.author} - {formatDate(meta.date)}
     </p>
     <h1 className='xl2-text -mt-2 break-all whitespace-pre-wrap'>
      {meta.title}
     </h1>
    </div>
    <article className='prose prose-slate md:prose-base xl:prose-lg prose-h1:text-[#4300A8] mt-24 max-w-none'>
     <PostFile />
    </article>
   </section>

   {/* Second aside - Visible on large screens */}
   <aside className='sticky top-24 order-last hidden h-full w-56 shrink-0 md:block'>
    <p className='lg-text mb-2 font-bold text-[#4300A8]'>
     On this page
    </p>
    <TOCInline toc={toc} />
    <hr className='bg-bastille my-4 h-0.5 w-full' />
    <div className='flex flex-row flex-wrap items-center gap-x-6 gap-y-4'>
     {meta?.tags?.map((text, index) => {
      return <Tag key={index} text={text} />
     })}
    </div>
   </aside>
  </main>
 )
}

export default Index
