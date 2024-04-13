"use client";

import React, { Fragment, useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";
import { useSearchParams } from "next/navigation";

import { Busqueda } from "@/components/products/filtros/Busqueda";
import { Categorias } from "@/components/products/filtros/Categorias";
import { TipoProductos } from "@/components/products/filtros/TipoProductos";
import { Marcas } from "@/components/products/filtros/Marcas";
import { Rubros } from "@/components/products/filtros/Rubros";

import { CardProductos } from "@/components/products/CardProductos";

import Pagination from "@/components/Pagination/Pagination";
import { LoadingProductsSkeleton } from "@/components/products/LoadingProductsSkeleton";
import SeoComponent from "@/components/SEOComponent/SEOComponent";

export default function Productos() {
  const searchParams = useSearchParams();
  const search = searchParams.get("s");
  const cat = searchParams.get("categoria");
  const tipo = searchParams.get("tipoProducto");
  const marca = searchParams.get("marca");
  const rubro = searchParams.get("rubro");
  const urlPage = searchParams.get("p");

  const [productos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [tipoProductos, setTipoProductos] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [rubros, setRubros] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  let PageSize = 12;

  useEffect(() => {
    if (urlPage) {
      setCurrentPage(parseInt(urlPage));
    }
  }, [urlPage]);

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
      /* console.log("categorias: ", catRes); */
      setCategorias(catRes.data);
    } catch (e: any) {
      console.error(e.response);
    }
  };

  const getRubros = async () => {
    try {
      const rubrosRes = await fetchAPI("/rubros");
      /* console.log("rubros: ", rubrosRes); */
      setRubros(rubrosRes.data);
    } catch (e: any) {
      console.error(e.response);
    }
  };

  const getMarcas = async () => {
    try {
      const marcasRes = await fetchAPI("/marcas");
      /* console.log("marcas: ", marcasRes); */
      setMarcas(marcasRes.data);
    } catch (e: any) {
      console.error(e.response);
    }
  };

  //Si la categoria tiene tipos los carga en tipos de productos
  const getCatSubtipos = () => {
    if (cat) {
      categorias.map((categoria: any) => {
        if (cat === categoria.attributes.slug) {
          if (
            categoria.attributes.tipos_de_productos.data &&
            categoria.attributes.tipos_de_productos.data.length > 0
          ) {
            /* console.log(
              "tipos filtrados",
              categoria.attributes.tipos_de_productos.data
            ); */
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
      /* console.log("tipos de productos: ", tipoProdRes); */
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
                      $contains: search ? search : [],
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
                      $contains: cat ? cat : [],
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
                      $contains: tipo ? tipo : [],
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
                      $contains: marca ? marca : [],
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
                      $contains: rubro ? rubro : [],
                    },
                  },
                ],
              },
            },
          ],
        },
        pagination: {
          page: currentPage,
          pageSize: PageSize,
        },
        sort: [`createdAt:ASC`],
        populate: {
          imagen_principal: "*",
          marca: "*",
          tipos_de_productos: "*",
          keywords: "*",
          categorias: "*",
        },
      });
      setProdutos(productRes.data);
      setTotalPages(productRes.meta.pagination.total);
      setLoading(false);
      /* console.log("Productos", productRes); */
    } catch (e: any) {
      console.error(e.response);
      setProdutos([]);
      setLoading(false);
    }
  };

  const SEO_PRODUCTOS_CONSTANTS = {
    meta_title: 'Ovnisa - Productos',
    meta_url: 'https://www.ovnisa.com/productos',
  };

  return (
    <main className="PageMainContainer min-h-screen px-4 pt-28 xl:pt-44 pb-12">
      <SeoComponent {...SEO_PRODUCTOS_CONSTANTS} />
      <div className="lg:grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-2 mb-4 lg:mb-0">
          <div className="border border-gray-200 rounded-lg p-4">
            <Busqueda />
            <Categorias selected={cat} categorias={categorias} />
            <TipoProductos selected={tipo} tipoProductos={tipoProductos} />
            <Marcas selected={marca} marcas={marcas} />
            <Rubros selected={rubro} rubros={rubros} />
          </div>
        </div>
        <div className="lg:col-span-9">
          {loading ? (
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
              <LoadingProductsSkeleton total={PageSize} />
            </div>
          ) : (
            <div>
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
                {productos && productos.length > 0
                  ? productos.map((prod: any) => (
                      <Fragment key={prod.id}>
                        <CardProductos
                          nombre={prod.attributes.nombre}
                          imagen_principal={
                            prod?.attributes?.imagen_principal?.data
                              ? prod?.attributes?.imagen_principal?.data
                                  ?.attributes?.url
                              : ""
                          }
                          slug={prod.attributes.slug}
                          imagen_principal_alt={
                            prod?.attributes?.imagen_principal?.data
                              ? prod?.attributes?.imagen_principal?.data
                                  ?.attributes.name
                              : ""
                          }
                          marca={
                            prod?.attributes?.marca?.data?.attributes?.nombre
                              ? prod?.attributes?.marca?.data?.attributes
                                  ?.nombre
                              : ""
                          }
                        />
                      </Fragment>
                    ))
                  : null}
              </div>
              <Pagination
                currentPage={currentPage}
                totalCount={totalPages}
                pageSize={PageSize}
                onPageChange={(page: number) => setCurrentPage(page)}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
