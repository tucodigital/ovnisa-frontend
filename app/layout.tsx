"use client";

import { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";

import "./globals.css";
import { Inter } from "next/font/google";
import { MainMenu } from "@/components/MainMenu/MainMenu";
import { Footer, FooterContent } from "@/components/Footer/Footer";
import { MainMenuContent } from "../components/MainMenu/MainMenu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      const mainMenuResponse = await fetchAPI(
        "/main-menu?populate[0]=component&populate[1]=component.items"
      );
      /* console.log("MainMenu Response -->", mainMenuResponse); */
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
      });
    }
  };

  const getFooter = async () => {
    try {
      const footerResponse = await fetchAPI(
        "/footer?populate[0]=component&populate[1]=component.social_items&populate[2]=component.site_map_items&populate[3]=component.logo"
      );
      /* console.log("Footer Response -->", footerResponse); */
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

  if (!mainMenuContent || !footerContent) return null;

  return (
    <html lang="en">
      <body className={inter.className}>
        <MainMenu
          component={mainMenuContent?.component}
          name={mainMenuContent?.name}
        />
        {children}
        <Footer
          component={footerContent?.component}
          name={footerContent?.name}
        />
      </body>
    </html>
  );
}
