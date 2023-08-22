import { getPosts } from './files'
import { Metadata } from '../types/posts'

const searchPosts = async (key: string) => {
 const searchTerm = key.toLowerCase()

 const filteredPosts: Metadata[] = []

 const posts = getPosts()

 for (const post of posts) {
  const { meta } = await import(`/posts/${post}`)

  if (
   meta.title.toLowerCase().includes(searchTerm)
  ) {
   filteredPosts.push({
    ...meta,
   })
  }
 }

 return filteredPosts
}

export { searchPosts }
