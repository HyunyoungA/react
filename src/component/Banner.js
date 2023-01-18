import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

function Banner (props) {
  return (
    <div id={props.objid} className='h-100'>
      <Swiper
        // install Swiper modules
        modules={[Pagination,Autoplay ]}
        loop={true}
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
          // clickable: true,
          
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='d-flex flex-column
        justify-content-center align-items-center'
        style={ { height : '800px'} }>Slide 1</SwiperSlide>
         <SwiperSlide className='d-flex flex-column
        justify-content-center align-items-center'
        style={ { height : '800px'} }>Slide 1</SwiperSlide>
         <SwiperSlide className='d-flex flex-column
        justify-content-center align-items-center'
        style={ { height : '800px'} }>Slide 1</SwiperSlide>

       

      </Swiper>
    </div>
  );
}
export default Banner;