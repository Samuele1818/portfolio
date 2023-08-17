import { Metadata, NextPage } from 'next'
import React from '../public/assets/skills/React.svg'
import dynamic from 'next/dynamic'
import Loader from '../components/Loader'

// Set metadata of the page
export const metadata: Metadata = {
 title: 'Samuele Sciatore',
 description:
  "Home of Samuele Sciatore's portfolio website",
 viewport:
  'initial-scale=1.0, width=device-width',
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
 const DynamicHero = dynamic(
  () => import('../modules/Hero'),
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
   <DynamicHero />
   <DynamicProjects />
   <DynamicAboutMe />
   {/*<DynamicFooter />*/}
  </div>
 )
}

export default Index
