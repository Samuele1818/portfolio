'use client'
import { FC } from 'react'
import Link from 'next/link'

type Props = {
 opened: boolean
 results
}

const Menu: FC<Props> = ({ opened, results }) => {
 return (
  opened && (
   <section className='absolute z-10 h-fit w-full bg-white'>
    {results?.map((result, index) => (
     <Link key={index} href={result.slug}>
      {result.title}
     </Link>
    ))}
   </section>
  )
 )
}

export default Menu
