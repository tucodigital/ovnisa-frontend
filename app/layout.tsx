"use client";

import { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";

import "./globals.css";
import "./index.css";
import { MainMenu } from "@/components/MainMenu/MainMenu";
import { Footer } from "@/components/Footer/Footer";
import { FooterContent } from "@/types/components/FooterTypes";
import { MainMenuContent } from "@/types/components/MainMenuTypes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [mainMenuContent, setMainMenuContent] = useState<MainMenuContent>({
    component: {
      email_text: "",
      phone_text: "",
      whatsapp_link: "",
      whatsapp_text: "",
      id: 0,
      mercado_libre_link: "",
      mercado_libre_text: "",
      items: [],
    },
    name: "",
    showSearchOverlay,
    setShowSearchOverlay,
  });
  const [footerContent, setFooterContent] = useState<FooterContent>({
    component: {
      id: 0,
      contact_section_title: "",
      copyright_text: "",
      description_text: "",
      email_text: "",
      location_text: "",
      phone_text_1: "",
      phone_text_2: "",
      site_map_items: [],
      site_map_title: "",
      whatsapp_link: "",
      whatsapp_text: "",
      facebook_link: "",
      instagram_link: "",
      youtube_link: "",
      linkedin_link: "",
      mercado_libre_link: "",
    },
    name: "",
  });

  useEffect(() => {
    getMainMenu();
    getFooter();
  }, []);

  const getMainMenu = async () => {
    try {
      const mainMenuResponse = await fetchAPI("/main-menu", {
        populate: {
          component: {
            populate: {
              items: "*",
            },
          },
        },
      });
      console.log("MainMenu Response -->", mainMenuResponse);
      setMainMenuContent(mainMenuResponse?.data?.attributes);
    } catch (e: any) {
      console.error(e.response);
      setMainMenuContent({
        component: {
          email_text: "",
          phone_text: "",
          whatsapp_link: "",
          whatsapp_text: "",
          id: 0,
          mercado_libre_link: "",
          mercado_libre_text: "",
          items: [],
        },
        name: "",
        showSearchOverlay,
        setShowSearchOverlay,
      });
    }
  };

  const getFooter = async () => {
    try {
      const footerResponse = await fetchAPI("/footer", {
        populate: {
          component: {
            populate: {
              social_items: "*",
              site_map_items: "*",
              image: "*",
            },
          },
        },
      });
      console.log("Footer Response -->", footerResponse);
      setFooterContent(footerResponse?.data?.attributes);
    } catch (e: any) {
      console.error(e.response);
      setFooterContent({
        component: {
          id: 0,
          contact_section_title: "",
          copyright_text: "",
          description_text: "",
          email_text: "",
          location_text: "",
          phone_text_1: "",
          phone_text_2: "",
          site_map_items: [],
          site_map_title: "",
          whatsapp_link: "",
          whatsapp_text: "",
          facebook_link: "",
          instagram_link: "",
          youtube_link: "",
          linkedin_link: "",
          mercado_libre_link: "",
        },
        name: "",
      });
    }
  };


  return (
    <html lang="es-AR">
      <body>
        <MainMenu
          component={mainMenuContent?.component}
          name={mainMenuContent?.name}
          showSearchOverlay={showSearchOverlay}
          setShowSearchOverlay={setShowSearchOverlay}
        />
        {showSearchOverlay ? (
          <div className="w-full bg-slate-900 opacity-50 fixed searchOverlay"></div>
        ) : null}
        {children}
        <Footer
          component={footerContent?.component}
          name={footerContent?.name}
        />
      </body>
    </html>
  );
}
