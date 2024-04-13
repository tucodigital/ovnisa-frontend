"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Producto, Datum } from "@/types/productoTypes";
import { fetchAPI } from "@/lib/api";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { CardProductosRelacionados } from "@/components/products/CardProductosRelacionados";
import ProductGallery from "@/components/products/ProductGallery";
import { MainButton } from "@/components/MainButton";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { GaleriaImagenesData, GaleriaImagenes } from "@/types/productoTypes";

import { usePathname } from "next/navigation";
import SeoComponent from "@/components/SEOComponent/SEOComponent";

export default function ProductoPage(context) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Producto>();
  const [imgPrincipal, setImgPrincipal] = useState<GaleriaImagenesData>();
  const [galeriaImagenes, setGaleriaImagenes] = useState<GaleriaImagenes[]>([]);
  const [prodRelacionados, setProdRelacionados] = useState<Datum[]>([]);
  const [servRelacionados, setServRelacionados] = useState<Datum[]>([]);
  const [relGalery, setRelGalery] = useState<Datum[]>([]);
  const [galeria, setgaleria] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    getProductos();
  }, [context.params.slug]);

  useEffect(() => {
    if (imgPrincipal && galeriaImagenes) {
      updateGaleria();
    }
  }, [imgPrincipal, galeriaImagenes]);

  useEffect(() => {
    setRelGalery(prodRelacionados.concat(servRelacionados));
  }, [prodRelacionados.length, servRelacionados.length]);

  useEffect(() => {}, [galeria]);

  const updateGaleria = () => {
    const updatedGaleria =
      galeriaImagenes && galeriaImagenes.length > 0
        ? [imgPrincipal, ...galeriaImagenes]
        : [imgPrincipal];
    setgaleria(updatedGaleria);
  };

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
          servicios: {
            populate: {
              imagen_principal: "*",
            },
          },
        },
      });
      setData(productRes.data);
      if (productRes.data.attributes.imagen_principal.data) {
        setImgPrincipal(productRes.data.attributes.imagen_principal.data);
        if (
          productRes.data.attributes.galeria_imagenes.data &&
          productRes.data.attributes.galeria_imagenes.data.length > 0
        ) {
          setGaleriaImagenes(productRes.data.attributes.galeria_imagenes.data);
        }
      }

      if (productRes.data.attributes.productos.data.length > 0) {
        setProdRelacionados(productRes.data.attributes.productos.data);
      }

      if (productRes.data.attributes.servicios.data.length > 0) {
        setServRelacionados(productRes.data.attributes.servicios.data);
      }

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
      <SeoComponent
        meta_title={`Ovnisa - ${data?.attributes?.nombre}`}
        meta_description={`Página del producto ${data?.attributes?.nombre}`}
        meta_url={`https://www.ovnisa.com/servicios${pathname}`}
      />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 lg:gap-10">
        <div>
          {galeria && galeria.length > 0 ? (
            <ProductGallery galeria_imagenes={galeria} />
          ) : null}
        </div>
        <div>
          <h1 className="font-bold text-gray-800 text-2xl xl:text-4xl mb-4">
            {data?.attributes?.nombre}
          </h1>
          {data?.attributes?.descripcion_corta ? (
            <div className="mb-6">
              <ReactMarkdown
                className="font-regular text-gray-800 prose prose-invert"
                children={data?.attributes?.descripcion_corta}
              />
            </div>
          ) : null}
          {data?.attributes?.descripcion ? (
            <div className="mb-6">
              <ReactMarkdown
                className="font-regular text-gray-800 prose prose-invert"
                children={data?.attributes?.descripcion}
              />
            </div>
          ) : null}
          <Link href={`/contacto?m=Producto ${data?.attributes?.nombre}`}>
            <MainButton paddingX="px-10" paddingY="py-2" name="Contactanos" />
          </Link>
        </div>
      </div>
      {data?.attributes?.link_youtube ? (
        <div className=" max-w-5xl m-auto">
          <div className="bg-gradient-to-b from-ov-primary to-ov-primaryLight videoContainer mt-6 rounded-lg">
            <LiteYouTubeEmbed
              id={data.attributes.link_youtube}
              wrapperClass="yt-main-img"
              playerClass="lty-playbtn"
              title={"Video " + data?.attributes?.nombre}
              iframeClass="yt-main-iframe"
              poster="maxresdefault"
            />
          </div>
        </div>
      ) : null}
      {relGalery.length > 0 ? (
        <div className="mt-10">
          <h2 className="font-bold text-ov-primaryLight text-lg xl:text-3xl pb-3">
            Productos y servicios relacionados
          </h2>
          <p>Conocé nuestros excelentes productos y servicios</p>
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
            {relGalery.map((prod, i) => (
              <SwiperSlide key={prod.attributes.nombre + i}>
                <CardProductosRelacionados
                  nombre={prod.attributes.nombre}
                  imagen_principal={
                    prod?.attributes?.imagen_principal?.data
                      ? prod?.attributes?.imagen_principal?.data?.attributes
                          ?.url
                      : ""
                  }
                  slug={prod.attributes.slug}
                  imagen_principal_alt={
                    prod?.attributes?.imagen_principal?.data
                      ? prod?.attributes?.imagen_principal?.data?.attributes
                          .name
                      : ""
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
