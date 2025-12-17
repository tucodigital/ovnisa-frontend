"use client";
/*TODO: agregar slug a las noticias en backend.*/

import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import SeoComponent from "@/components/SEOComponent/SEOComponent";
import Pagination from "@/components/Pagination/Pagination";
import { CardNoticias } from "@/components/Noticias/CardNoticias";

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
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4"></div>
      ) : (
        <div>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
            {noticias && noticias.length > 0
              ? noticias.map((noticia: any) => (
                  <Fragment key={noticia.id}>
                    <CardNoticias {...noticia} />
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
