import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientBox from "../ClientBox/ClientBox";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Client({id}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const swiperElements = Array.from({ length: 4 }, (_, index) => (
    <SwiperSlide key={index}>
      <ClientBox />
    </SwiperSlide>
  ));

  return (
    <div>
      <div className="bg-[#343a40!important] xl:h-[90vh]" id={id}>
        <div className="flex-col justify-center items-center text-center flex">
          <h1 className="text-3xl font-bold xl:mt-28 mt-24">Client Speak</h1>
          <div className="w-[70px] bg-[#20c997] mt-2 h-[3px]" />
        </div>
        <div className="relative xl:flex justify-center items-center mt-10 xl:ml-20">
          <Swiper
            className={`mt-16 ${isMobile ? 'swiper-mobile' : ''}`}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : 2} 
            loop={true}
            pagination={true}
            navigation={true}
          >
            {swiperElements}
          
          </Swiper>
        </div>
      </div>
    </div>
  );
}
