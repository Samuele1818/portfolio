import path from 'path'
import fs from 'fs'

const getPost = (name: string) => {
 const jsonDirectory = path.join(
  process.cwd(),
  'posts'
 )

 return fs.readFileSync(
  jsonDirectory + '/' + name + '.mdx',
  'utf8'
 )
}

const getPosts = () => {
 const jsonDirectory = path.join(
  process.cwd(),
  'posts'
 )

 return fs.readdirSync(jsonDirectory)
}

const getRecentPosts = async (
 numberOfPosts?: number
) => {
 numberOfPosts ||= 1
 const posts = await Promise.all(
  getPosts().map(
   (post) => import(`/posts/${post}`)
  )
 )

 if (posts.length < numberOfPosts) return null

 posts.sort((a, b) => {
  const dateA = new Date(a.meta.date).getTime() // Convert to timestamp
  const dateB = new Date(b.meta.date).getTime() // Convert to timestamp
  return dateB - dateA // Compare timestamps
 })

 // Get the desired number of recent posts
 return posts.slice(0, numberOfPosts)
}

const getRelatedPosts = async (
 slug,
 currentTags
) => {
 const posts = await Promise.all(
  getPosts().map(
   (post) => import(`/posts/${post}`)
  )
 )
 // Find articles that share at least one tag with the current article
 const relatedPosts = posts.filter(
  (post) =>
   post.meta.slug !== slug &&
   post.meta.tags.some((tag) =>
    currentTags.includes(tag)
   )
 )

 // Sort related articles by the number of common tags
 relatedPosts.sort(
  (a, b) =>
   b.meta.tags.filter((tag) =>
    currentTags.includes(tag)
   ).length -
   a.meta.tags.filter((tag) =>
    currentTags.includes(tag)
   ).length
 )

 return relatedPosts
}

export {
 getPosts,
 getPost,
 getRecentPosts,
 getRelatedPosts,
}
