import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import mbanner from "../css/mbanner.module.css";
import bannerDb from "../json/bannerDb.json";
import { Link } from 'react-router-dom';

function Banner (props) {

  return (
    <div id={props.objid} className='h-100'>
      <Swiper
        // install Swiper modules
        modules={[Pagination,Autoplay ]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
          // clickable: true,
          
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
{
  bannerDb.mainBanner.map((value, idx) => {
    return( <SwiperSlide key={ 'sw'+idx } className={ mbanner.item +" "+ value.cls.join(" ") }>
              <div >
                <h2>
                  { value.title[0] }
                </h2>
                <p>
                  { value.title[1] }
                </p>
                {
                  value.type == "a" ?
                  <a href={ value.href[0] } target={ value.href[1]}>바로가기</a> : 
                  <Link to={ value.href[0] }>바로가기</Link>
                }
              </div>
          </SwiperSlide>
    )
  })
}      

      </Swiper>
    </div>
  );
}
export default Banner;