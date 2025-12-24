import React from "react";

import Image from "next/image";
import { loaderProp } from "@/lib/utils";
import {
  BusinessResumeContent,
} from "@/types/components/BusinessResumeTypes";

export const BusinessResume = ({
  title,
  over_title,
  items,
  cards,
  main_image,
}: BusinessResumeContent) => {
  return (
    <div className="   flex  flex-col w-full px-10 lg:px-28 pb-48 justify-between">
      {/* Header del componente */}
      <div className="bg-ov-primary flex w-full py-20 px-10 lg:px-16 gap-20 justify-between rounded-t-2xl">
        {/* Logo Marca */}
        <div className="w-2/6 flex items-center">
          <svg
            className="h-20 w-auto text-white"
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
        </div>
        {/* Contenedor Items Informativos */}
        <div className="flex gap-8 gap-y-8 lg:gap-y-12 w-4/6 justify-end items-end">
          {items.map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <Image
                src={item.icon.data.attributes.url}
                alt={
                  item.icon.data.attributes?.alternativeText ||
                  "Icono secciòn video."
                }
                width={50}
                height={50}
                loader={loaderProp}
              />
              <h6 className="font-black text-4xl lg:text-4xl text-white">
                {item.title}
              </h6>
              <p className=" font-bold text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Imagen Central */}
      <div className="w-full bg-gray-100 relative">
        <div className="homeSlide-desk hidden md:block ">
          <Image
            alt={main_image?.data?.attributes?.name}
            src={main_image?.data?.attributes?.url}
            fill
            loader={loaderProp}
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-ov-primary opacity-60"></div>

        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <div className="flex gap-4 lg:grid lg:grid-cols-2 lg:gap-3 w-full">
            <div className="flex items-center w-full">
              {title ? (
                <div className="  px-32 py-6 flex  w-full rounded-r-full flex-col">
                  <p className="   mb-0  text-white lg:text-xl font-light">
                    {over_title}
                  </p>
                  <p className="  text-xl lg:text-3xl xl:text-5xl mb-0  text-white font-semibold">
                    {title}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {/* Contenedor Cards */}
      <div className="grid grid-cols-3 justify-items-center -mt-24">
        {cards.map((card, index) => (
          <div
            className="w-96 h-96 flex justify-center relative rounded-2xl px-10"
            key={index}
          >
            <Image
              alt={
                card?.image?.data?.attributes?.alternativeText ||
                "Imagen de categoría"
              }
              src={card?.image?.data?.attributes?.url}
              fill
              className="object-cover rounded-2xl"
              loader={loaderProp}
            />
            <div className="absolute  bottom-6 w-full px-4">
              <div className="bg-white p-4 flex flex-col gap-2 h-32">
                <p className="text-xl font-bold text-ov-primary">{card.title}</p>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
