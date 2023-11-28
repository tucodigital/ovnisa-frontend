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
      console.log(productRes);
      setLoading(false);
    } catch (e: any) {
      console.error(e.response);
      setLoading(false);
    }
  };

  return (
    <main className="PageMainContainer px-4 py-12 xl:px-16">
      <div>
        Producto
      </div>
    </main>
  );
}
