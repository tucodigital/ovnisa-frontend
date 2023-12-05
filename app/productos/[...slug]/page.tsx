"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Producto } from "@/app/types/productoTypes";
import { fetchAPI } from "@/lib/api";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { CardProductosRelacionados } from "@/components/products/CardProductosRelacionados";
import ProductGallery from "@/components/products/ProductGallery";

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

  return (
    <main className="PageMainContainer min-h-screen px-4 pt-44 pb-12">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <ProductGallery
            galeria_imagenes={data?.attributes?.galeria_imagenes}
          />
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
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-6">
            {data?.attributes?.productos?.data.map((prod) => (
              <Fragment key={prod.id}>
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
              </Fragment>
            ))}
          </div>
        </div>
      ) : null}
    </main>
  );
}
