import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

interface CategoriesSectionContent {
  /* id: number; */
  title: String;
  subtitle: String;
  categorias: any;
}

const loaderProp = ({ src }: { src: string }) => {
  return src;
};

export const CategoriesSection = ({
  title,
  subtitle,
  categorias,
}: CategoriesSectionContent) => {
  return (
    <div className=" bg-white py-10 lg:py-20 px-10 lg:px-40 flex gap-6 lg:gap-10 flex-col w-full">
      <div>
        <h2 className="text-ov-primaryLight font-bold text-2xl lg:text-4xl mb-2">
          {title}
        </h2>
        <p className="lg:text-lg">{subtitle}</p>
      </div>
      {categorias.data.length > 0 ? (
        <div>
          <Swiper
            id="home"
            /* navigation
          modules={[Navigation]} */
            className="categories-swiper w-full hidden lg:block"
            slidesPerView={3}
            spaceBetween={20}
          >
            {categorias.data.map((categoria, index) => (
              <SwiperSlide key={categoria?.id}>
                <Link
                  href={`/productos?categoria=${categoria?.attributes?.slug}`}
                >
                  <div className="w-auto h-72 flex justify-center">
                    <Image
                      alt={"image_desktop?.data?.attributes?.alternativeText"}
                      src={categoria?.attributes?.image?.data?.attributes?.url}
                      fill
                      /* objectFit='contain' */
                      loader={loaderProp}
                    />
                    <div className="absolute -bottom-8 bg-gradient-to-b from-ov-primaryLight to-ov-primary text-white py-4 px-16 rounded-full">
                      Ver más
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            id="home"
            /* navigation
          modules={[Navigation]} */
            className="categories-swiper w-full block lg:hidden"
            slidesPerView={2.5}
            spaceBetween={10}
          >
            {categorias.data.map((categoria, index) => (
              <SwiperSlide key={categoria?.id}>
                <Link
                  href={`/productos?categoria=${categoria?.attributes?.slug}`}
                >
                  <div className="w-auto h-40 flex justify-center">
                    <Image
                      alt={"image_desktop?.data?.attributes?.alternativeText"}
                      src={categoria?.attributes?.image?.data?.attributes?.url}
                      fill
                      /* objectFit='contain' */
                      loader={loaderProp}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}
    </div>
  );
};
