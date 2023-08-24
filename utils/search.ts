import { getPosts } from './files'
import { Metadata } from '../types/posts'

const searchPosts = async (
 searchParam: string
) => {
 let searchTerm: string | undefined =
  searchParam.toLowerCase()

 const filteredPosts: Metadata[] = []

 const posts = getPosts()

 // Extract tags from the searchParam
 const tags = searchTerm
  .split(',')
  .map((tag) =>
   decodeURIComponent(tag.trim()).replace(
    /[\[\]]/g,
    ''
   )
  )
  .filter((tag) => tag)

 console.debug(tags)

 // const tags = searchTerm
 //  .split(',')
 //  .map((tag) => tag.trim())
 //  .map(
 //   (tag) =>
 //    decodeURIComponent(tag.replace(/[\[\]]/g, '')) // Decode URL-encoded tags
 //  )
 //  .filter((tag) => tag)

 if (tags.length > 0) searchTerm = undefined

 for (const post of posts) {
  const { meta } = await import(`/posts/${post}`)

  const postTags = meta.tags || []

  const normalizedTags = postTags
   .map((tag) => tag.toLowerCase())
   .map((tag) =>
    tag.replace(/[\[\]]/g, '').split(',')
   ) // Extract and split tags

  const flatTags = normalizedTags.reduce(
   (acc, val) => acc.concat(val),
   []
  )

  if (
   (searchTerm &&
    meta.title
     .toLowerCase()
     .includes(searchTerm)) ||
   (tags &&
    flatTags.some((tag) =>
     tags.includes(tag.toLowerCase())
    ))
  ) {
   console.debug({ meta })
   filteredPosts.push({
    ...meta,
   })
  }
 }

 return filteredPosts
}
export { searchPosts }
