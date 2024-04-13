"use client";

import React, { useState, useEffect } from "react";
import { ContactMainMenuItemDesktop } from "./ContactMainMenuItemDesktop";
import { NavigationMainMenuItemDesktop } from "./NavigationMainMenuItemDesktop";
import Link from "next/link";
import { ContactMainMenuItemMobile } from "./ContactMainMenuItemMobile";
import { NavigationMainMenuItemMobile } from "./NavigationMainMenuItemMobile";
import { MainMenuContent } from "../../types/components/MainMenuTypes";
import {
  ICONS_CONSTANTS_DESKTOP,
  ICONS_CONSTANTS_MOBILE,
} from "./MainMenuConstants";
import {
  ContactMainMenuItemDesktopSkeleton,
  NavigationMainMenuItemDesktopSkeleton,
} from "./MainMenuSkeletons";
import { fetchAPI } from "@/lib/api";
import Image from "next/image";
import { loaderProp } from "@/lib/utils";

export const MainMenu = ({
  showSearchOverlay,
  setShowSearchOverlay,
}: MainMenuContent) => {
  const [mainMenuContent, setMainMenuContent] = useState({
    email_text: "",
    phone_text: "",
    whatsapp_link: "",
    whatsapp_text: "",
    id: 0,
    mercado_libre_link: "",
    mercado_libre_text: "",
    items: [],
  });

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
      /* console.log("MainMenu Response -->", mainMenuResponse); */
      setMainMenuContent(mainMenuResponse?.data?.attributes?.component);
    } catch (e: any) {
      console.error(e.response);
      setMainMenuContent({
        email_text: "",
        phone_text: "",
        whatsapp_link: "",
        whatsapp_text: "",
        id: 0,
        mercado_libre_link: "",
        mercado_libre_text: "",
        items: [],
      });
    }
  };

  useEffect(() => {
    getMainMenu();
  }, []);

  return (
    <header className="">
      <nav className="hidden lg:block fixed z-50 w-full">
        <div className="flex flex-col w-full bg-ov-primary">
          <div className="h-20 w-full flex justify-between items-center PageMainContainer px-4">
            {/* Business Logo */}
            <Link href="/">
              <Image
                className="w-48"
                src={`/assets/main-menu/ruido-ovnisa-nav-logo-desktop.svg`}
                alt="Ovnisa Logo Desktop"
                loader={loaderProp}
                width={0}
                height={0}
              />
            </Link>
            {/* Business Logo */}
            <div className="flex justify-center items-center gap-8">
              {mainMenuContent?.phone_text ? (
                <ContactMainMenuItemDesktop
                  alt="Icono telefono"
                  text={mainMenuContent.phone_text}
                  icon={ICONS_CONSTANTS_DESKTOP.PHONE}
                />
              ) : (
                <ContactMainMenuItemDesktopSkeleton width={64} />
              )}

              {mainMenuContent?.email_text ? (
                <ContactMainMenuItemDesktop
                  text={mainMenuContent.email_text}
                  icon={ICONS_CONSTANTS_DESKTOP.EMAIL}
                  url={`mailto:${mainMenuContent.email_text}`}
                  alt="Icono email"
                />
              ) : (
                <ContactMainMenuItemDesktopSkeleton />
              )}
              {mainMenuContent?.whatsapp_link &&
              mainMenuContent.whatsapp_text ? (
                <ContactMainMenuItemDesktop
                  text={mainMenuContent.whatsapp_text}
                  icon={ICONS_CONSTANTS_DESKTOP.WHATSAPP}
                  url={mainMenuContent.whatsapp_link}
                  alt="Icono whatsapp"
                />
              ) : (
                <ContactMainMenuItemDesktopSkeleton />
              )}
              {mainMenuContent?.mercado_libre_link &&
              mainMenuContent?.mercado_libre_text ? (
                <ContactMainMenuItemDesktop
                  text={mainMenuContent.mercado_libre_text}
                  icon={ICONS_CONSTANTS_DESKTOP.MERCADO_LIBRE}
                  url={mainMenuContent.mercado_libre_link}
                  alt="Icono mercado libre"
                />
              ) : (
                <ContactMainMenuItemDesktopSkeleton />
              )}
            </div>
          </div>
          <div className="bg-gradient-to-b from-ov-primaryLight to-ov-primary">
            <div className="h-12 w-full flex flex-row items-center justify-between max-w-5xl m-auto px-4">
              {mainMenuContent?.items?.length && !showSearchOverlay
                ? mainMenuContent.items.map((item, index) => (
                    <NavigationMainMenuItemDesktop
                      key={`NavigationMainMenuItemDesktop_${index}`}
                      text={item.item_text}
                      url={item.item_link}
                    />
                  ))
                : null}
              {mainMenuContent?.items?.length && showSearchOverlay ? (
                <input
                  autoFocus
                  value={inputValue}
                  className="w-full rounded-md mr-8 px-2 h-8 outline-none"
                  type="text"
                  placeholder="Buscar..."
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setInputValue("");
                      setShowSearchOverlay(false);
                    }
                    if (e.key === "Enter") {
                      setShowSearchOverlay(false);
                      window.location.href = `/productos?s=${inputValue}`;
                    }
                  }}
                />
              ) : null}
              {!mainMenuContent?.items?.length && !showSearchOverlay ? (
                <>
                  <NavigationMainMenuItemDesktopSkeleton />
                  <NavigationMainMenuItemDesktopSkeleton />
                  <NavigationMainMenuItemDesktopSkeleton />
                  <NavigationMainMenuItemDesktopSkeleton />
                  <NavigationMainMenuItemDesktopSkeleton />
                </>
              ) : null}
              <div
                className="w-8 cursor-pointer text-gray-300 hover:text-white transition duration-300"
                onClick={() => setShowSearchOverlay(!showSearchOverlay)}
              >
                {showSearchOverlay ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="block lg:hidden fixed z-50 w-full">
        <div className="bg-gradient-to-b from-ov-primaryLight to-ov-primary h-20 w-full flex flex-row justify-between items-center text-white px-4">
          {/* Hamburguer Menu */}
          <div
            className=""
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* TODO: Pedir Logo Menu Mobile */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {/* Business Logo */}
          <Link href="/" className="w-32 h-20">
          <Image
                className="w-48 h-20"
                src={`/assets/main-menu/ruido-ovnisa-nav-logo-desktop.svg`}
                alt="Ovnisa Logo Mobile"
                loader={loaderProp}
                width={0}
                height={0}
              />
          </Link>
          {/* Nav Mobile Items */}
          <div className="flex justify-center items-center gap-2">
            {mainMenuContent?.phone_text ? (
              <ContactMainMenuItemMobile
                icon={ICONS_CONSTANTS_MOBILE.PHONE}
                alt="Icono telefono"
              />
            ) : null}
            {mainMenuContent?.email_text ? (
              <ContactMainMenuItemMobile
                icon={ICONS_CONSTANTS_MOBILE.EMAIL}
                url={`mailto:${mainMenuContent.email_text}`}
                alt="Icono email"
              />
            ) : null}
            {mainMenuContent?.whatsapp_link && mainMenuContent.whatsapp_text ? (
              <ContactMainMenuItemMobile
                icon={ICONS_CONSTANTS_MOBILE.WHATSAPP}
                url={mainMenuContent.whatsapp_link}
                alt="Icono whatsapp"
              />
            ) : null}
            {mainMenuContent?.mercado_libre_link &&
            mainMenuContent?.mercado_libre_text ? (
              <ContactMainMenuItemMobile
                icon={ICONS_CONSTANTS_MOBILE.MERCADO_LIBRE}
                url={mainMenuContent.mercado_libre_link}
                alt="Icono mercado libre"
              />
            ) : null}
          </div>
        </div>
        {open ? (
          <div className=" bg-ov-primary pt-5 pb-16 px-8 w-full flex flex-col gap-6 justify-between items-center absolute z-10">
            <div className="w-full bg-slate-200 h-10 px-3 flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <input
                value={inputValue}
                className="w-full bg-slate-200 rounded-md h-8 outline-none"
                type="text"
                placeholder="Buscar..."
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setInputValue("");
                  }
                  if (e.key === "Enter") {
                    window.location.href = `/productos?s=${inputValue}`;
                  }
                }}
              />
            </div>
            <div className="w-full flex flex-col items-start justify-between PageMainContainer">
              {mainMenuContent?.items?.length
                ? mainMenuContent.items.map((item, index) => (
                    <NavigationMainMenuItemMobile
                      key={`NavigationMainMenuItemDesktop_${index}`}
                      text={item.item_text}
                      url={item.item_link}
                      separator={mainMenuContent.items.length - 1 !== index}
                      setOpen={setOpen}
                    />
                  ))
                : null}
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
};
