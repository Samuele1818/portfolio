import {Metadata, NextPage} from 'next'
import React from '../public/assets/skills/React.svg'
import Footer from '../components/Footer'
import AboutMe from '../modules/AboutMe'
import Projects from '../modules/Projects'
import Hero from '../modules/Hero'
import Header from '../components/Header'

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
 // TODO: Import modules dynamically to improve performance
 return (
  <div className='bg-white w-full h-full overflow-x-clip'>
   <Header />
   <Hero />
   <Projects />
   <AboutMe />
   <Footer />
  </div>
 )
}

export default Index
