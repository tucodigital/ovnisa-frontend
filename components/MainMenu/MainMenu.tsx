"use client";

import React from "react";
import { ContactMainMenuItemDesktop } from "./ContactMainMenuItemDesktop";
import { NavigationMainMenuItemDesktop } from "./NavigationMainMenuItemDesktop";
import Link from "next/link";

const ICONS_CONSTANTS = {
  PHONE: "/assets/main-menu/ruido-ovnisa-nav-icono-celular-desktop.svg",
  EMAIL: "/assets/main-menu/ruido-ovnisa-nav-icono-mail-desktop.svg",
  WHATSAPP: "/assets/main-menu/ruido-ovnisa-nav-icono-whatsapp-desktop.svg",
  MERCADO_LIBRE: "/assets/main-menu/ruido-ovnisa-nav-icono-meli-desktop.svg",
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

export const MainMenu = ({ component }: MainMenuContent) => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-ov-primary h-20 w-full flex justify-between items-center">
        {/* Business Logo */}
        <Link href="/">
          <img
            className="w-48 ml-56"
            src={`/assets/main-menu/ruido-ovnisa-nav-logo-desktop.svg`}
          />
        </Link>
        {/* Business Logo */}
        <div className="flex justify-center items-center mr-56 gap-8">
          {component?.phone_text ? (
            <ContactMainMenuItemDesktop
              text={component.phone_text}
              icon={ICONS_CONSTANTS.PHONE}
            />
          ) : null}
          {component?.email_text ? (
            <ContactMainMenuItemDesktop
              text={component.email_text}
              icon={ICONS_CONSTANTS.EMAIL}
              url={`mailto:${component.email_text}`}
            />
          ) : null}
          {component?.whatsapp_link && component.whatsapp_text ? (
            <ContactMainMenuItemDesktop
              text={component.whatsapp_text}
              icon={ICONS_CONSTANTS.WHATSAPP}
              url={component.whatsapp_link}
            />
          ) : null}
          {component?.mercado_libre_link && component?.mercado_libre_text ? (
            <ContactMainMenuItemDesktop
              text={component.mercado_libre_text}
              icon={ICONS_CONSTANTS.MERCADO_LIBRE}
              url={component.mercado_libre_link}
            />
          ) : null}
        </div>
      </div>
      <div className="bg-gradient-to-b from-ov-primaryLight to-ov-primary h-20 w-full flex flex-row items-center justify-between pr-56 pl-56">
        {component?.items
          ? component.items.map((item, index) => (
              <NavigationMainMenuItemDesktop
                key={`NavigationMainMenuItemDesktop_${index}`}
                text={item.item_text}
                url={item.item_link}
              />
            ))
          : null}
        <div className="text-white text-lg w-8 ">
          <img src={`/assets/main-menu/search.svg`} />
        </div>
      </div>
    </div>
  );
};
