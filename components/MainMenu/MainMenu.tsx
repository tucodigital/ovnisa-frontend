"use client";

import React, { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";

export const MainMenu = ({}) => {
  const [mainMenuContent, setMainMenuContent] = useState({});

  useEffect(() => {
    getMainMenu();
  }, []);

  const getMainMenu = async () => {
    try {
      /* const homePageRes = await fetchAPI(
        "/home?populate[0]=components&populate[1]=components.items&populate[2]=components.social_items&&populate[3]=components.site_map_items"
      ); */
      const mainMenuResponse = await fetchAPI(
        "/main-menu?populate[0]=component&populate[1]=component.items"
      );
      console.log("Main Menu Response -->", mainMenuResponse);
      setMainMenuContent(mainMenuResponse?.data?.attributes);
    } catch (e: any) {
      console.error(e.response);
      setMainMenuContent({});
    }
  };

  console.log('state content -->', mainMenuContent)

  return (
    <div className="flex flex-col w-full">
      <div className="bg-ov-primary h-20 w-full"></div>
      <div className="bg-gradient-to-b from-ov-primaryLight to-ov-primary h-20 w-full"></div>
    </div>
  );
};
