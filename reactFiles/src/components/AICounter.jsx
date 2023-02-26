import React from 'react'
import MyVideoPlayer from './MyVideoPlayer'
import MyVideoPlayer2 from './MyVideoPlayer2'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';


const AICounter = () => {
  return (
    <section id='aicounter'>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      
      <SwiperSlide>
        <div className="container AISection">
          <div className='Titles'>
            <h3 className='AIName'>Livestream Area</h3>
            {/* <h3 className='CurrTime'><CurrTime/></h3> */}
          </div>

          <div className='PlaceVid'>
            <MyVideoPlayer/>
          </div>

          <h3 className='WarehouseZones'>Zone A</h3>

        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="container AISection2">
          <div className='Titles'>
            <h3 className='AIName'>Livestream Area</h3>
            {/* <h3 className='CurrTime'><CurrTime/></h3> */}
          </div>

          <div className='PlaceVid'>
            <MyVideoPlayer2/>
          </div>

          <h3 className='WarehouseZones'>Zone B</h3>

        </div>
      </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default AICounter