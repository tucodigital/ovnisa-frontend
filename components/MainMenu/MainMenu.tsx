"use client";

import React, { useState } from "react";
import { ContactMainMenuItemDesktop } from "./ContactMainMenuItemDesktop";
import { NavigationMainMenuItemDesktop } from "./NavigationMainMenuItemDesktop";
import Link from "next/link";
import { ContactMainMenuItemMobile } from "./ContactMainMenuItemMobile";

const ICONS_CONSTANTS_DESKTOP = {
  PHONE: "/assets/main-menu/ruido-ovnisa-nav-icono-celular-desktop.svg",
  EMAIL: "/assets/main-menu/ruido-ovnisa-nav-icono-mail-desktop.svg",
  WHATSAPP: "/assets/main-menu/ruido-ovnisa-nav-icono-whatsapp-desktop.svg",
  MERCADO_LIBRE: "/assets/main-menu/ruido-ovnisa-nav-icono-meli-desktop.svg",
};

const ICONS_CONSTANTS_MOBILE = {
  PHONE: "/assets/main-menu/ruido-ovnisa-nav-icono-celular-desktop.svg",
  EMAIL: "/assets/main-menu/ruido-ovnisa-nav-icono-mail-desktop.svg",
  WHATSAPP: "/assets/main-menu/ruido-ovnisa-nav-icono-whatsapp-desktop.svg",
  MERCADO_LIBRE: "/assets/main-menu/ruido-ovnisa-nav-meli-mobile.svg",
};

export interface MainMenuContent {
  component: MainMenuComponentContent;
  name: String;
}

interface MainMenuComponentContent {
  id: number;
  email_text: String;
  phone_text: String;
  whatsapp_text: String;
  whatsapp_link: String;
  mercado_libre_text: String;
  mercado_libre_link: String;
  items: MenuItemContent[];
}

interface MenuItemContent {
  id: number;
  item_text: string;
  item_link: string;
}

const ContactMainMenuItemDesktopSkeleton = ({ width = 32 }) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="animate-pulse w-6 rounded-full bg-slate-200 h-6 " />
      <div className={`animate-pulse w-${width} rounded-md bg-slate-200 h-4`} />
    </div>
  );
};

const NavigationMainMenuItemDesktopSkeleton = () => (
  <div className="animate-pulse rounded-md bg-slate-200 h-4 w-28" />
);

export const MainMenu = ({ component }: MainMenuContent) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="">
      <nav className="hidden lg:block fixed z-50 w-full">
        <div className="flex flex-col w-full bg-ov-primary">
          <div className="h-20 w-full flex justify-between items-center PageMainContainer px-4">
            {/* Business Logo */}
            <Link href="/">
              <img
                className="w-48"
                src={`/assets/main-menu/ruido-ovnisa-nav-logo-desktop.svg`}
              />
            </Link>
            {/* Business Logo */}
            <div className="flex justify-center items-center gap-8">
              {component?.phone_text ? (
                <ContactMainMenuItemDesktop
                  text={component.phone_text}
                  icon={ICONS_CONSTANTS_DESKTOP.PHONE}
                />
              ) : (
                <ContactMainMenuItemDesktopSkeleton width={64} />
              )}

              {component?.email_text ? (
                <ContactMainMenuItemDesktop
                  text={component.email_text}
                  icon={ICONS_CONSTANTS_DESKTOP.EMAIL}
                  url={`mailto:${component.email_text}`}
                />
              ) : (
                <ContactMainMenuItemDesktopSkeleton />
              )}
              {component?.whatsapp_link && component.whatsapp_text ? (
                <ContactMainMenuItemDesktop
                  text={component.whatsapp_text}
                  icon={ICONS_CONSTANTS_DESKTOP.WHATSAPP}
                  url={component.whatsapp_link}
                />
              ) : (
                <ContactMainMenuItemDesktopSkeleton />
              )}
              {component?.mercado_libre_link &&
              component?.mercado_libre_text ? (
                <ContactMainMenuItemDesktop
                  text={component.mercado_libre_text}
                  icon={ICONS_CONSTANTS_DESKTOP.MERCADO_LIBRE}
                  url={component.mercado_libre_link}
                />
              ) : (
                <ContactMainMenuItemDesktopSkeleton />
              )}
            </div>
          </div>
          <div className="bg-gradient-to-b from-ov-primaryLight to-ov-primary">
            <div className="h-12 w-full flex flex-row items-center justify-between PageMainContainer px-4">
              {component?.items?.length ? (
                component.items.map((item, index) => (
                  <NavigationMainMenuItemDesktop
                    key={`NavigationMainMenuItemDesktop_${index}`}
                    text={item.item_text}
                    url={item.item_link}
                  />
                ))
              ) : (
                <>
                  <NavigationMainMenuItemDesktopSkeleton />
                  <NavigationMainMenuItemDesktopSkeleton />
                  <NavigationMainMenuItemDesktopSkeleton />
                  <NavigationMainMenuItemDesktopSkeleton />
                  <NavigationMainMenuItemDesktopSkeleton />
                </>
              )}
              <div className="text-white text-lg w-8 ">
                <img src={`/assets/main-menu/search.svg`} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="block lg:hidden w-full">
        <div className="bg-gradient-to-b from-ov-primaryLight to-ov-primary h-20 w-full flex flex-row justify-between items-center">
          {/* Hamburguer Menu */}
          <div
            className="ml-10"
            onClick={() => {
              setOpen(!open);
              console.log("Hamburguer Menu Mobile State -->", open);
            }}
          >
            {/* TODO: Pedir Logo Menu Mobile */}
            <img
              className="w-7 h-7"
              src={`/assets/main-menu/TEST-HAMBURGUER.svg`}
            />
          </div>
          {/* Business Logo */}
          <Link href="/" className="w-32 h-20">
            <img
              className="w-48 h-20"
              src={`/assets/main-menu/ruido-ovnisa-nav-logo-desktop.svg`}
            />
          </Link>
          {/* Nav Mobile Items */}
          <div className="flex justify-center items-center mr-10 gap-2">
            {component?.phone_text ? (
              <ContactMainMenuItemMobile icon={ICONS_CONSTANTS_MOBILE.PHONE} />
            ) : null}
            {component?.email_text ? (
              <ContactMainMenuItemMobile
                icon={ICONS_CONSTANTS_MOBILE.EMAIL}
                url={`mailto:${component.email_text}`}
              />
            ) : null}
            {component?.whatsapp_link && component.whatsapp_text ? (
              <ContactMainMenuItemMobile
                icon={ICONS_CONSTANTS_MOBILE.WHATSAPP}
                url={component.whatsapp_link}
              />
            ) : null}
            {component?.mercado_libre_link && component?.mercado_libre_text ? (
              <ContactMainMenuItemMobile
                icon={ICONS_CONSTANTS_MOBILE.MERCADO_LIBRE}
                url={component.mercado_libre_link}
              />
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
};
