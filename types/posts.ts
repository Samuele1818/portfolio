type Tag =
 | 'react'
 | 'nextjs'
 | 'javascript'
 | 'html'
 | 'css'
 | 'tailwindcss'
 | 'python'

type Metadata = {
 slug: string
 title: string
 date: string
 description?: string
 author: string
 category: 'tutorial' | 'write-up' | 'article'
 tags: Tag[]
}

export type { Metadata, Tag }
