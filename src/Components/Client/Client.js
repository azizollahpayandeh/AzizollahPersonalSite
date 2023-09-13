import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientBox from "../ClientBox/ClientBox";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Client() {
  const swiperElements = Array.from({ length: 4 }, (_, index) => (
    <SwiperSlide key={index}>
      <ClientBox />
    </SwiperSlide>
  ));

  return (
    <div>
      <div className="bg-[#343a40!important] h-[100vh]">
        <div className="flex-col justify-center items-center text-center flex">
          <h1 className="text-3xl font-bold xl:mt-28 mt-24">Client Speak</h1>
          <div className="w-[70px] bg-[#20c997] mt-2 h-[3px]" />
        </div>
        <div className="xl:flex justify-center items-center gap-6 mt-10 ml-11 mr-5">
          <Swiper
            className="mt-16" // تنظیم فاصله بالا
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            navigation={true}
          >
            {swiperElements}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
