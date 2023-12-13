"use client";

import React, { useState } from "react";
import { ContactMainMenuItemDesktop } from "./ContactMainMenuItemDesktop";
import { NavigationMainMenuItemDesktop } from "./NavigationMainMenuItemDesktop";
import Link from "next/link";
import { ContactMainMenuItemMobile } from "./ContactMainMenuItemMobile";
import { NavigationMainMenuItemMobile } from "./NavigationMainMenuItemMobile";
import { MainMenuContent } from "./MainMenuTypes";
import { ICONS_CONSTANTS_DESKTOP, ICONS_CONSTANTS_MOBILE } from "./MainMenuConstants";
import { ContactMainMenuItemDesktopSkeleton, NavigationMainMenuItemDesktopSkeleton } from "./MainMenuSkeletons";

export const MainMenu = ({
  component,
  showSearchOverlay,
  setShowSearchOverlay,
}: MainMenuContent) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
              {component?.items?.length && !showSearchOverlay
                ? component.items.map((item, index) => (
                    <NavigationMainMenuItemDesktop
                      key={`NavigationMainMenuItemDesktop_${index}`}
                      text={item.item_text}
                      url={item.item_link}
                    />
                  ))
                : null}
              {component?.items?.length && showSearchOverlay ? (
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
              {!component?.items?.length && !showSearchOverlay ? (
                <>
                  <NavigationMainMenuItemDesktopSkeleton />
                  <NavigationMainMenuItemDesktopSkeleton />
                  <NavigationMainMenuItemDesktopSkeleton />
                  <NavigationMainMenuItemDesktopSkeleton />
                  <NavigationMainMenuItemDesktopSkeleton />
                </>
              ) : null}
              <div
                className="w-8 cursor-pointer"
                onClick={() => setShowSearchOverlay(!showSearchOverlay)}
              >
                <img src={`/assets/ruido-search-desktop.svg`} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="block lg:hidden fixed z-50 w-full">
        <div className="bg-gradient-to-b from-ov-primaryLight to-ov-primary h-20 w-full flex flex-row justify-between items-center">
          {/* Hamburguer Menu */}
          <div
            className="ml-10"
            onClick={() => {
              setOpen(!open);
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
        {open ? (
          <div className=" bg-ov-primary pt-5 pb-16 px-8 w-full flex flex-col gap-6 justify-between items-center absolute z-10">
            <div className="w-full bg-slate-200 h-10 px-3 flex flex-row items-center gap-2">
              <img className="w-7" src={`/assets/ruido-search-mobile.svg`} />
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
              {component?.items?.length
                ? component.items.map((item, index) => (
                    <NavigationMainMenuItemMobile
                      key={`NavigationMainMenuItemDesktop_${index}`}
                      text={item.item_text}
                      url={item.item_link}
                      separator={component.items.length -1 !== index}
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
