import React from "react";
import chair8 from "/images/chair8.webp";
import chair7 from "/images/chair7.avif";
import chair9 from "/images/chair9.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.min.css";

const Card = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src={chair7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={chair7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={chair7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={chair7} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Card;
