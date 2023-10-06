"use client";

import React, { useEffect } from "react";
import { fetchAPI } from "@/lib/api";
import { useSearchParams } from "next/navigation";

import { Busqueda } from "@/components/products/filtros/Busqueda";
import { Categorias } from "@/components/products/filtros/Categorias";

export default function Productos() {
  const searchParams = useSearchParams();
  const search = searchParams.get("s");
  const cat = searchParams.get("categoria");
  
  useEffect(() => {
    getCarreras();
  }, [searchParams]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const catRes = await fetchAPI("/categorias");
      console.log(catRes);
    } catch (e: any) {
      console.error(e.response);
    }
  };

  const getCarreras = async () => {
    try {
      if (search) {
        const productRes = await fetchAPI("/productos", {
          filters: {
            $or: [
              {
                nombre: {
                  $contains: search,
                },
              },
              {
                descripcion: {
                  $contains: search,
                },
              },
              {
                descripcion_corta: {
                  $contains: search,
                },
              },
            ],
            $and: [
              {
                categorias: {
                  $or: [
                    {
                      slug: {
                        $contains: cat,
                      },
                    },
                  ],
                },
              },
            ],
          },
          pagination: {
            page: 1,
            pageSize: 10,
          },
          //sort: [`createdAt:${orderFecha}`, `title:${orderAlfabetico}`],
          populate: {
            imagen_principal: "*",
            rubros: "*",
            marcas: "*",
            tipos_de_productos: "*",
            categorias: "*",
          },
        });
        console.log(productRes);
      } else {
        const productRes = await fetchAPI("/productos", {
          //sort: [`createdAt:${orderFecha}`, `title:${orderAlfabetico}`],
          filters: {
            categorias: {
              $or: [
                {
                  slug: {
                    $contains: cat,
                  },
                },
              ],
            },
          },
          pagination: {
            page: 1,
            pageSize: 10,
          },
          populate: {
            imagen_principal: "*",
            rubros: "*",
            marcas: "*",
            tipos_de_productos: "*",
            categorias: "*",
          },
        });
        console.log(productRes);
      }
    } catch (e: any) {
      console.error(e.response);
    }
  };

  return (
    <main className="">
      <Busqueda />
      <Categorias selected={cat} />
      Página de Productos
    </main>
  );
}
