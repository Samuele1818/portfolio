import { FC } from 'react'
import Window from '../../../components/Window'
import MaintainIcon from '../../../public/assets/about-me/process/icons/Maintain.svg'

import CodeBlock from '../../../components/CodeBlock'

const Maintain: FC = () => {
 const jsonCode = `
{
   "name": "sample-app",
   "version": "1.0.0",
   "dependencies": {
      "vulnerable-package": "1.2.3" // Vulnerable version,
      "vulnerable-package": "1.2.4" // Fixed version
   }
}
`

 return (
  <>
   <h1 className='xl-text mt-48 whitespace-pre-line text-center'>
    Keep everything working
   </h1>
   <p className='hero-sub text-center text-slate-400'>
    Maintenance is important, keep the software
    updated and bug free!
   </p>

   <div className='mt-12 flex flex-col items-center gap-x-48 gap-y-12 lg:flex-row'>
    <div className='flex flex-col items-center text-center lg:max-w-md lg:items-start lg:text-start'>
     <div className='w-fit bg-slate-800 px-2 py-2'>
      <MaintainIcon className='h-fit w-16' />
     </div>
     <h2 className='md-text mt-2 font-bold'>
      Monitoring everything
     </h2>
     <p className='sm-text text-slate-400'>
      Now that everything work, bug fixes,
      security patches and new features are
      essentially to keep the software healty.
     </p>
    </div>

    <Window>
     <CodeBlock
      code={jsonCode}
      language='javascript'
     />
    </Window>
   </div>
  </>
 )
}

export default Maintain
