import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import HomeSlide from "./HomeSlide";

interface SliderContent {
  slides: Slide[];
}

export interface Slide {
  id: number;
  title?: string;
  image_desktop: any;
  image_mobile: any;
}

export const HomeHeader = ({slides} : SliderContent) => {
  return (
    <>
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
    </>
  );
}
