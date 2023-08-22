import { getPosts } from './files'

const searchPosts = async (key: string) => {
 const searchTerm = key.toLowerCase()

 const filteredPosts: {
  slug: string
  title: string
 }[] = []

 const posts = getPosts()

 for (const post of posts) {
  const { meta } = await import(`/posts/${post}`)

  if (
   meta.title.toLowerCase().includes(searchTerm)
  ) {
   filteredPosts.push({
    slug: meta.slug,
    title: meta.title,
   })
  }
 }

 return filteredPosts
}

export { searchPosts }
