"use client";

import React, { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";

import ComponentSwitcher from "@/components/ComponentSwitcher";

export default function Home() {
  const [homeComponents, setHomeComponents] = useState([]);

  useEffect(() => {
    getHomePage();
  }, []);

  const getHomePage = async () => {
    try {
      const homePageRes = await fetchAPI("/home", {
        populate: {
          components: {
            populate: {
              slides: {
                populate: {
                  image_desktop: "*",
                  image_mobile: "*",
                },
              },
              brands: {
                populate: {
                  image: "*"
                }
              },
              categorias: {
                populate: {
                  image: "*"
                }
              }
            },
          },
        },
      });
      console.log("Home Page Response -->", homePageRes);
      setHomeComponents(homePageRes?.data?.attributes?.components);
    } catch (e: any) {
      console.error(e.response);
      setHomeComponents([]);
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-start lg:pt-32">
      <ComponentSwitcher componentsList={homeComponents || []} />
    </div>
  );
}
