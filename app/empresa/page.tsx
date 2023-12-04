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
      console.log("Empresa Page Response -->", empresaPageResponse);
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
