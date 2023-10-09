"use client";

import React, { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";
import { useSearchParams } from "next/navigation";

import { Busqueda } from "@/components/products/filtros/Busqueda";
import { Categorias } from "@/components/products/filtros/Categorias";
import { TipoProductos } from "@/components/products/filtros/TipoProductos";

export default function Productos() {
  const searchParams = useSearchParams();
  const search = searchParams.get("s");
  const cat = searchParams.get("categoria");
  const tipo = searchParams.get("tipoProducto");

  const [productos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [tipoProductos, setTipoProductos] = useState([]);
  const [mainCatSubTipo, setMainCatSubTipo] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCarreras();
  }, [searchParams]);

  useEffect(() => {
    getCategories();
    getTipoProductos();
  }, []);

  useEffect(() => {
    getTipoProductos();
  }, [cat]);

  const getCategories = async () => {
    try {
      const catRes = await fetchAPI("/categorias", {
        populate: {
          tipos_de_productos: "*",
        },
      });
      console.log("categorias: ", catRes);
      setCategorias(catRes.data)
    } catch (e: any) {
      console.error(e.response);
    }
  };

  const getTipoProductos = async () => {
    try {
      const tipoProdRes = await fetchAPI("/tipos-de-productos");
      console.log("tipos de productos: ", tipoProdRes);
      setTipoProductos(tipoProdRes.data);
    } catch (e: any) {
      console.error(e.response);
    }
  };


  const getCarreras = async () => {
    setLoading(true);
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
        setProdutos(productRes.data);
        setLoading(false);
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
        setProdutos(productRes.data);
        setLoading(false);
      }
    } catch (e: any) {
      console.error(e.response);
      setProdutos([]);
      setLoading(false);
    }
  };

  return (
    <main className="PageMainContainer px-4 py-12 xl:px-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Busqueda />
          <Categorias selected={cat} categorias={categorias} />
          <TipoProductos selected={tipo} tipoProductos={tipoProductos}/>
        </div>
        <div className="col-span-9">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <div>
              <p className="text-xs mb-6">Productos:</p>
              {productos && productos.length > 0
                ? productos.map((prod: any) => (
                    <div>
                      <p>{prod.attributes.nombre}</p>
                    </div>
                  ))
                : null}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
