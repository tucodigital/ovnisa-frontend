"use client";

import React, { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";
import { useSearchParams } from "next/navigation";

import { Busqueda } from "@/components/products/filtros/Busqueda";
import { Categorias } from "@/components/products/filtros/Categorias";
import { TipoProductos } from "@/components/products/filtros/TipoProductos";
import { Marcas } from "@/components/products/filtros/Marcas";
import { Rubros } from "@/components/products/filtros/Rubros";

export default function Productos() {
  const searchParams = useSearchParams();
  const search = searchParams.get("s");
  const cat = searchParams.get("categoria");
  const tipo = searchParams.get("tipoProducto");
  const marca = searchParams.get("marca");
  const rubro = searchParams.get("rubro");

  const [productos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [tipoProductos, setTipoProductos] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [rubros, setRubros] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductos();
  }, [searchParams]);

  useEffect(() => {
    getCategories();
    getTipoProductos();
    getMarcas();
    getRubros();
  }, []);

  useEffect(() => {
    getCatSubtipos();
  }, [cat]);

  const getCategories = async () => {
    try {
      const catRes = await fetchAPI("/categorias", {
        populate: {
          tipos_de_productos: "*",
        },
      });
      console.log("categorias: ", catRes);
      setCategorias(catRes.data);
    } catch (e: any) {
      console.error(e.response);
    }
  };

  const getRubros = async () => {
    try {
      const rubrosRes = await fetchAPI("/rubros");
      console.log("rubros: ", rubrosRes);
      setRubros(rubrosRes.data);
    } catch (e: any) {
      console.error(e.response);
    }
  };

  const getMarcas = async () => {
    try {
      const marcasRes = await fetchAPI("/marcas");
      console.log("marcas: ", marcasRes);
      setMarcas(marcasRes.data);
    } catch (e: any) {
      console.error(e.response);
    }
  };

  const getCatSubtipos = () => {
    if (cat) {
      categorias.map((categoria: any) => {
        if (cat === categoria.attributes.slug) {
          if (
            categoria.attributes.tipos_de_productos.data &&
            categoria.attributes.tipos_de_productos.data.length > 0
          ) {
            console.log(
              "tipos filtrados",
              categoria.attributes.tipos_de_productos.data
            );
            setTipoProductos(categoria.attributes.tipos_de_productos.data);
          } else {
            getTipoProductos();
          }
        }
      });
    } else {
      getTipoProductos();
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

  const getProductos = async () => {
    setLoading(true);
    try {
      const productRes = await fetchAPI("/productos", {
        filters: {
          $or: [
            {
              nombre: {
                $containsi: search,
              },
            },
            {
              descripcion: {
                $containsi: search,
              },
            },
            {
              descripcion_corta: {
                $containsi: search,
              },
            },
            {
              keywords: {
                $and: [
                  {
                    tag: {
                      $contains: search,
                    },
                  },
                ],
              },
            },
          ],
          $and: [
            {
              categorias: {
                $and: [
                  {
                    slug: {
                      $contains: cat,
                    },
                  },
                ],
              },
            },
            {
              tipos_de_productos: {
                $and: [
                  {
                    slug: {
                      $contains: tipo,
                    },
                  },
                ],
              },
            },
            {
              marca: {
                $and: [
                  {
                    slug: {
                      $contains: marca,
                    },
                  },
                ],
              },
            },
            {
              rubros: {
                $and: [
                  {
                    slug: {
                      $contains: rubro,
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
          marca: "*",
          tipos_de_productos: "*",
          keywords: "*",
          categorias: "*",
        },
      });
      console.log(productRes);
      setProdutos(productRes.data);
      setLoading(false);
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
          <TipoProductos selected={tipo} tipoProductos={tipoProductos} />
          <Marcas selected={marca} marcas={marcas} />
          <Rubros selected={rubro} rubros={rubros} />
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
