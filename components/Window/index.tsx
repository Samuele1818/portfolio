import { FC, ReactNode } from 'react'

type Props = {
 children: ReactNode
 className?: string
}
const Window: FC<Props> = ({
 children,
 className,
}) => {
 return (
  <div
   className={`${className} relative flex min-h-[300px] w-fit flex-col rounded-lg border-[1px] border-slate-400 bg-[#1E1E1E] px-6 py-4`}>
   <div className='flex gap-x-4'>
    <span className='h-4 w-4 rounded-full bg-red-500' />
    <span className='h-4 w-4 rounded-full bg-yellow-400' />
    <span className='h-4 w-4 rounded-full bg-green-600' />
   </div>
   {children}
  </div>
 )
}

export default Window
