import { FC } from 'react'
import Image from 'next/image'
import Me from '../../public/assets/about-me/me.png'
import AI from '../../public/assets/blog/ai.png'
import ProcessPost from '../../public/assets/blog/process.png'
import './about-me.css'
import Card from '../../components/Card'
import CTA from '../../components/CTA'
import SkillsSlider from '../../components/SkillsSlider'
import Begin from './process/begin'
import Work from './process/work'
import Maintain from './process/maintain'

/*
  About me section with description of my self, technologies and process that I use to build products
*/
const AboutMe: FC = () => {
 const cardsContent = [
  {
   title: 'Culture Crushes',
   content:
    'One, No One and One Hundred Thousand \nWhite Nights (Dostoevskij) \nThe Prince (Machiavelli)',
  },
  {
   title: 'What’s next',
   content:
    'EJPT certification \nOSCP certification \nSoftware engineer degree',
  },
  {
   title: 'Powered by',
   content:
    'Coding \nLearning \nCreating \nHacking \nGYM',
  },
 ]

 return (
  <section className='layout flex w-full flex-col gap-y-24 bg-slate-900 py-48 text-white'>
   <div className='flex flex-wrap items-center justify-center gap-x-48 gap-y-24'>
    {/* Title and image */}
    <div className='flex-grow text-center lg:w-min lg:text-start'>
     <h1 className='xl2-text'>Call me Sam!</h1>
     <p className='hero-sub text-slate-400'>
      I’m a full stack developer and software
      engineer that love transform good ideas into
      reality. I’m based in Rome (I was born in
      the colosseum), and I’m in love with ethical
      hacking.
     </p>
    </div>
    <div className='vertical-lines w-64 flex-shrink-0 lg:w-1/3'>
     <Image
      src={Me}
      alt='Photo of me'
      className='ml-auto mr-0 h-fit rounded-full lg:rounded-lg'
     />
    </div>

    {/* Cards */}
    <div className='mt-24 flex w-full flex-col gap-y-24 lg:flex-row lg:items-stretch lg:justify-between lg:gap-x-24'>
     {cardsContent.map((item, index) => (
      <Card
       key={index}
       className='vertical-lines lg:horizontal-lines h-auto w-full'>
       <div className='w-full text-center'>
        <h2 className='xl-text font-bold'>
         {item.title}
        </h2>
        <p className='sm-text mt-2 whitespace-pre-line leading-10 tracking-wide text-slate-300'>
         {item.content}
        </p>
       </div>
      </Card>
     ))}
    </div>
   </div>

   {/* Skills with carousel */}
   <div className='w-full'>
    <div className='mb-12 w-full text-center'>
     <h1 className='xl2-text'>What I offer</h1>
     <p className='hero-sub text-slate-400'>
      My skills are in continuos development, take
      a look at what I can offer for now.
     </p>
    </div>

    <SkillsSlider />
   </div>

   {/* More about me */}
   <Card className='mx-auto flex w-full flex-col items-center justify-center gap-y-24 text-center lg:w-fit lg:flex-row lg:gap-x-24 lg:text-start'>
    <div className=''>
     <h1 className='xl2-text whitespace-pre-line'>
      Want to learn {'\n'}something more{'\n'}{' '}
      about?
     </h1>
     <p className='hero-sub text-slate-400'>
      Visit my blog! You will find cool articles,
      tutorials and write-ups.
     </p>
     <CTA
      className='mt-12'
      text='Visit the blog now!'
      fill='blue'
     />
    </div>
    <div className='relative flex h-full min-h-[300px] w-[500px]'>
     <Image
      src={AI}
      alt='Image of an article that talks about AI'
      className='absolute bottom-12 left-0 h-fit min-w-[220px] max-w-[320px] -rotate-2 rounded-lg shadow-sm shadow-slate-300'
     />
     <Image
      src={ProcessPost}
      alt='Image of an article that talks about how to create a software'
      className='absolute bottom-0 right-0 h-fit min-w-[220px] max-w-[320px] rounded-lg shadow-md shadow-slate-600'
     />
    </div>
   </Card>

   {/* Creation process */}
   <div className='flex flex-col items-center gap-y-12'>
    {/* Section title */}
    <div className='w-full text-center'>
     <h1 className='xl2-text whitespace-pre-line'>
      Trust the process
     </h1>
     <p className='hero-sub text-slate-400'>
      My creating process decomposed in small
      steps
     </p>
    </div>

    {/* Process container */}
    <div className='flex w-full flex-col items-center'>
     <Begin />
     <Work />
     <Maintain />
    </div>
   </div>
  </section>
 )
}

export default AboutMe
