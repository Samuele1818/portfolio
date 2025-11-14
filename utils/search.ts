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

 const finalSearchParam =
  tags.length > 0 ? tags.join(', ') : searchTerm

 for (const post of posts) {
  const { meta } = await import(
   `../posts/${post}`
  )

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
   (finalSearchParam &&
    meta.title
     .toLowerCase()
     .includes(finalSearchParam)) ||
   (tags &&
    flatTags.some((tag) =>
     tags.includes(tag.toLowerCase())
    ))
  ) {
   filteredPosts.push({
    ...meta,
   })
  }
 }

 return filteredPosts
}
export { searchPosts }
