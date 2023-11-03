"use client";

import React, { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";

import Switcher from "@/components/Switcher";

export default function Home() {
  const [homeComponents, setHomeComponents] = useState([]);

  useEffect(() => {
    getHomePage();
  }, []);

  const getHomePage = async () => {
    try {
      /* const homePageRes = await fetchAPI(
        "/home?populate[0]=components&populate[1]=components.items&populate[2]=components.social_items&&populate[3]=components.site_map_items"
      ); */
      const homePageRes = await fetchAPI(
        "/home"
      );
      console.log("Home Page Response -->", homePageRes);
      setHomeComponents(homePageRes?.data?.attributes?.components);
    } catch (e: any) {
      console.error(e.response);
      setHomeComponents([]);
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Switcher componentsList={homeComponents || []} />
    </div>
  );
}
