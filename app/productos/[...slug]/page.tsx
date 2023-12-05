"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Producto } from "@/app/types/productoTypes";
import { fetchAPI } from "@/lib/api";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { CardProductosRelacionados } from "@/components/products/CardProductosRelacionados";
import ProductGallery from "@/components/products/ProductGallery";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const loaderProp = ({ src }: { src: string }) => {
  return src;
};

export default function ProductoPage(context) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Producto>();

  useEffect(() => {
    getProductos();
  }, [context.params.slug]);

  const getProductos = async () => {
    setLoading(true);
    try {
      const productRes = await fetchAPI(`/productos/${context.params.slug}`, {
        populate: {
          imagen_principal: "*",
          galeria_imagenes: "*",
          rubros: "*",
          marca: "*",
          tipos_de_productos: "*",
          keywords: "*",
          categorias: "*",
          productos: {
            populate: {
              imagen_principal: "*",
              categorias: "*",
            },
          },
        },
      });
      console.log("product", productRes.data);
      setData(productRes.data);
      setLoading(false);
    } catch (e: any) {
      console.error(e.response);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="PageMainContainer min-h-screen px-4 pt-28 xl:pt-44 pb-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <div className="MainProductImage rounded-lg relative w-full bg-gray-100 animate-pulse"></div>
          <div>
            <div className="h-10 w-full rounded-lg bg-gray-100 animate-pulse mb-4"></div>
            <div className="h-44 w-full rounded-lg bg-gray-100 animate-pulse mb-6"></div>
            <div className="h-10 w-48 rounded-full bg-gray-100 animate-pulse"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="PageMainContainer min-h-screen px-4 pt-28 xl:pt-44 pb-12">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          {data?.attributes?.galeria_imagenes.data &&
          data?.attributes?.galeria_imagenes.data.length > 0 ? (
            <ProductGallery
              galeria_imagenes={data?.attributes?.galeria_imagenes}
            />
          ) : null}
        </div>
        <div>
          <h1 className="font-bold text-gray-800 text-2xl xl:text-4xl mb-4">
            {data?.attributes?.nombre}
          </h1>
          {data?.attributes?.descripcion ? (
            <div className="mb-6">
              <ReactMarkdown
                className="font-regular text-gray-800 prose prose-invert"
                children={data?.attributes?.descripcion}
              />
            </div>
          ) : null}
          <Link href={`/contacto?m=${data?.attributes?.nombre}`}>
            <button className="bg-gradient-to-b from-ov-primaryLight to-ov-primary text-white py-2 px-10 rounded-full">
              Contactanos
            </button>
          </Link>
        </div>
      </div>
      {data?.attributes?.productos?.data.length > 0 ? (
        <div className="mt-10">
          <h2 className="font-bold text-ov-primaryLight text-lg xl:text-3xl pb-3">
            Productos y servicios relacionados
          </h2>
          <p>Conocé nuestros excelentes productos</p>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper categorySlider mt-12"
            spaceBetween={26}
            slidesPerView={3}
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
                slidesPerView: 3,
                spaceBetween: 26,
              },
            }}
          >
            {data?.attributes?.productos?.data.map((prod, i) => (
              <SwiperSlide key={prod.attributes.nombre + i}>
                <CardProductosRelacionados
                  nombre={prod.attributes.nombre}
                  imagen_principal={
                    prod.attributes.imagen_principal.data.attributes.url
                  }
                  slug={prod.attributes.slug}
                  imagen_principal_alt={
                    prod.attributes.imagen_principal.data.attributes.name
                  }
                  categorias={prod.attributes.categorias}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}
    </main>
  );
}
