"use client";

import React, { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";
import ComponentSwitcher from "@/components/ComponentSwitcher";

export default function Contacto() {
  const [contactoComponents, setContactoComponents] = useState([]);

  useEffect(() => {
    getContactoPage();
  }, []);

  const getContactoPage = async () => {
    try {
      const contactoPageResponse = await fetchAPI("/contacto", {
        populate: {
          components: {
            populate: {
              vendors: {
                populate: "*",
              },
            },
          },
        },
      });
      /* console.log("Contacto Page Response -->", contactoPageResponse); */
      setContactoComponents(contactoPageResponse?.data?.attributes?.components);
    } catch (e: any) {
      console.error(e.response);
      setContactoComponents([]);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start pt-4 lg:pt-32">
      <ComponentSwitcher componentsList={contactoComponents || []} />
    </div>
  );
}
