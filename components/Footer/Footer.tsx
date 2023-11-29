"use client";

import Link from "next/link";
import React from "react";

/* TODO: Mover a archivo de Types */
export interface FooterContent {
  component: FooterComponentContent;
  name: String;
}

interface FooterComponentContent {
  id: number;
  contact_section_title: String;
  copyright_text: String;
  description_text: String;
  email_text: String;
  location_text: String;
  phone_text_1: String;
  phone_text_2: String;
  site_map_title: String;
  whatsapp_text: String;
  whatsapp_link: String;
  site_map_items: SiteMapItem[];
  facebook_link: String;
  instagram_link: String;
  youtube_link: String;
  linkedin_link: String;
  mercado_libre_link: String;
}

interface SiteMapItem {
  id: number;
  item_text: string;
  item_link: string;
}

export const Footer = ({ component }: FooterContent) => {
  if (!component) return null;
  return (
    <footer className="bg-ov-primaryLight">
      <div className="hidden lg:flex h-auto w-full lg:flex-row justify-between py-16 px-4 PageMainContainer">
        <div className="flex flex-col gap-6">
          <img
            className="w-48"
            src={`/assets/footer/ruido-ovnisa-logo-footer-desktop.svg`}
          />
          {component?.description_text ? (
            <p className="text-white">{component.description_text}</p>
          ) : null}
          {component?.location_text ? (
            <div className="flex flex-row gap-2 items-center">
              <img
                className="h-5"
                src="/assets/footer/ruido-ovnisa-icono-footer-ubicacion.svg"
              />
              <p className="text-white">{component.location_text}</p>
            </div>
          ) : null}
          <div className="flex flex-row gap-2 mt-4">
            {component?.facebook_link ? (
              <Link href={`${component.facebook_link}`} target="_blank">
                <img
                  className="h-7"
                  src="/assets/footer/ruido-ovnisa-footer-icono-facebook.svg"
                />
              </Link>
            ) : null}
            {component?.instagram_link ? (
              <Link href={`${component.instagram_link}`} target="_blank">
                <img
                  className="h-7"
                  src="/assets/footer/ruido-ovnisa-icono-footer-instagram-desktop.svg"
                />
              </Link>
            ) : null}
            {component?.youtube_link ? (
              <Link href={`${component.youtube_link}`} target="_blank">
                <img
                  className="h-7"
                  src="/assets/footer/ruido-ovnisa-icono-footer-youtube.svg"
                />
              </Link>
            ) : null}
            {component?.linkedin_link ? (
              <Link href={`${component.linkedin_link}`} target="_blank">
                <img
                  className="h-7"
                  src="/assets/footer/ruido-ovnisa-footer-icono-linkedin.svg"
                />
              </Link>
            ) : null}
            {component?.mercado_libre_link ? (
              <Link href={`${component.mercado_libre_link}`} target="_blank">
                <img
                  className="h-7"
                  src="/assets/footer/ruido-ovnisa-footer-icono-meli.svg"
                />
              </Link>
            ) : null}
          </div>
        </div>
        <div className="flex flex-row gap-20 px-4">
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-bold text-2xl mb-6">
              {component?.contact_section_title || "Contactanos"}
            </h5>
            {component?.email_text ? (
              <div className="flex flex-row gap-2 items-center">
                <img
                  className="h-5"
                  src="/assets/footer/ruido-ovnisa-icono-footer-mail-desktop.svg"
                />
                <Link href={`mailto:${component.email_text}`} target="_blank">
                  <p className="text-white">{component.email_text}</p>
                </Link>
              </div>
            ) : null}
            {component?.whatsapp_text && component?.whatsapp_link ? (
              <div className="flex flex-row gap-2 items-center">
                <img
                  className="h-6"
                  src="/assets/footer/ruido-ovnisa-footer-icono-whatsapp.svg"
                />
                <Link href={`${component.whatsapp_link}`} target="_blank">
                  <p className="text-white">{component.whatsapp_text}</p>
                </Link>
              </div>
            ) : null}

            {component?.phone_text_1 || component?.phone_text_2 ? (
              <div className="flex flex-row gap-2 items-start">
                <img
                  className="h-6"
                  src="/assets/footer/ruido-ovnisa-icono-footer-celular.svg"
                />
                <div className="flex flex-col items-start">
                  {component?.phone_text_1 ? (
                    <p className="text-white">{component.phone_text_1}</p>
                  ) : null}
                  {component?.phone_text_2 ? (
                    <p className="text-white">{component.phone_text_2}</p>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="text-white font-bold text-2xl mb-8">
              {component?.site_map_title || "Mapa de sitio"}
            </h5>
            {component.site_map_items.map((item, index) => (
              <Link key={`site_map_item_${index}`} href={`${item.item_link}`}>
                <p className="text-white">{item.item_text}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Mobile */}
      <div className="block lg:hidden bg-ov-primaryLight w-full flex justify-between py-8">
        <div className="ml-8 flex flex-col gap-4">
          <img
            className="w-48"
            src={`/assets/footer/ruido-ovnisa-logo-footer-desktop.svg`}
          />
          {component?.description_text ? (
            <p className="text-white">{component.description_text}</p>
          ) : null}
          {component?.location_text ? (
            <div className="flex flex-row gap-2 items-center mb-2">
              <img
                className="h-5"
                src="/assets/footer/ruido-ovnisa-icono-footer-ubicacion.svg"
              />
              <p className="text-white">{component.location_text}</p>
            </div>
          ) : null}
          <div className="mr-8 flex flex-row gap-20">
            <div className="flex flex-col gap-4">
              <h5 className="text-white font-bold text-xl">
                {component?.contact_section_title || "Contactanos"}
              </h5>
              {component?.email_text ? (
                <div className="flex flex-row gap-2 items-center">
                  <img
                    className="h-5"
                    src="/assets/footer/ruido-ovnisa-icono-footer-mail-desktop.svg"
                  />
                  <Link href={`mailto:${component.email_text}`} target="_blank">
                    <p className="text-white">{component.email_text}</p>
                  </Link>
                </div>
              ) : null}
              {component?.whatsapp_text && component?.whatsapp_link ? (
                <div className="flex flex-row gap-2 items-center">
                  <img
                    className="h-6"
                    src="/assets/footer/ruido-ovnisa-footer-icono-whatsapp.svg"
                  />
                  <Link href={`${component.whatsapp_link}`} target="_blank">
                    <p className="text-white">{component.whatsapp_text}</p>
                  </Link>
                </div>
              ) : null}

              {component?.phone_text_1 || component?.phone_text_2 ? (
                <div className="flex flex-row gap-2 items-center">
                  <img
                    className="h-6"
                    src="/assets/footer/ruido-ovnisa-icono-footer-celular.svg"
                  />
                  <div className="flex flex-col items-start">
                    {component?.phone_text_1 ? (
                      <p className="text-white">{component.phone_text_1}</p>
                    ) : null}
                    {component?.phone_text_2 ? (
                      <p className="text-white">{component.phone_text_2}</p>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-4 justify-between">
            {component?.facebook_link ? (
              <Link href={`${component.facebook_link}`} target="_blank">
                <img
                  className="h-7"
                  src="/assets/footer/ruido-ovnisa-footer-icono-facebook.svg"
                />
              </Link>
            ) : null}
            {component?.instagram_link ? (
              <Link href={`${component.instagram_link}`} target="_blank">
                <img
                  className="h-7"
                  src="/assets/footer/ruido-ovnisa-icono-footer-instagram-desktop.svg"
                />
              </Link>
            ) : null}
            {component?.youtube_link ? (
              <Link href={`${component.youtube_link}`} target="_blank">
                <img
                  className="h-7"
                  src="/assets/footer/ruido-ovnisa-icono-footer-youtube.svg"
                />
              </Link>
            ) : null}
            {component?.linkedin_link ? (
              <Link href={`${component.linkedin_link}`} target="_blank">
                <img
                  className="h-7"
                  src="/assets/footer/ruido-ovnisa-footer-icono-linkedin.svg"
                />
              </Link>
            ) : null}
            {component?.mercado_libre_link ? (
              <Link href={`${component.mercado_libre_link}`} target="_blank">
                <img
                  className="h-7"
                  src="/assets/footer/ruido-ovnisa-footer-icono-meli.svg"
                />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
};
