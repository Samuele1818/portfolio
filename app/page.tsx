import {Metadata, NextPage} from 'next'
import AboutMe from '../modules/AboutMe/AboutMe'
import Footer from '../components/Footer/Footer'
import Hero from '../modules/Hero/Hero'
import Projects from '../modules/Projects/Projects'
import Header from '../components/Header/Header'
import React from '../public/assets/skills/React.svg'

// Set metadata of the page
export const metadata: Metadata = {
 title: 'Samuele Sciatore',
 description:
  "Home of Samuele Sciatore's portfolio website",
 viewport:
  'initial-scale=1.0, width=device-width',
}

const Index: NextPage = () => {
 return (
  <div className='bg-white w-full h-full overflow-x-clip'>
   <Header />
   <Hero />
   <Projects />
   <AboutMe />
   {/*<PostsDyn/>*/}
   {/*<Startups/>*/}
   <Footer />
  </div>
 )
}

export default Index
