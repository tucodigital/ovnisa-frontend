import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { loaderProp } from "@/lib/utils";
import { CategoriesSectionContent } from "../../types/components/CategoriesSectionTypes";
import { MainButton } from "../MainButton";

export const CategoriesSection = ({
  title,
  subtitle,
  categorias,
}: CategoriesSectionContent) => {
  console.log("categorias ->", categorias);
  return (
    <div className=" bg-white py-10 lg:py-20 px-10 lg:px-28 flex gap-6 lg:gap-10 flex-col w-full">
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
            className="categories-swiper w-full hidden lg:block"
            slidesPerView={3}
            spaceBetween={20}
          >
            {categorias.data.map((categoria: any) => (
              <SwiperSlide key={categoria?.id}>
                <Link
                  href={`/productos?categoria=${categoria?.attributes?.slug}`}
                >
                  <div className="w-auto h-72 flex justify-center">
                    {categoria?.attributes?.image?.data ? (
                      <Image
                        alt={
                          categoria?.attributes?.image?.data?.attributes
                            ?.alternativeText || "Imagen de categoría"
                        }
                        src={
                          categoria?.attributes?.image?.data?.attributes?.url
                        }
                        fill
                        loader={loaderProp}
                      />
                    ) : (
                      <div className="bg-ov-primaryLight rounded w-full h-full flex items-center justify-center">
                        <Image
                          className="w-48 h-20"
                          src={`/assets/main-menu/ruido-ovnisa-nav-logo-desktop.svg`}
                          alt="Ovnisa Logo Desktop"
                          loader={loaderProp}
                          width={0}
                          height={0}
                        />
                      </div>
                    )}
                    <div className="absolute -bottom-8 ">
                      <MainButton
                        paddingX="px-16"
                        paddingY="py-4"
                        name="Ver más"
                      />
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
            slidesPerView={1.5}
            spaceBetween={10}
          >
            {categorias.data.map((categoria, index) => (
              <SwiperSlide key={categoria?.id}>
                <Link
                  href={`/productos?categoria=${categoria?.attributes?.slug}`}
                >
                  <div className="w-auto h-40 flex justify-center">
                    <Image
                      alt={categoria?.attributes?.image?.data?.attributes?.name}
                      src={categoria?.attributes?.image?.data?.attributes?.url}
                      fill
                      objectFit="cover"
                      priority
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
