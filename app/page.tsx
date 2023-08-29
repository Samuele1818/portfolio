import { Metadata, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Loader from '../components/Loader'
import Hero from '../modules/Hero'

// Set metadata of the page
export const metadata: Metadata = {
 title: 'Samuele Sciatore',
 description:
  "Home of Samuele Sciatore's portfolio website",
 viewport:
  'initial-scale=1.0, width=device-width',
 keywords: [
  'portfolio',
  'Samuele Sciatore',
  'Developer',
  'Engineer',
  'Software',
 ],
 creator: 'Samuele Sciatore',
 robots: {
  index: false,
  follow: true,
  nocache: true,
  googleBot: {
   index: true,
   follow: false,
   noimageindex: true,
   'max-video-preview': -1,
   'max-image-preview': 'large',
   'max-snippet': -1,
  },
 },
}

/*
   Render the home page of the site
*/
const Index: NextPage = () => {
 const DynamicHeader = dynamic(
  () => import('../components/Header'),
  {
   loading: () => <Loader />,
  }
 )
 const DynamicProjects = dynamic(
  () => import('../modules/Projects'),
  {
   loading: () => <Loader />,
  }
 )

 const DynamicAboutMe = dynamic(
  () => import('../modules/AboutMe'),
  {
   loading: () => <Loader />,
  }
 )

 const DynamicFooter = dynamic(
  () => import('../components/Footer'),
  {
   loading: () => <Loader />,
  }
 )

 return (
  <div className='h-full w-full overflow-x-clip bg-white'>
   <DynamicHeader />
   <Hero />
   <DynamicProjects />
   <DynamicAboutMe />
   <DynamicFooter />
  </div>
 )
}

export default Index
