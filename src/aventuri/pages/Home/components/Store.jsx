import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import '../../../../assets/styles/global.css'
// import required modules
import { Grid, Pagination } from 'swiper/modules';

import iconStar from '/img/mobile/star.png';
import { TitleComponentsHome } from './Common/TitleComponentsHome';

export const Store = () => {

  
  return (
    <div className="relative w-full h-[100vh] p-0 container">
      <div className='px-5 pt-10 pb-8'>
        <TitleComponentsHome>
          <img src={iconStar} alt="" className=' h-10 md:h-12 inline-block mr-2'/>
          <h1 className="title-p1 inline-block align-bottom">AVENTURI TIENDA</h1>
        </TitleComponentsHome>
      </div>
      <div className=' w-full h-[calc(100%-9rem)] bg-gray-500'>
        <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
              fill: 'row'
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              520: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 50
              }
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
            <SwiperSlide>Slide 10</SwiperSlide>
            <SwiperSlide>Slide 11</SwiperSlide>
            <SwiperSlide>Slide 12</SwiperSlide>
            <SwiperSlide>Slide 13</SwiperSlide>
            <SwiperSlide>Slide 14</SwiperSlide>
            <SwiperSlide>Slide 15</SwiperSlide>
            <SwiperSlide>Slide 16</SwiperSlide>
          </Swiper>
      </div>
    </div>
  )
}