"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { loaderProp } from "@/lib/utils";
import { fetchAPI } from "@/lib/api";

export const Footer = () => {
  const [footerContent, setFooterContent] = useState({
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
  });

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
      /* console.log("Footer Response -->", footerResponse); */
      setFooterContent(footerResponse?.data?.attributes?.component);
    } catch (e: any) {
      console.error(e.response);
      setFooterContent({
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
      });
    }
  };

  useEffect(() => {
    getFooter();
  }, []);

  if (!footerContent) return null;

  return (
    <footer>
      <div className="bg-ov-primary">
        <div className="hidden lg:flex h-auto w-full lg:flex-row py-16 px-4 PageMainContainer">
          <div className="flex flex-col gap-2 w-112">
            <svg
              className="w-40 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 259.64 68.45"
            >
              <path
                fill="currentColor"
                d="M113.67,34.55c-.09,8.34-5.21,16.69-16.55,16.69s-16.59-8.16-16.59-16.64,5.44-17.01,16.59-17.01,16.64,8.53,16.55,16.96M86.52,34.69c.14,5.3,3,10.97,10.6,10.97s10.46-5.72,10.55-11.02c.09-5.44-2.95-11.52-10.55-11.52s-10.74,6.13-10.6,11.57"
              />
              <polygon
                fill="currentColor"
                points="134.18 50.64 127.87 50.64 114.45 18.23 121.27 18.23 131 43.35 140.77 18.23 147.59 18.23 134.18 50.64"
              />
              <polygon
                fill="currentColor"
                points="172.53 18.19 178.61 18.19 178.61 50.5 174.83 50.5 174.83 50.54 157.87 28.74 157.87 50.5 151.78 50.5 151.78 18.23 156.72 18.23 172.53 38.24 172.53 18.19"
              />
              <rect
                fill="currentColor"
                x="184.23"
                y="18.23"
                width="6.04"
                height="32.26"
              />
              <path
                fill="currentColor"
                d="M216.82,26.02c-1.11-1.84-4.15-3.59-7.65-3.59-4.52,0-6.68,1.89-6.68,4.29,0,2.81,3.32,3.6,7.19,4.06,6.73.83,13,2.58,13,10.28,0,7.19-6.36,10.28-13.55,10.28-6.59,0-11.66-2.03-14.06-7.93l5.07-2.63c1.43,3.55,5.16,5.12,9.08,5.12s7.42-1.34,7.42-4.84c0-3.04-3.18-4.29-7.47-4.75-6.59-.78-12.67-2.53-12.67-9.77,0-6.64,6.54-9.36,12.49-9.4,5.03,0,10.23,1.43,12.68,6.41l-4.84,2.49Z"
              />
              <path
                fill="currentColor"
                d="M250.28,44.41h-16.87l-2.76,6.08h-6.59l14.47-32.26h6.64l14.47,32.26h-6.64l-2.72-6.08ZM241.84,25.01l-5.99,13.74h11.98l-5.99-13.74Z"
              />
              <path
                fill="currentColor"
                d="M34.23,0C15.35,0,0,15.35,0,34.23s15.35,34.23,34.23,34.23,34.23-15.35,34.23-34.23S53.1,0,34.23,0M62.41,34.23c0,15.54-12.64,28.18-28.18,28.18S6.05,49.77,6.05,34.23,18.69,6.05,34.23,6.05s28.18,12.64,28.18,28.18"
              />
              <path
                fill="currentColor"
                d="M45.72,22.69h-8.49l10.11,10.12c.33-.28.75-.45,1.21-.45,1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86c-.46,0-.89-.17-1.21-.45l-10.11,10.12h8.5l7.7-7.7c2.12-2.12,2.12-5.55,0-7.67l-7.7-7.7Z"
              />
              <path
                fill="currentColor"
                d="M28.39,30.39l-7.7-7.7h-8.54l10.11,10.12c.33-.28.75-.45,1.21-.45,1.03,0,1.86.83,1.86,1.86s-.83,1.87-1.86,1.87c-.46,0-.89-.17-1.21-.45l-10.11,10.12h8.54l7.7-7.7c2.12-2.12,2.12-5.55,0-7.67"
              />
              <path
                fill="currentColor"
                d="M34.78,32.81h8.56l-10.11-10.12c-.33.28-.75.45-1.21.45-1.03,0-1.86-.83-1.86-1.86s.83-1.86,1.86-1.86c.46,0,.89.17,1.21.45l10.11-10.12h-8.56l-7.7,7.7c-2.12,2.12-2.12,5.55,0,7.67l7.7,7.7Z"
              />
              <path
                fill="currentColor"
                d="M32.01,49.03c-1.03,0-1.86-.83-1.86-1.86s.83-1.86,1.86-1.86c.46,0,.89.17,1.21.45l10.11-10.11h-8.55l-7.7,7.7c-2.12,2.12-2.12,5.55,0,7.67l7.7,7.7h8.55l-10.11-10.12c-.33.28-.75.45-1.21.45"
              />
            </svg>
            {footerContent?.description_text ? (
              <p className="text-white font-bold">
                {footerContent.description_text}
              </p>
            ) : null}
            {footerContent?.location_text ? (
              <div className="flex flex-row gap-2">
                <Image
                  width={15}
                  height={15}
                  objectFit="fill"
                  loader={loaderProp}
                  className="h-7"
                  alt="Icono Ubicación"
                  src={`/assets/footer/ruido-ovnisa-icono-footer-ubicacion.svg`}
                />
                <p className="text-white">{footerContent.location_text}</p>
              </div>
            ) : null}
          </div>
          <div className="flex flex-row gap-20 px-4">
            <div className="flex flex-col">
              <h5 className="text-white font-bold uppercase mb-4">
                {footerContent?.site_map_title || "Mapa de sitio"}
              </h5>
              <Link key={`site_map_item_inicio`} href={`/`}>
                <p className="text-white font-bold">Inicio</p>
              </Link>
              {footerContent.site_map_items.map((item, index) => (
                <Link key={`site_map_item_${index}`} href={`${item.item_link}`}>
                  <p className="text-white">{item.item_text}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-white font-bold uppercase mb-4">
                {footerContent?.contact_section_title || "Contactanos"}
              </h5>
              {footerContent?.email_text ? (
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Correo Electrónico"
                    src={`/assets/footer/ruido-ovnisa-icono-footer-mail-desktop.svg`}
                  />
                  <Link
                    href={`mailto:${footerContent.email_text}`}
                    target="_blank"
                  >
                    <p className="text-white">{footerContent.email_text}</p>
                  </Link>
                </div>
              ) : null}
              {footerContent?.whatsapp_text && footerContent?.whatsapp_link ? (
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Whatsapp"
                    src={`/assets/footer/ruido-ovnisa-footer-icono-whatsapp.svg`}
                  />
                  <Link href={`${footerContent.whatsapp_link}`} target="_blank">
                    <p className="text-white">{footerContent.whatsapp_text}</p>
                  </Link>
                </div>
              ) : null}

              {footerContent?.phone_text_1 || footerContent?.phone_text_2 ? (
                <div className="flex flex-row gap-2 items-start">
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Teléfono"
                    src={`/assets/footer/ruido-ovnisa-icono-footer-celular.svg`}
                  />
                  <div className="flex flex-col items-start">
                    {footerContent?.phone_text_1 ? (
                      <p className="text-white">{footerContent.phone_text_1}</p>
                    ) : null}
                    {footerContent?.phone_text_2 ? (
                      <p className="text-white">{footerContent.phone_text_2}</p>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Footer Mobile */}
        <div className=" lg:hidden bg-ov-primary w-full flex justify-between py-8">
          <div className="mx-8 flex flex-col gap-4 w-full">
          <svg
              className="w-48 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 259.64 68.45"
            >
              <path
                fill="currentColor"
                d="M113.67,34.55c-.09,8.34-5.21,16.69-16.55,16.69s-16.59-8.16-16.59-16.64,5.44-17.01,16.59-17.01,16.64,8.53,16.55,16.96M86.52,34.69c.14,5.3,3,10.97,10.6,10.97s10.46-5.72,10.55-11.02c.09-5.44-2.95-11.52-10.55-11.52s-10.74,6.13-10.6,11.57"
              />
              <polygon
                fill="currentColor"
                points="134.18 50.64 127.87 50.64 114.45 18.23 121.27 18.23 131 43.35 140.77 18.23 147.59 18.23 134.18 50.64"
              />
              <polygon
                fill="currentColor"
                points="172.53 18.19 178.61 18.19 178.61 50.5 174.83 50.5 174.83 50.54 157.87 28.74 157.87 50.5 151.78 50.5 151.78 18.23 156.72 18.23 172.53 38.24 172.53 18.19"
              />
              <rect
                fill="currentColor"
                x="184.23"
                y="18.23"
                width="6.04"
                height="32.26"
              />
              <path
                fill="currentColor"
                d="M216.82,26.02c-1.11-1.84-4.15-3.59-7.65-3.59-4.52,0-6.68,1.89-6.68,4.29,0,2.81,3.32,3.6,7.19,4.06,6.73.83,13,2.58,13,10.28,0,7.19-6.36,10.28-13.55,10.28-6.59,0-11.66-2.03-14.06-7.93l5.07-2.63c1.43,3.55,5.16,5.12,9.08,5.12s7.42-1.34,7.42-4.84c0-3.04-3.18-4.29-7.47-4.75-6.59-.78-12.67-2.53-12.67-9.77,0-6.64,6.54-9.36,12.49-9.4,5.03,0,10.23,1.43,12.68,6.41l-4.84,2.49Z"
              />
              <path
                fill="currentColor"
                d="M250.28,44.41h-16.87l-2.76,6.08h-6.59l14.47-32.26h6.64l14.47,32.26h-6.64l-2.72-6.08ZM241.84,25.01l-5.99,13.74h11.98l-5.99-13.74Z"
              />
              <path
                fill="currentColor"
                d="M34.23,0C15.35,0,0,15.35,0,34.23s15.35,34.23,34.23,34.23,34.23-15.35,34.23-34.23S53.1,0,34.23,0M62.41,34.23c0,15.54-12.64,28.18-28.18,28.18S6.05,49.77,6.05,34.23,18.69,6.05,34.23,6.05s28.18,12.64,28.18,28.18"
              />
              <path
                fill="currentColor"
                d="M45.72,22.69h-8.49l10.11,10.12c.33-.28.75-.45,1.21-.45,1.03,0,1.86.83,1.86,1.86s-.83,1.86-1.86,1.86c-.46,0-.89-.17-1.21-.45l-10.11,10.12h8.5l7.7-7.7c2.12-2.12,2.12-5.55,0-7.67l-7.7-7.7Z"
              />
              <path
                fill="currentColor"
                d="M28.39,30.39l-7.7-7.7h-8.54l10.11,10.12c.33-.28.75-.45,1.21-.45,1.03,0,1.86.83,1.86,1.86s-.83,1.87-1.86,1.87c-.46,0-.89-.17-1.21-.45l-10.11,10.12h8.54l7.7-7.7c2.12-2.12,2.12-5.55,0-7.67"
              />
              <path
                fill="currentColor"
                d="M34.78,32.81h8.56l-10.11-10.12c-.33.28-.75.45-1.21.45-1.03,0-1.86-.83-1.86-1.86s.83-1.86,1.86-1.86c.46,0,.89.17,1.21.45l10.11-10.12h-8.56l-7.7,7.7c-2.12,2.12-2.12,5.55,0,7.67l7.7,7.7Z"
              />
              <path
                fill="currentColor"
                d="M32.01,49.03c-1.03,0-1.86-.83-1.86-1.86s.83-1.86,1.86-1.86c.46,0,.89.17,1.21.45l10.11-10.11h-8.55l-7.7,7.7c-2.12,2.12-2.12,5.55,0,7.67l7.7,7.7h8.55l-10.11-10.12c-.33.28-.75.45-1.21.45"
              />
            </svg>
            {footerContent?.description_text ? (
              <p className="text-white">{footerContent.description_text}</p>
            ) : null}
            {footerContent?.location_text ? (
              <div className="flex flex-row gap-2 items-start mb-2">
                <Image
                  width={30}
                  height={30}
                  objectFit="fill"
                  loader={loaderProp}
                  className="h-5"
                  alt="Icono Ubicación"
                  src={`/assets/footer/ruido-ovnisa-icono-footer-ubicacion.svg`}
                />
                <p className="text-white">{footerContent.location_text}</p>
              </div>
            ) : null}
            <div className="mr-8 flex flex-row gap-20">
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-xl">
                  {footerContent?.contact_section_title || "Contactanos"}
                </h3>
                {footerContent?.email_text ? (
                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      width={30}
                      height={30}
                      objectFit="fill"
                      loader={loaderProp}
                      className="h-5"
                      alt="Icono Correo Electrónico"
                      src={`/assets/footer/ruido-ovnisa-icono-footer-mail-desktop.svg`}
                    />
                    <Link
                      href={`mailto:${footerContent.email_text}`}
                      target="_blank"
                    >
                      <p className="text-white">{footerContent.email_text}</p>
                    </Link>
                  </div>
                ) : null}
                {footerContent?.whatsapp_text &&
                footerContent?.whatsapp_link ? (
                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      width={30}
                      height={30}
                      objectFit="fill"
                      loader={loaderProp}
                      className="h-6"
                      alt="Icono Whatsapp"
                      src={`/assets/footer/ruido-ovnisa-footer-icono-whatsapp.svg`}
                    />
                    <Link
                      href={`${footerContent.whatsapp_link}`}
                      target="_blank"
                    >
                      <p className="text-white">
                        {footerContent.whatsapp_text}
                      </p>
                    </Link>
                  </div>
                ) : null}

                {footerContent?.phone_text_1 || footerContent?.phone_text_2 ? (
                  <div className="flex flex-row gap-2 items-start">
                    <Image
                      width={30}
                      height={30}
                      objectFit="fill"
                      loader={loaderProp}
                      className="h-6"
                      alt="Icono Teléfono"
                      src={`/assets/footer/ruido-ovnisa-icono-footer-celular.svg`}
                    />
                    <div className="flex flex-col items-start">
                      {footerContent?.phone_text_1 ? (
                        <p className="text-white">
                          {footerContent.phone_text_1}
                        </p>
                      ) : null}
                      {footerContent?.phone_text_2 ? (
                        <p className="text-white">
                          {footerContent.phone_text_2}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-row mt-4 justify-between">
            {footerContent?.instagram_link ? (
                <Link href={`${footerContent.instagram_link}`} target="_blank">
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Instagram"
                    src={`/assets/footer/ruido-ovnisa-icono-footer-instagram-desktop.svg`}
                  />
                </Link>
              ) : null}
              {footerContent?.facebook_link ? (
                <Link href={`${footerContent.facebook_link}`} target="_blank">
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Facebook"
                    src={`/assets/footer/ruido-ovnisa-footer-icono-facebook.svg`}
                  />
                </Link>
              ) : null}
              {footerContent?.linkedin_link ? (
                <Link href={`${footerContent.linkedin_link}`} target="_blank">
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Linkedin"
                    src={`/assets/footer/ruido-ovnisa-footer-icono-linkedin.svg`}
                  />
                </Link>
              ) : null}
              {footerContent?.youtube_link ? (
                <Link href={`${footerContent.youtube_link}`} target="_blank">
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Youtube"
                    src={`/assets/footer/ruido-ovnisa-icono-footer-youtube.svg`}
                  />
                </Link>
              ) : null}
              {footerContent?.whatsapp_link ? (
                <Link href={`${footerContent.whatsapp_link}`} target="_blank">
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Whatsapp"
                    src={`/assets/footer/ruido-ovnisa-footer-icono-whatsapp.svg`}
                  />
                </Link>
              ) : null}
            </div>
          </div>
        </div>

        <div className="text-white text-sm text-center lg:py-4 pb-4 pt-4 bg-ov-primaryLight px-8">
          <div className="PageMainContainer flex justify-center md:justify-between">
            <div className="flex flex-col md:flex-row">
              <p className="text-sm lg:text-base">{`Diseño Artifice Design © 2024.`}</p>
              <p className="px-2 lg:text-base hidden md:block">|</p>
              <a
                className="text-sm lg:text-base"
                target="_blank"
                href="https://ruidomarketing.com.ar/"
              >
                Ruido Marketing
              </a>
              <p className="px-2 text-sm lg:text-base hidden md:block">|</p>
              <a
                className="text-sm lg:text-base"
                target="_blank"
                href="https://tucodigital.com"
              >
                Powered By TucoDigital
              </a>
            </div>
            <div className="hidden lg:flex flex-row gap-4 mr-6">
              {footerContent?.email_text ? (
                <Link
                  href={`mailto:${footerContent.email_text}`}
                  target="_blank"
                >
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Mail"
                    src={`/assets/footer/ruido-ovnisa-icono-footer-mail-desktop.svg`}
                  />
                </Link>
              ) : null}
              {footerContent?.instagram_link ? (
                <Link href={`${footerContent.instagram_link}`} target="_blank">
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Instagram"
                    src={`/assets/footer/ruido-ovnisa-icono-footer-instagram-desktop.svg`}
                  />
                </Link>
              ) : null}
              {footerContent?.facebook_link ? (
                <Link href={`${footerContent.facebook_link}`} target="_blank">
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Facebook"
                    src={`/assets/footer/ruido-ovnisa-footer-icono-facebook.svg`}
                  />
                </Link>
              ) : null}

              {footerContent?.linkedin_link ? (
                <Link href={`${footerContent.linkedin_link}`} target="_blank">
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Linkedin"
                    src={`/assets/footer/ruido-ovnisa-footer-icono-linkedin.svg`}
                  />
                </Link>
              ) : null}

              {footerContent?.youtube_link ? (
                <Link href={`${footerContent.youtube_link}`} target="_blank">
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Youtube"
                    src={`/assets/footer/ruido-ovnisa-icono-footer-youtube.svg`}
                  />
                </Link>
              ) : null}

              {footerContent?.whatsapp_link ? (
                <Link href={`${footerContent.whatsapp_link}`} target="_blank">
                  <Image
                    width={30}
                    height={30}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-7"
                    alt="Icono Whatsapp"
                    src={`/assets/footer/ruido-ovnisa-footer-icono-whatsapp.svg`}
                  />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
