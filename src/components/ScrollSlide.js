import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../assets/css/Scrollslide.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import GalleryData from "./GallaryData";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {GalleryData.map((val)=>{
            return (<>
            <SwiperSlide className="slider-scroll-img"><img src={val.image}  alt="" /></SwiperSlide>
            </>)
        })}
        
        
      </Swiper>
    </>
  );
}
