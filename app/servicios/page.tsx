"use client";

import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";
import { Servicio } from "../../types/serviciosTypes";
import { ServicioView } from "@/components/Servicios/ServicioView";

export default function Servicios() {
  const [servicios, setServicios] = useState([]);
  const [selectedServ, setSelectedServ] = useState("");
  const [filteredServicio, setFilteredServicio] = useState<Servicio>();

  useEffect(() => {
    getServicios();
  }, []);

  useEffect(() => {
    filterServicio(selectedServ);
  }, [selectedServ]);

  const filterServicio = (slug: string) => {
    const result = servicios.filter((serv) => serv.attributes.slug === slug);
    console.log("filtered servicio", result[0]);
    setFilteredServicio(result[0]);
  };

  const getServicios = async () => {
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
      console.log("servicios: ", serviciosRes);
      setServicios(serviciosRes.data);
      setSelectedServ(serviciosRes.data[0].attributes.slug);
    } catch (e: any) {
      console.error(e.response);
    }
  };

  return (
    <main className="PageMainContainer min-h-screen px-4 pt-28 xl:pt-44 pb-12">
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
            imagen_principal={filteredServicio?.attributes?.imagen_principal?.data?.attributes?.url}
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
