import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { EffectCube, Pagination, Autoplay, EffectCoverflow, EffectCards } from 'swiper/modules';
export default function Card() {
  return (
   <div className = "cards absolute w-fit " >
  <Swiper   
  effect={'cards'}
  grabCursor={true}
  
          modules={[EffectCards, Pagination, Autoplay]}
          className=' w-40  h-56 max-md:w-36 max-md:h-40 max-sm:w-24 max-sm:h-32  '>
  
   
    <SwiperSlide className='bg-blue-500 rounded-xl w-full h-full  font-bold flex justify-center items-center text-white max-sm:text-sm max-sm:text-center '  style={{display: 'flex', justifyContent: 'center'}}>
      Web development
    </SwiperSlide>
    <SwiperSlide className='bg-yellow-500 rounded-xl w-full h-full  font-bold flex justify-center items-center text-white max-sm:text-sm max-sm:text-center ' style={{display: 'flex', justifyContent: 'center'}}>
    Web Designing
  
    </SwiperSlide>
    <SwiperSlide className='bg-red-500 rounded-xl w-full h-full  font-bold flex justify-center items-center text-white max-sm:text-sm max-sm:text-center' style={{display: 'flex', justifyContent: 'center'}}>
    Maintenance
    </SwiperSlide>
    <SwiperSlide className='bg-green-500 rounded-xl w-full h-full  font-bold flex justify-center items-center text-white max-sm:text-sm max-sm:text-center' style={{display: 'flex', justifyContent: 'center'}}>
      Content Writing
    </SwiperSlide>
    <SwiperSlide className='bg-purple-500 rounded-xl w-full h-full  font-bold flex justify-center items-center text-white max-sm:text-sm max-sm:text-center' style={{display: 'flex', justifyContent: 'center'}}>
      Video Editing
    </SwiperSlide>
    <SwiperSlide  className='bg-green-500 rounded-xl w-full h-full  font-bold flex justify-center items-center text-white max-sm:text-sm max-sm:text-center' style={{display: 'flex', justifyContent: 'center'}}>
     UI & Ux Designing
    </SwiperSlide>
    <SwiperSlide  className='bg-blue-500 rounded-xl w-full h-full  font-bold flex justify-center items-center text-white max-sm:text-sm max-sm:text-center' style={{display: 'flex', justifyContent: 'center'}}>
      E-Commerce
    </SwiperSlide>
  </Swiper>
  
     </div>
      
  )
}

