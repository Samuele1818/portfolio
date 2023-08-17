import { FC } from 'react'
import Image from 'next/image'
import React from '../../public/assets/skills/React.svg'
import Me from '../../public/assets/about-me/me.png'
import './about-me.css'
import Card from '../../components/Card'

/*
  About me section with description of my self, skills and process that I use to build products
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
  <section className='layout flex flex-wrap items-center justify-center gap-x-48 gap-y-24 bg-slate-900 py-48 text-white lg:justify-between'>
   {/* Title and image */}
   <div className='flex-grow text-center lg:w-min lg:text-start'>
    <h1 className='xl2-text'>Call me Sam!</h1>
    <p className='hero-sub !text-light'>
     I’m a full stack developer and software
     engineer that love transform good ideas into
     reality. I’m based in Rome (I was born in the
     colosseum), and I’m in love with ethical
     hacking.
    </p>
   </div>
   <div className='vertical-lines w-64 flex-shrink-0 lg:w-1/3'>
    <Image
     src={Me}
     alt='Photo of me'
     className='h-fit rounded-full lg:rounded-lg'
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
  </section>
 )
}

export default AboutMe
