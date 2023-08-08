import matter from 'gray-matter'

const getPostsMetadata = (): Metadata[] => {
 const files = getPosts()
 const markdownPosts = files.filter((file) =>
  file.endsWith('.md')
 )

 // Get gray-matter data from each file.
 return markdownPosts.map((fileName) => {
  const content = getPostContentBySlug(
   fileName.replace('.md', '')
  )

  return {
   slug: fileName.replace('.md', ''),
   title: content.data.title,
   date: content.data.date,
   description: content.data.description,
   imageUrl: content.data.imageUrl,
   sections: content.data.sections,
   author: content.data.author,
   tags: content.data.tags,
  }
 })
}

const getPostContentBySlug: (
 slug: string
) => matter.GrayMatterFile<string> = (
 slug: string
) => {
 const content = getStaticPost(`${slug}.md`)
 return matter(content)
}

const getTwoMoreRecentPost = () => {
 const posts = getPostsMetadata()

 posts.sort((a, b) => {
  return (
   new Date(a.date).getTime() -
   new Date(b.date).getTime()
  )
 })

 return [
  posts[posts.length - 1],
  posts[posts.length - 2],
 ]
}

export {
 getPostContentBySlug,
 getTwoMoreRecentPost,
 getPostsMetadata,
}
