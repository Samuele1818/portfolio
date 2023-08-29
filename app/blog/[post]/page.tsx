import {
 Metadata,
 NextPage,
 ResolvingMetadata,
} from 'next'
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
 params: { post: string }
}

export async function generateMetadata(
 { params }: Props,
 parent: ResolvingMetadata
): Promise<Metadata> {
 // read route params
 const { post } = params

 const { meta } = await import(
  `/posts/${post}.mdx`
 )

 return {
  title: meta.title,
  description: meta.description,
  keywords: meta.tags,
 }
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

 const postContent = getPost(post)

 const toc = await extractTocHeadings(postContent)

 const relatedPosts = await getRelatedPosts(
  meta.slug,
  meta.tags
 )

 return (
  <main className='relative flex gap-x-12'>
   {/* First aside - Visible when there is enough space */}
   <aside className='order-first hidden w-[284px] xl:flex-shrink-0 3xl:block'>
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
     <p className='whitespace-pre-wrap break-all'>
      {meta.author} - {formatDate(meta.date)}
     </p>
     <h1 className='xl2-text -mt-2 whitespace-pre-wrap break-all'>
      {meta.title}
     </h1>
    </div>
    <article className='md:prose-md prose prose-slate mt-24 max-w-none xl:prose-lg prose-h1:text-[#4300A8]'>
     <PostFile />
    </article>
   </section>

   {/* Second aside - Visible on large screens */}
   <aside className='sticky top-24 order-last hidden h-full w-56 flex-shrink-0 md:block'>
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
