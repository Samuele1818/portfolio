import { Metadata, NextPage } from 'next'
import Post from '../../../components/blog/Post'
import Searchbar from '../../../components/blog/Searchbar'
import { getAllPostsLimit } from '../../../utils/files'

export const metadata: Metadata = {
 title: 'Samuele Sciatore',
 description:
  "Home of Samuele Sciatore's portfolio website",
 viewport:
  'initial-scale=1.0, width=device-width',
}

const Index: NextPage = async () => {
 const results = await getAllPostsLimit(10)

 return (
  <div>
   <Searchbar />
   <section className='relative mt-24 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3'>
    {results.length === 0 ? (
     <p className='md-text absolute w-fit place-self-center py-8 text-slate-600'>
      Nothing found... Try again
     </p>
    ) : (
     results.map((result, index) => (
      <Post key={index} {...result.meta} />
     ))
    )}
   </section>
  </div>
 )
}

export default Index
