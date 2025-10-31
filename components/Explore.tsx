import { exploreSections } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Explore = () => {
  return (
    <section className='max-w-[1240px] mx-auto'>
      <h3 className="font-bold text-5xl mb-10 text-center">Explore</h3>
      <div className='grid grid-cols-3 gap-6'>
        {exploreSections.map(item => (
            <div key={item.title}>
                <Image src={item.image} alt={item.title} width={400} height={400} className='object-center object-cover' />
                <h4 className='text-2xl mt-5 font-medium text-black'>{item.title}</h4>
                <p className='text-font text-[14px] leading-tight mt-2'>{item.description}</p>
                <Link className='border-b border-black/50 font-semibold text-lg pb-1 mt-2' href={"/"}>{item.button}</Link>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Explore
