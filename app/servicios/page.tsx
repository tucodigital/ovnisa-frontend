"use client";

import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";
import { Servicio } from "../types/serviciosTypes";

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
    console.log("filtered servicio", result);
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
    <main className="PageMainContainer px-4 py-12 xl:px-16">
      <div className="xl:grid xl:grid-cols-12 gap-8">
        <div className="xl:col-span-2 border border-gray-200 rounded-lg p-4">
          {servicios && servicios.length > 0
            ? servicios.map((s) => (
                <div
                  key={s.id}
                  onClick={() => setSelectedServ(s.attributes.slug)}
                >
                  {s.attributes.nombre}
                </div>
              ))
            : null}
        </div>
        <div className="xl:col-span-9">
          <h1>{filteredServicio?.attributes?.nombre}</h1>
        </div>
      </div>
    </main>
  );
}
