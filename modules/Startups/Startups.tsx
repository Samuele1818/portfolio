import { FC } from 'react'
import StartupsList from '../../data/startups'
import Startup from '../../components/Startup'
import QuotesWatermark from '../../components/QuotesWatermark'


const Startups: FC = () => {
  return (
    <section className="relative isolate w-full overflow-hidden py-2">
      <div className="absolute -z-10 top-0 bottom-32 right-0 left-0 bg-bastille skew-y-[4deg] origin-top-right"/>
        <div
          className="flex-align-lg hr-align-lg layout pt-24 pb-32 text-hintOfRed">
          <h1 className="xl-text">My startups</h1>
          <h1 className="xl-text relative lg:ml-auto lg:mr-0 lg:max-w-md mt-12 lg:mt-0">
            <QuotesWatermark className="-top-10 -left-4"/>
            If your dreams don’t scare you, they are too small
            <QuotesWatermark className="-bottom-10 right-0 rotate-180"/>
          </h1>
        </div>
      <div
        className="w-full -mt-16 grid gap-x-12 grid-cols-[repeat(auto-fit,_minmax(300px,_400px))] center gap-y-6 layout">
        {
          StartupsList.map((startup, index) => {
            return (
              <Startup key={index} visibleLink={startup.visibleLink} logo={startup.logo}
                       description={startup.description}
                       link={startup.link}/>
            )
          })
        }
      </div>
    </section>
  )
}

export default Startups
