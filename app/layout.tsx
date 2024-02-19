"use client";

import { useEffect, useState, Suspense } from "react";
import { fetchAPI } from "@/lib/api";
import dynamic from "next/dynamic";
import "./globals.css";
import "./index.css";
import { MainMenu } from "@/components/MainMenu/MainMenu";
import { FooterContent } from "@/types/components/FooterTypes";

const Footer = dynamic(() =>
  import("@/components/Footer/Footer").then((module) => module.Footer)
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
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
    getFooter();
  }, []);

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
      <head>
        <title>Ovnisa</title>
        <meta
          name="description"
          content="Soluciones técnicas al servicio de la industria"
        />
        <meta property="og:title" content="Ovnisa" />
        <meta property="og:url" content="https://www.ovnisa.com/" />
        <meta
          property="og:description"
          content="Soluciones técnicas al servicio de la industria"
        />
      </head>
      <body>
        <MainMenu
          /* component={mainMenuContent?.component}
          name={mainMenuContent?.name} */
          showSearchOverlay={showSearchOverlay}
          setShowSearchOverlay={setShowSearchOverlay}
        />
        {showSearchOverlay ? (
          <div className="w-full bg-slate-900 opacity-50 fixed searchOverlay z-40"></div>
        ) : null}
        <Suspense>{children}</Suspense>
        <Footer
          component={footerContent?.component}
          name={footerContent?.name}
        />
      </body>
    </html>
  );
}
