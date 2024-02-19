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
      console.log("Footer Response -->", footerResponse);
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
    <footer className="bg-ov-primaryLight">
      <div className="hidden lg:flex h-auto w-full lg:flex-row justify-between py-16 px-4 PageMainContainer">
        <div className="flex flex-col gap-6">
          <Image
            width={10}
            height={10}
            objectFit="fill"
            loader={loaderProp}
            className="w-48"
            alt="Logo Ovnisa"
            src={`/assets/footer/ruido-ovnisa-logo-footer-desktop.svg`}
          />
          {footerContent?.description_text ? (
            <p className="text-white">{footerContent.description_text}</p>
          ) : null}
          {footerContent?.location_text ? (
            <div className="flex flex-row gap-2 items-center">
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
          <div className="flex flex-row gap-2 mt-4">
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
            {footerContent?.mercado_libre_link ? (
              <Link href={`${footerContent.mercado_libre_link}`} target="_blank">
                <Image
                  width={30}
                  height={30}
                  objectFit="fill"
                  loader={loaderProp}
                  className="h-7"
                  alt="Icono Mercado Libre"
                  src={`/assets/footer/ruido-ovnisa-footer-icono-meli.svg`}
                />
              </Link>
            ) : null}
          </div>
        </div>
        <div className="flex flex-row gap-20 px-4">
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-bold text-2xl mb-6">
              {footerContent?.contact_section_title || "Contactanos"}
            </h5>
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
                <Link href={`mailto:${footerContent.email_text}`} target="_blank">
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
                  className="h-6"
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
                  className="h-6"
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
          <div className="flex flex-col gap-1">
            <h5 className="text-white font-bold text-2xl mb-8">
              {footerContent?.site_map_title || "Mapa de sitio"}
            </h5>
            {footerContent.site_map_items.map((item, index) => (
              <Link key={`site_map_item_${index}`} href={`${item.item_link}`}>
                <p className="text-white">{item.item_text}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Mobile */}
      <div className=" lg:hidden bg-ov-primaryLight w-full flex justify-between py-8">
        <div className="mx-8 flex flex-col gap-4 w-full">
          <Image
            width={30}
            height={30}
            objectFit="fill"
            loader={loaderProp}
            className="w-48"
            alt="Icono Mercado Libre"
            src={`/assets/footer/ruido-ovnisa-logo-footer-desktop.svg`}
          />
          {footerContent?.description_text ? (
            <p className="text-white">{footerContent.description_text}</p>
          ) : null}
          {footerContent?.location_text ? (
            <div className="flex flex-row gap-2 items-center mb-2">
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
                  <Link href={`mailto:${footerContent.email_text}`} target="_blank">
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
                    className="h-6"
                    alt="Icono Whatsapp"
                    src={`/assets/footer/ruido-ovnisa-footer-icono-whatsapp.svg`}
                  />
                  <Link href={`${footerContent.whatsapp_link}`} target="_blank">
                    <p className="text-white">{footerContent.whatsapp_text}</p>
                  </Link>
                </div>
              ) : null}

              {footerContent?.phone_text_1 || footerContent?.phone_text_2 ? (
                <div className="flex flex-row gap-2 items-center">
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
          <div className="flex flex-row mt-4 justify-between">
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
            {footerContent?.mercado_libre_link ? (
              <Link href={`${footerContent.mercado_libre_link}`} target="_blank">
                <Image
                  width={30}
                  height={30}
                  objectFit="fill"
                  loader={loaderProp}
                  className="h-7"
                  alt="Icono Mercado Libre"
                  src={`/assets/footer/ruido-ovnisa-footer-icono-meli.svg`}
                />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
};
