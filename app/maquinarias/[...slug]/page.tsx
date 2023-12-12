"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Producto } from "@/app/types/productoTypes";
import { fetchAPI } from "@/lib/api";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import ProductGallery from "@/components/products/ProductGallery";

import Image from "next/image";
import { loaderProp } from "@/lib/utils";

export default function Maquinarias(context) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Producto>();

  useEffect(() => {
    getMaquinarias();
  }, [context.params.slug]);

  const getMaquinarias = async () => {
    setLoading(true);
    try {
      const maquinariasRes = await fetchAPI(
        `/maquinarias/${context.params.slug}`,
        {
          populate: {
            imagen_principal: "*",
          },
        }
      );
      console.log("product", maquinariasRes.data);
      setData(maquinariasRes.data);
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
        <div className="MainProductImage rounded-lg relative w-full">
          {data?.attributes?.imagen_principal &&
          data?.attributes?.imagen_principal?.data?.attributes?.url ? (
            <Image
              alt={data?.attributes?.nombre}
              src={data?.attributes?.imagen_principal?.data?.attributes?.url}
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
          <Link href={`/contacto?m=Maquinaria ${data?.attributes?.nombre}`}>
            <button className="bg-gradient-to-b from-ov-primaryLight to-ov-primary text-white py-2 px-10 rounded-full">
              Contactanos
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
