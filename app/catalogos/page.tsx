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

  return (
    <main className="PageMainContainer min-h-screen px-4 pt-28 xl:pt-44 pb-12">
      <SeoComponent {...SEO_CATALOGOS_CONSTANTS} />
      <div className="lg:grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-2 border border-gray-200 rounded-lg p-4 mb-4 lg:mb-0">
          <Busqueda />
          <Categorias selected={cat} categorias={categorias} />
          <Rubros selected={rubro} rubros={rubros} />
        </div>
        <div className="lg:col-span-9">
          {loading ? (
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-y-24 gap-y-10 justify-items-center">
              <LoadingCatalogsSkeleton total={PageSize} />
            </div>
          ) : (
            <div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-y-24 gap-y-10 justify-items-center">
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
