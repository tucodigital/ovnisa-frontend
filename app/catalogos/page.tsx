"use client";

import React, { Fragment, useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";
import { useSearchParams } from "next/navigation";

import { Busqueda } from "@/components/products/filtros/Busqueda";
import { Categorias } from "@/components/products/filtros/Categorias";
import { Rubros } from "@/components/products/filtros/Rubros";

import Pagination from "@/components/Pagination/Pagination";

import { CardCatalogos } from "@/components/Catalogos/CardCatalogos";
import { LoadingCatalogsSkeleton } from "@/components/Catalogos/LoadingCatalogsSkeleton";
import SeoComponent from "@/components/SEOComponent/SEOComponent";

export default function Catalogos() {
  const searchParams = useSearchParams();
  const search = searchParams.get("s");
  const cat = searchParams.get("categoria");
  const rubro = searchParams.get("rubro");
  const urlPage = searchParams.get("p");

  const [catalogos, setCatalogos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [rubros, setRubros] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  let PageSize = 6;

  useEffect(() => {
    if (urlPage) {
      setCurrentPage(parseInt(urlPage));
    }
  }, [urlPage]);

  useEffect(() => {
    getCatalogos();
  }, [searchParams]);

  useEffect(() => {
    getCategories();
    getRubros();
  }, []);

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

  const getCatalogos = async () => {
    setLoading(true);
    try {
      const catalogRes = await fetchAPI("/catalogos", {
        filters: {
          $or: [
            {
              title: {
                $containsi: search ? search : [],
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
        //sort: [`createdAt:${orderFecha}`, `title:${orderAlfabetico}`],
        populate: {
          image: "*",
          rubros: "*",
          categorias: "*",
          file: "*",
        },
      });
      setCatalogos(catalogRes.data);
      setTotalPages(catalogRes.meta.pagination.total);
      setLoading(false);
      /* console.log("Catalogos", catalogRes); */
    } catch (e: any) {
      console.error(e.response);
      setCatalogos([]);
      setLoading(false);
    }
  };

  const SEO_CATALOGOS_CONSTANTS = {
    meta_title: "Ovnisa - Catálogos",
    meta_url: "https://www.ovnisa.com/catalogos",
  };

  const CATEGORIAS_HEADER_CONSTANTS = {
    over_title: "Catálogos.",
    title:"Descargá nuestros catálogos de productos",
    description:"En esta sección podés acceder a los catálogos de nuestras principales líneas de productos, con información técnica, medidas, aplicaciones y datos relevantes para la selección de cada solución. Ante cualquier consulta, nuestro equipo comercial está disponible para brindarte asesoramiento y ayudarte a encontrar el producto adecuado según tu necesidad."};

  return (
    <main className="PageMainContainer min-h-screen px-4 pt-28 lg:pt-44 pb-12">
      <SeoComponent {...SEO_CATALOGOS_CONSTANTS} />
      <div className="lg:grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-2 mb-4 lg:mb-0">
          <div className="border border-gray-200 rounded-lg p-4">
            <Busqueda />
            <Categorias selected={cat} categorias={categorias} />
            <Rubros selected={rubro} rubros={rubros} />
          </div>
        </div>
        <div className="lg:col-span-9">
          <div className="flex gap-4 lg:gap-10 flex-col lg:flex-row w-full ">
            <div className="flex flex-col py-4 lg:py-0">
              <h5 className="text-xs text-gray-500">{CATEGORIAS_HEADER_CONSTANTS.over_title}</h5>
              <h2 className="text-2xl font-bold text-black mb-2">{CATEGORIAS_HEADER_CONSTANTS.title}</h2>

              <div className="font-regular text-gray-800 prose prose-invert mb-6">{CATEGORIAS_HEADER_CONSTANTS.description}</div>
            </div>
          </div>
          {loading ? (
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-y-24 gap-y-10 justify-items-center">
              <LoadingCatalogsSkeleton total={PageSize} />
            </div>
          ) : (
            <div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 gap-y-10 lg:gap-y-16 justify-items-center">
                {catalogos && catalogos.length > 0
                  ? catalogos.map((catalogo: any) => (
                      <Fragment key={catalogo.id}>
                        <CardCatalogos
                          title={catalogo.attributes.title}
                          image={
                            catalogo?.attributes?.image?.data?.attributes?.url
                          }
                          image_alt={
                            catalogo?.attributes?.image?.data?.attributes
                              ?.name || "Imagen de catálogo."
                          }
                          file={
                            catalogo?.attributes?.file?.data?.attributes?.url
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
