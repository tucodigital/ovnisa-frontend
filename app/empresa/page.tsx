"use client";

import React, { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";
import ComponentSwitcher from "@/components/ComponentSwitcher";

export default function Empresa() {
  const [empresaComponents, setEmpresaComponents] = useState([]);

  useEffect(() => {
    getEmpresaPage();
  }, []);

  const getEmpresaPage = async () => {
    try {
      const empresaPageResponse = await fetchAPI("/empresa", {
        populate: {
          components: {
            populate: {
              items: {
                populate: {
                  icon: "*",
                },
              },
            },
          },
        },
      });
      /* console.log("Empresa Page Response -->", empresaPageResponse); */
      setEmpresaComponents(empresaPageResponse?.data?.attributes?.components);
    } catch (e: any) {
      console.error(e.response);
      setEmpresaComponents([]);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start pt-4 lg:pt-32">
      <ComponentSwitcher componentsList={empresaComponents || []} />
    </div>
  );
}


/* 
Puntos a tocar backend:

- Ajustar componente BusinessPath, ya no tiene mas los items y el texto es mas corto
- Ajustar componente video-section: no deberia llamarse mas asi para dar lugar al nuevo formato que abarcaria todo lo restante
  - El nuevo componente incluira la parte ya existen de los 4 items, la imagen principal con textos y las 3 cards a mostrar en la parte inferior
- Ajustar skeleton

*/
