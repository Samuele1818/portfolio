import {Metadata, NextPage} from 'next'
import React from '../public/assets/skills/React.svg'
import Hero from '../modules/Hero'
import Header from '../components/Header'
import dynamic from 'next/dynamic'

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
 const DynamicProjects = dynamic(
  () => import('../modules/Projects'),
  {
   loading: () => <p>Loading...</p>, // TODO: Create a more fashion loader
  }
 )

 const DynamicAboutMe = dynamic(
  () => import('../modules/AboutMe'),
  {
   loading: () => <p>Loading...</p>,
  }
 )

 const DynamicFooter = dynamic(
  () => import('../components/Footer'),
  {
   loading: () => <p>Loading...</p>,
  }
 )

 return (
  <div className='bg-white w-full h-full overflow-x-clip'>
   <Header />
   <Hero />
   <DynamicProjects />
   <DynamicAboutMe />
   <DynamicFooter />
  </div>
 )
}

export default Index
