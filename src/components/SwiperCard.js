import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../assets/css/style.css";

// import required modules
import { EffectCards } from "swiper";
import Images from "./ImgImport";

export default function SwiperCard() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper "
      >
        <SwiperSlide className="Swiper-Card-1">
        <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1029.jpg" alt="" className="swiper-slider-profile" />
        <h6 className="text-decee">Ram Kumar</h6>
        <p className="disination">Web Developer</p>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Card-1">
        <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1029.jpg" alt="" className="swiper-slider-profile" />
        <h6 className="text-decee">Ram Kumar</h6>
        <p className="disination">Web Developer</p>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Card-1">
        <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1029.jpg" alt="" className="swiper-slider-profile" />
        <h6 className="text-decee">Ram Kumar</h6>
        <p className="disination">Web Developer</p>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Card-1">
        <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1029.jpg" alt="" className="swiper-slider-profile" />
        <h6 className="text-decee">Ram Kumar</h6>
        <p className="disination">Web Developer</p>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Card-1">
        <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1029.jpg" alt="" className="swiper-slider-profile" />
        <h6 className="text-decee">Ram Kumar</h6>
        <p className="disination">Web Developer</p>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Card-1">
        <img src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1029.jpg" alt="" className="swiper-slider-profile" />
        <h6 className="text-decee">Ram Kumar</h6>
        <p className="disination">Web Developer</p>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}