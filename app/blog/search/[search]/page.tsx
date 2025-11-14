import { Metadata, NextPage } from 'next'
import { searchPosts } from '../../../../utils/search'
import Post from '../../../../components/blog/Post'
import Searchbar from '../../../../components/blog/Searchbar'

export const metadata: Metadata = {
 title: 'Samuele Sciatore',
 description:
  "Home of Samuele Sciatore's portfolio website",
 viewport:
  'initial-scale=1.0, width=device-width',
}

const Index: NextPage = async ({
 params,
}: any) => {
 const { search } = await params

 const results = await searchPosts(
  decodeURIComponent(search)
 )

 return (
  <div>
   <Searchbar value={search} />
   <section className='relative mt-24 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3'>
    {results.length === 0 ? (
     <p className='md-text absolute w-fit place-self-center py-8 text-slate-600'>
      Nothing found... Try again
     </p>
    ) : (
     results.map((result, index) => (
      <Post key={index} {...result} />
     ))
    )}
   </section>
  </div>
 )
}

export default Index
