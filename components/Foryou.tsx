'use client';

import { foryouData } from '@/lib/constants'
import { styleScript } from '@/lib/fonts/font'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FiHeart } from 'react-icons/fi';

const Foryou = () => {
  return (
    <section className="my-20 max-w-[1240px] mx-auto">
      <h3 className={`${styleScript.className} text-5xl mb-4 text-center`}>Selected For You</h3>
       <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={4}
        navigation
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {foryouData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className='hover:scale-105 duration-300'>
              <Image
                width={290}
                height={350}
                src={item.image}
                alt={item.name || 'Product'}
                className="w-full h-[400px] object-cover cursor-pointer "
              />
              <div className="p-4 text-center">
                <div className='flex justify-between items-center'>
                    <h4 className="text-lg text-font font-[200]">{item.name}</h4>
                    <FiHeart className='text-secondary hover:text-black cursor-pointer' />
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <p className='text-sm font-semibold  text-black'>Rupees {item.price}</p>
                    <p className='text-[12px]  text-secondary'>Multiple Sizes</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Foryou
