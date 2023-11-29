"use client";

import React, { Fragment, useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";

export default function Producto(context) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductos();
  }, [context.params.slug]);

  const getProductos = async () => {
    setLoading(true);
    try {
      const productRes = await fetchAPI(`/productos/${context.params.slug}`, {
        populate: {
          imagen_principal: "*",
          rubros: "*",
          marca: "*",
          tipos_de_productos: "*",
          keywords: "*",
          categorias: "*",
        },
      });
      console.log("product", productRes);
      setLoading(false);
    } catch (e: any) {
      console.error(e.response);
      setLoading(false);
    }
  };

  return (
    <main className="PageMainContainer min-h-screen px-4 pt-44 pb-12">
      <div>
        Producto
      </div>
    </main>
  );
}
