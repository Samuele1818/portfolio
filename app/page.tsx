import {Metadata, NextPage} from 'next'
import React from '../public/assets/skills/React.svg'
import Footer from '../components/Footer'

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
   {/*<Header />*/}
   {/*<Hero />*/}
   {/*<Projects />*/}
   {/*<AboutMe />*/}
   {/*<PostsDyn/>*/}
   {/*<Startups/>*/}
   <Footer />
  </div>
 )
}

export default Index
