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
      <img
        className="h-0 w-0 hidden"
        src="https://tracker.metricool.com/c3po.jpg?hash=62731136bb2f84cadefb41b4343a045d"
      />
      <nav className="hidden lg:block fixed z-50 w-full">
        <div className="flex flex-col w-full bg-ov-primary">
          <div className="h-20 w-full flex justify-between items-center PageMainContainer px-4">
            {/* Business Logo */}
            <Link href="/">
              <svg
                className="h-12 w-auto text-white"
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
