import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import HomeSlide from "./HomeSlide";
import { SliderContent } from "../../types/components/HeaderTypes";

export const HomeHeader = ({slides} : SliderContent) => {
  return (
    <div className="max-w-[1920px] m-auto relative">
      {slides && slides.length > 0 ? (
        <Swiper
          id="home"
          pagination={{
            dynamicBullets: false,
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <HomeSlide
                id={slide.id}
                title={slide.title}
                image_desktop={slide.image_desktop}
                image_mobile={slide.image_mobile}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div>
  );
}
