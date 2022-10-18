import { GetStaticProps, NextPage } from 'next'
import Header from '../components/Header'
import Hero from '../modules/Hero'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const FooterDyn = dynamic(() => import('../components/Footer'))
const ProjectsDyn = dynamic(() => import('../modules/Projects'))
const AboutMeDyn = dynamic(() => import('../modules/AboutMe/AboutMe'))
const StartupsDyn = dynamic(() => import('../modules/Startups'))
const PostsDyn = dynamic(() => import('../modules/Posts'))

const Index: NextPage = () => {
  return (
    <div className="bg-white w-full h-full">
      <Head>
        <title>Samuele Sciatore</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Header/>
      <Hero/>
      <ProjectsDyn/>
      <AboutMeDyn/>
      <PostsDyn/>
      <StartupsDyn/>
      <FooterDyn/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return{
    props: {}
  }
}

export default Index
