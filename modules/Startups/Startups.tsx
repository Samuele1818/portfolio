import { FC } from 'react'
import StartupsList from '../../data/startups'
import Startup from '../../components/Startup'


const Startups: FC = () => {
  return (
    <section className='relative isolate w-full overflow-hidden py-2'>
      <div className='absolute -z-10 top-0 bottom-32 right-0 left-0 bg-bastille skew-y-[4deg] origin-top-right'/>
      <div className='hr-align-md bg-cover text-hintOfRed layout flex flex-col layout pt-24 pb-32 bg-bastille text-hintOfRed'>
        <h1 className="xl-text">My startups</h1>
        <h2 className="lg-text mt-4">“Failure is not the opposite of success: it’s part of success.”</h2>
      </div>
      <div className="w-full -mt-16 grid gap-x-12 grid-cols-[repeat(auto-fit,_minmax(300px,_400px))] center gap-y-6 layout">
        {
          StartupsList.map((startup, index) => {
            return (
                <Startup key={index} visibleLink={startup.visibleLink} logo={startup.logo} description={startup.description}
                         link={startup.link}/>
            )
          })
        }
      </div>
    </section>
  )
}

export default Startups
