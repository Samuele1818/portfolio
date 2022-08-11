import { FC } from 'react'
import StartupsList from '../../data/startups'
import Startup from '../../components/Startup'

const Startups: FC = () => {
  return (
    <section>
      <div className="pt-24 pb-32 bg-bastille text-hintOfRed flex flex-col layout">
        <h1 className="center xl-text">My startups</h1>
        <h2 className="center lg-text mt-8">“Failure is not the opposite of success: it’s part of success.”</h2>
      </div>
      <div className="-mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 layout">
        {
          StartupsList.map((startup, index) => {
            return (
              <div key={index} className="flex-grow-0 w-full md:w-[45%] lg:w-[25%] h-fit bg-white shadow-lg rounded-xl">
                <Startup visibleLink={startup.visibleLink} logo={startup.logo} description={startup.description}
                         link={startup.link}/>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Startups
