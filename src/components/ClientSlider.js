import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

export default function ClientSlider() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper logo-swiper"
      >
        <SwiperSlide className="client-slide"><img src="https://prium.github.io/Boots5/v1.0.0/assets/img/brands/mailbluster.png" alt="" /></SwiperSlide>
        <SwiperSlide className="client-slide"><img src="https://prium.github.io/Boots5/v1.0.0/assets/img/brands/mailbluster.png" alt="" /></SwiperSlide>
        <SwiperSlide className="client-slide"><img src="https://prium.github.io/Boots5/v1.0.0/assets/img/brands/mailbluster.png" alt="" /></SwiperSlide>
        <SwiperSlide className="client-slide"><img src="https://prium.github.io/Boots5/v1.0.0/assets/img/brands/mailbluster.png" alt="" /></SwiperSlide>
        <SwiperSlide className="client-slide"><img src="https://prium.github.io/Boots5/v1.0.0/assets/img/brands/mailbluster.png" alt="" /></SwiperSlide>
   
      </Swiper>
    </>
  );
}
