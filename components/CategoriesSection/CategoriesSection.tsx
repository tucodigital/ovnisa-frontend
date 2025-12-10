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
  return (
    <div className=" bg-white py-10 lg:py-20 PageMainContainer px-4">
      <div className="mb-4 lg:mb-0 lg:flex lg:justify-between lg:items-end gap-6">
        <div>
          <h2 className="text-gray-500 text-sm mb-1">{title}</h2>
          <p className="text-2xl prose:text-2xl text-black font-bold mb-4">
            {subtitle}
          </p>
        </div>
        <Link href="/categorias">
          <MainButton paddingY="py-2" paddingX="px-8" name="Categorias" />
        </Link>
      </div>
      {categorias.data.length > 0 ? (
        <div>
          <Swiper
            id="home"
            className="categories-swiper w-full hidden lg:block"
            slidesPerView={4}
            spaceBetween={20}
          >
            {categorias.data.map((categoria: any) => (
              <SwiperSlide key={categoria?.id}>
                <Link
                  href={`/productos?categoria=${categoria?.attributes?.slug}`}
                >
                  <div className="w-full h-72 flex justify-center relative rounded-lg mb-2">
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
                        className="object-cover rounded-lg"
                        loader={loaderProp}
                      />
                    ) : (
                      <div className="bg-ov-primaryLight rounded-lg w-full h-full flex items-center justify-center">
                        <Image
                          className="w-48 h-20 rounded-lg"
                          src={`/assets/main-menu/ruido-ovnisa-nav-logo-desktop.svg`}
                          alt="Ovnisa Logo Desktop"
                          loader={loaderProp}
                          width={0}
                          height={0}
                        />
                      </div>
                    )}
                  </div>
                  <p className="font-bold text-lg text-black">
                    {categoria?.attributes?.nombre}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile */}
          <Swiper
            id="home"
            className="categories-swiper w-full block lg:hidden"
            slidesPerView={1.5}
            spaceBetween={10}
          >
            {categorias.data.map((categoria, index) => (
              <SwiperSlide key={categoria?.id}>
                <Link
                  href={`/productos?categoria=${categoria?.attributes?.slug}`}
                >
                  <div className="w-auto h-40 flex justify-center rounded-lg mb-2 relative">
                    {categoria?.attributes?.image?.data ? (
                      <Image
                        alt={
                          categoria?.attributes?.image?.data?.attributes?.name
                        }
                        src={
                          categoria?.attributes?.image?.data?.attributes?.url
                        }
                        fill
                        className="rounded-lg"
                        objectFit="cover"
                        priority
                        loader={loaderProp}
                      />
                    ) : (
                      <div className="bg-ov-primaryLight w-full h-full flex items-center justify-center rounded-lg">
                        <Image
                          className="w-48 h-20 rounded-lg"
                          src={`/assets/main-menu/ruido-ovnisa-nav-logo-desktop.svg`}
                          alt="Ovnisa Logo Desktop"
                          loader={loaderProp}
                          width={0}
                          height={0}
                        />
                      </div>
                    )}
                  </div>
                  <p className="font-bold text-sm text-black">
                    {categoria?.attributes?.nombre}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}
    </div>
  );
};
