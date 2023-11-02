import React, { useEffect } from "react";
import ClientBox from "../ClientBox/ClientBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Client({ id }) {

  const isMobileState = atom({
    key: "isMobileState",
    default: false,
  });

  const [isMobile, setIsMobile] = useRecoilState(isMobileState)



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  const clientData = [
    { name: "Dennis Jacques", img: "./images/client-sm-1.jpg", country: "User from USA", dec: "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry." },
    { name: "Jay Shah", img: "./images/client-sm-2.jpg", country: "Founder at Icomatic Pvt Ltd", dec: "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure." },
    { name: "Patrick Cary", img: "./images/client-sm-3.jpg", country: "Freelancer from USA", dec: "I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure." },
    { name: "Chris Tom", img: "./images/client-sm-4.jpg", country: "User from UK", dec: "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry." },
  ];
  
  const swiperElements = clientData.map((clientInfo, index) => (
    <SwiperSlide key={index}>
      <ClientBox clientInfo={clientInfo} />
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







