import { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../modules/Hero'
import Projects from '../modules/Projects'
import Posts from '../modules/Posts'
import AboutMe from '../modules/AboutMe/AboutMe'
import Startups from '../modules/Startups'

const Index: NextPage = () => {
  return (
    <div className="bg-white w-full h-full">
      <Header/>
      <Hero />
      <Projects />
      <AboutMe />
      <Posts />
      <Startups/>
      <Footer/>
    </div>
  )
}

export default Index
