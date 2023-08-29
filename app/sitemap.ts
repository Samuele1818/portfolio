import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
 return [
  {
   url: 'https://www.samuelesciatore.com/',
   lastModified: '2023-08-29T16:12:10+00:00',
   priority: 1,
  },
  {
   url: 'https://www.samuelesciatore.com/blog',
   lastModified: '2023-08-29T16:12:10+00:00',
   priority: 0.9,
  },
  {
   url: 'https://www.samuelesciatore.com/blog/super-scraper',
   lastModified: '2023-08-29T16:12:10+00:00',
   priority: 0.64,
  },
 ]
}
