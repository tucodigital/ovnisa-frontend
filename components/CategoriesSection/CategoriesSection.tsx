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
    <div className=" bg-white py-20 px-56 flex gap-10 flex-col w-full">
      <div>
        <h2 className="text-ov-primaryLight font-bold text-4xl mb-2">
          {title}
        </h2>
        <p className="text-lg">{subtitle}</p>
      </div>
      {categorias.data.length > 0 ? (
        <Swiper
          id="home"
          /* navigation
          modules={[Navigation]} */
          className="categories-swiper w-full"
          slidesPerView={3}
          spaceBetween={20}
        >
          {categorias.data.map((categoria, index) => (
            <SwiperSlide key={categoria?.id}>
              <Link href={`/categorias/${categoria?.attributes?.slug}`}>
                <div className="w-auto h-64 flex justify-center">
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
      ) : null}
    </div>
  );
};
