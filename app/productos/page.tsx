"use client";

import React, { useState, useEffect } from "react";
import { fetchAPI } from "../../lib/api";
import { useSearchParams } from "next/navigation";
import { Categorias } from "@/components/products/filtros/Categorias";
import { Busqueda } from "@/components/products/filtros/Busqueda";

export default function Productos() {
  const [searchWord, setSearchWord] = useState("");

  const searchParams = useSearchParams();
  const search = searchParams.get("s");
  const category = searchParams.get("categoria");

  useEffect(() => {
    getProductos();
  }, [searchWord]);

  useEffect(() => {
    getProductos();
    console.log(search);
  }, [searchParams]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const catRes = await fetchAPI("/categorias", {
        populate: {
          tipos_de_productos: "*",
        },
      });
      console.log(catRes);
    } catch (e: any) {
      console.error(e.response);
    }
  };

  const getProductos = async () => {
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
            ],
            $and: [
              {
                categorias: {
                  $or: [
                    {
                      slug: {
                        $contains: category,
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
            categorias: "*",
            marca: "*",
            rubros: "*",
            tipo_de_productos: "*"
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
                    $contains: category,
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
            categorias: "*",
            marca: "*",
            rubros: "*",
            tipo_de_productos: "*"
          },
        });
        console.log(productRes);
      }
    } catch (e: any) {
      console.error(e.response);
    }
  };

  return (
    <div className="mt-16">
      <div className="PageMainContainer mx-auto px-4 xl:px-16 py-6">
        <div className="mb-4">
        <Busqueda />
        </div>
        <Categorias selected={"test"} />
      </div>
    </div>
  );
}
