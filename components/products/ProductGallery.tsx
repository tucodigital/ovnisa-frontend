import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Image from "next/image";

import { GaleriaImagenes } from "@/app/types/productoTypes";

const loaderProp = ({ src }: { src: string }) => {
  return src;
};

export default function ProductGallery({
  galeria_imagenes,
}: {
  galeria_imagenes: GaleriaImagenes;
}) {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (galeria_imagenes?.data && galeria_imagenes?.data?.length > 0) {
      setSelectedImage(galeria_imagenes?.data[0]?.attributes?.url);
    }

    console.log("gal img", galeria_imagenes?.data);
  }, []);

  if (galeria_imagenes?.data && galeria_imagenes?.data?.length > 0) {
    return (
      <section className="bg-white">
        <div className="MainProductImage rounded-lg relative w-full hidden xl:block">
          {selectedImage ? (
            <Image
              alt={"main product image"}
              src={selectedImage}
              fill
              className="border rounded-lg"
              style={{
                objectFit: "contain",
              }}
              priority
              loader={loaderProp}
            />
          ) : null}
        </div>
        <div className="py-0 xl:py-6 relative">
          <div className="relative mb-10">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper categorySlider"
              spaceBetween={18}
              slidesPerView={6}
              allowTouchMove={false}
              breakpoints={{
                375: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                414: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                425: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1040: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
              }}
            >
              {galeria_imagenes?.data?.length > 0
                ? galeria_imagenes?.data?.map((img, i) => {
                    return (
                      <SwiperSlide key={"Product Image-" + i}>
                        <div
                          className="relative MainProductImage w-full xl:h-24 xl:w-full cursor-pointer"
                          onClick={() => setSelectedImage(img.attributes.url)}
                        >
                          <Image
                            alt={"Product Image-" + i}
                            src={img.attributes.url}
                            fill
                            className="border rounded-lg"
                            style={{
                              objectFit: "cover",
                            }}
                            loader={loaderProp}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })
                : null}
            </Swiper>
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
}
