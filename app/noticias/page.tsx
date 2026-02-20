"use client";
/*TODO: agregar slug a las noticias en backend.*/

import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import SeoComponent from "@/components/SEOComponent/SEOComponent";
import Pagination from "@/components/Pagination/Pagination";
import { CardNoticias } from "@/components/Noticias/CardNoticias";
import { LoadingProductsSkeleton } from "@/components/products/LoadingProductsSkeleton";

export default function Noticias() {
  const searchParams = useSearchParams();
  const urlPage = searchParams.get("p");
  const [noticias, setNoticias] = useState([]);
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
    getNoticias();
  }, []);

  const getNoticias = async () => {
    setLoading(true);
    try {
      const noticiasRes = await fetchAPI("/novedades", {
        populate: "*",
      });
      console.log("noticias: ", noticiasRes);
      setNoticias(noticiasRes.data);
      setTotalPages(noticiasRes.meta.pagination.total);
      setLoading(false);
    } catch (e: any) {
      console.error(e.response);
      setNoticias([]);
      setTotalPages(0);
      setLoading(false);
    }
  };

  const SEO_SERVICIOS_CONSTANTS = {
    meta_title: "Ovnisa - Noticias",
    meta_url: "https://www.ovnisa.com/noticias",
  };

  return (
    <main className="PageMainContainer min-h-screen px-4 pt-28 xl:pt-44 pb-12">
      <SeoComponent {...SEO_SERVICIOS_CONSTANTS} />
      {loading ? (
        <div>
          <div className="h-3 w-52 rounded bg-gray-200 animate-pulse mb-2"></div>
          <div className="h-8 w-72 rounded bg-gray-200 animate-pulse mb-2"></div>
          <div className="h-6 w-full rounded bg-gray-200 animate-pulse mb-6"></div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <LoadingProductsSkeleton total={PageSize} />
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <p className="text-xs text-gray-500">Novedades en OVNISA S.A</p>
            <h1 className="text-2xl font-bold text-black mb-2">Noticias</h1>
            <div className="text-gray-700">
              Mantengase actualizado con todas las actividades de nuestra
              Empresa y enterese de los nuevos ingresos, Exposiciones, puntos de
              venta y conocer todo nuestro trabajo en un solo lugar
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {noticias && noticias.length > 0
              ? noticias.map((noticia: any) => (
                  <Fragment key={noticia.id}>
                    <CardNoticias
                      title={noticia.attributes.title}
                      image={noticia.attributes.image}
                      slug={noticia.attributes.slug}
                      description={noticia.attributes.description}
                      content={noticia.attributes.content}
                      createdAt={noticia.attributes.createdAt}
                      updatedAt={noticia.attributes.updatedAt}
                      publishedAt={noticia.attributes.publishedAt}
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
    </main>
  );
}
