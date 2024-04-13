"use client";

import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";
import { Servicio } from "../../types/serviciosTypes";
import { ServicioView } from "@/components/Servicios/ServicioView";
import SeoComponent from "@/components/SEOComponent/SEOComponent";

export default function Servicios() {
  const [servicios, setServicios] = useState([]);
  const [selectedServ, setSelectedServ] = useState("");
  const [filteredServicio, setFilteredServicio] = useState<Servicio>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getServicios();
  }, []);

  useEffect(() => {
    filterServicio(selectedServ);
  }, [selectedServ]);

  const filterServicio = (slug: string) => {
    const result = servicios.filter((serv) => serv.attributes.slug === slug);
    /* console.log("filtered servicio", result[0]); */
    setFilteredServicio(result[0]);
  };

  const getServicios = async () => {
    setLoading(true);
    try {
      const serviciosRes = await fetchAPI("/servicios", {
        populate: {
          keywords: "*",
          imagen_principal: "*",
          galeria_imagenes: "*",
          maquinarias: {
            populate: {
              imagen_principal: "*",
            },
          },
        },
      });
      /* console.log("servicios: ", serviciosRes); */
      setServicios(serviciosRes.data);
      setSelectedServ(serviciosRes.data[0].attributes.slug);
      setLoading(false);
    } catch (e: any) {
      console.error(e.response);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="PageMainContainer min-h-screen px-4 pt-28 xl:pt-44 pb-12">
        <div className="xl:grid xl:grid-cols-12 gap-8">
          <div className="xl:col-span-2 rounded-lg p-4">
            <h2 className="font-bold text-blue-600 text-lg xl:text-2xl px-2 pb-4">
              Servicio
            </h2>
            <div className="h-8 w-full rounded-lg bg-gray-100 animate-pulse mb-2"></div>
            <div className="h-8 w-full rounded-lg bg-gray-100 animate-pulse mb-2"></div>
            <div className="h-8 w-full rounded-lg bg-gray-100 animate-pulse mb-2"></div>
            <div className="h-8 w-full rounded-lg bg-gray-100 animate-pulse mb-2"></div>
          </div>
          <div className="xl:col-span-9">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
              <div className="MainProductImage rounded-lg relative w-full bg-gray-100 animate-pulse"></div>
              <div>
                <div className="h-10 w-full rounded-lg bg-gray-100 animate-pulse mb-4"></div>
                <div className="h-44 w-full rounded-lg bg-gray-100 animate-pulse mb-6"></div>
                <div className="h-10 w-48 rounded-full bg-gray-100 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const SEO_SERVICIOS_CONSTANTS = {
    meta_title: 'Ovnisa - Servicios',
    meta_url: 'https://www.ovnisa.com/servicios',
  };

  return (
    <main className="PageMainContainer min-h-screen px-4 pt-28 xl:pt-44 pb-12">
      <SeoComponent {...SEO_SERVICIOS_CONSTANTS} />
      <div className="xl:grid xl:grid-cols-12 gap-8">
        <div className="xl:col-span-2 rounded-lg p-4 divide-y divide-slate-200">
          <h2 className="font-bold text-blue-600 text-lg xl:text-2xl px-2 pb-4">
            Servicio
          </h2>
          {servicios && servicios.length > 0
            ? servicios.map((s) => (
                <div
                  key={s.id}
                  className="font-medium text-gray-500 p-2 hover:text-gray-800 duration-300 transition cursor-pointer"
                  onClick={() => setSelectedServ(s.attributes.slug)}
                >
                  {s.attributes.nombre}
                </div>
              ))
            : null}
        </div>
        <div className="xl:col-span-9">
          <ServicioView
            nombre={filteredServicio?.attributes?.nombre}
            galeria_imagenes={filteredServicio?.attributes?.galeria_imagenes}
            imagen_principal={
              filteredServicio?.attributes?.imagen_principal?.data?.attributes
                ?.url
            }
            keywords={filteredServicio?.attributes?.keywords}
            maquinarias={filteredServicio?.attributes?.maquinarias}
            descripcion={filteredServicio?.attributes?.descripcion}
            descripcion_corta={filteredServicio?.attributes?.descripcion_corta}
          />
        </div>
      </div>
    </main>
  );
}
