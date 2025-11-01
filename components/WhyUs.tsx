'use client';

import { reviews, whyUs } from '@/lib/constants'
import { styleScript } from '@/lib/fonts/font'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiStar } from 'react-icons/fi';
import { delay, motion } from 'framer-motion';

const WhyUs = () => {
    const variant = {
        hidden: {
            y: 100,
            opacity:0
        },
        show: {
            y:0,
            opacity:1
        }
    }
  return (
    <section className="my-20 max-w-[1240px] px-10 mx-auto">
        <h3 className={`text-4xl md:text-5xl mb-8 text-center`}>Why Choose Us</h3>
        <div className='grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1 my-10'>
            {whyUs.map((item, i) => (
                <motion.div variants={variant} whileInView={"show"} initial="hidden"   className='shadow-xl flex items-center flex-col  p-3' key={i}>
                    <item.icon className='text-4xl' />
                    <div>
                        <p className='font-semibold text-lg text-center mb-1'>{item.title}</p>
                        <p className='text-font text-sm text-center'>{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
        <h3 className={`text-5xl my-14 text-center`}>Testimonials</h3>
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
            {reviews.map((item, i) => (
                <SwiperSlide key={i}>
                    <div className='shadow p-3 flex items-center flex-col justify-center'>
                        <div className='flex gap-3'>
                        <p className='font-semibold text-lg'>{item.name}</p>
                        <p className='flex items-center gap-2'>{item.rating} <FiStar className='text-yellow-500' /></p>
                        </div>
                        <div className='text-center mt-2'>
                            <p>{item.review}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )
}

export default WhyUs
