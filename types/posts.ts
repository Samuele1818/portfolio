type Tag =
 | 'tutorial'
 | 'write-up'
 | 'article'
 | 'react'
 | 'nextjs'
 | 'javascript'
 | 'html'
 | 'css'
 | 'tailwindcss'

type Metadata = {
 slug: string
 title: string
 date: string
 description?: string
 author: string
 tags: Tag[]
}
