import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
 return {
  rules: {
   userAgent: '*',
  },
  sitemap:
   'https://samuelesciatore.com/sitemap.xml',
 }
}
