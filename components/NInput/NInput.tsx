import { FC } from 'react'

interface Props {
 label?: string
}

const NInput: FC<Props> = ({ label }) => {
 return (
  <div className='w-full relative'>
   <input
    type='text'
    id='floating_outlined'
    className='block px-2.5 pb-2.5 pt-4 w-full h-full md-text text-bastille bg-transparent border-[1px] border-bastille appearance-none focus:outline-none focus:ring-0 focus:border-electricViolet peer'
    placeholder=' '
   />
   <label
    htmlFor='floating_outlined'
    className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-electricViolet peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>
    {label}
   </label>
  </div>
 )
}

export default NInput
