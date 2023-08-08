import { Metadata, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Loader from '../../../components/Loader'
import React from '../../../public/assets/skills/React.svg'
import { notFound } from 'next/navigation'
import './Post.css'

export const metadata: Metadata = {
 title: 'Samuele Sciatore',
 description: "Samuele Sciatore's blog",
 viewport:
  'initial-scale=1.0, width=device-width',
}

const Index: NextPage = ({ params }: any) => {
 const { post } = params

 const PostFile = dynamic(
  () =>
   import(`../posts/${post}.mdx`).catch(() =>
    notFound()
   ),
  {
   loading: () => <Loader />,
  }
 )

 return (
  <main>
   <article className='prose prose-slate lg:prose-xl'>
    <PostFile />
   </article>
  </main>
 )
}

export default Index
