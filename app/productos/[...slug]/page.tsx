"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Producto } from "@/app/types/productoTypes";
import { fetchAPI } from "@/lib/api";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

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
          rubros: "*",
          marca: "*",
          tipos_de_productos: "*",
          keywords: "*",
          categorias: "*",
        },
      });
      console.log("product", productRes);
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
          <div className="w-full h-80 mb-4 lg:mb-0 relative rounded shadow">
            {data.attributes.imagen_principal &&
            data.attributes.imagen_principal.data.attributes.url ? (
              <Image
                src={data.attributes.imagen_principal.data.attributes.url}
                alt={
                  data.attributes.imagen_principal.data.attributes
                    .alternativeText
                }
                fill
                style={{
                  objectFit: "contain",
                }}
                loader={loaderProp}
              />
            ) : null}
          </div>
        </div>
        <div>
          <h1 className="font-bold text-gray-800 text-2xl xl:text-4xl mb-4">
            {data.attributes.nombre}
          </h1>
          {data.attributes.descripcion_corta ? (
            <div className="mb-6">
              <ReactMarkdown
                className="font-regular text-gray-800 prose prose-invert"
                children={data.attributes.descripcion_corta}
              />
            </div>
          ) : null}
          <button className="bg-gradient-to-b from-ov-primaryLight to-ov-primary text-white py-2 px-10 rounded-full">
            Contactanos
          </button>
        </div>
      </div>
    </main>
  );
}
