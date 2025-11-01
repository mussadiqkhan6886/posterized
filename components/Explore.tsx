import { exploreSections } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Explore = () => {
  return (
    <section className='max-w-[1240px] mx-auto my-10'>
      <h3 className="font-bold text-4xl md:text-5xl mb-6 md:mb-10 text-center">Explore</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 '>
        {exploreSections.map(item => (
            <div key={item.title} className='max-w-[400px]'>
                <Image src={item.image} alt={item.title} width={400} height={400} className='object-center object-cover cursor-pointer hover:saturate-100 md:saturate-50 duration-200 h-[400px] md:h-[450px]' />
                <h4 className='text-2xl mt-5 font-medium text-black'>{item.title}</h4>
                <p className='text-font text-[14px] leading-tight mt-2 pr-4'>{item.description}</p>
                <Link className='border-b border-black/50 font-semibold text-lg pb-1 mt-4' href={"/"}>{item.button}</Link>
            </div>
        ))}
      </div>
      <div className='relative my-10'>
        <Image src={"/custom.jpg"} alt='custom image' width={1000} height={1000} className='w-full h-full object-center object-cover hover:brightness-75 duration-300 brightness-90' />
        <div className='absolute bottom-5 md:bottom-10 text-white left-5 md:left-10'>
            <h4 className='text-3xl md:text-5xl font-bold'>Design Your Own</h4>
            <p className='text-sm md:text-base font-medium my-2 max-w-xl tracking-tight pr-4'>With our visualization tool, you can experiment endlessly with colors, sizes and layouts until you have designed the art of your dreams</p>
            <Link href='/' className='border-b border-white pb-1 font-semibold text-base md:text-lg' >Try Now</Link>
        </div>
      </div>
    </section>
  )
}

export default Explore
