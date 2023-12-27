import React from "react";

import Image from "next/image";
import Link from "next/link";
import { loaderProp } from "@/lib/utils";

export const VendorsSection = ({ title, vendors }) => {
  if (!vendors) return null;
  return (
    <div className="bg-white pt-8 pb-12 lg:pb-28 px-10 lg:px-28 flex gap-4 lg:gap-10 flex-col lg:flex-row w-full ">
      {/* Título de la página que se muestra solo en Mobile */}
      <h2 className="block md:hidden text-ov-primaryLight font-bold text-2xl mb-4">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-4 w-full">
        {vendors.map((vendor) => (
          <div className="rounded-lg md:bg-gray-100 md:p-4 relative md:hover:shadow-lg md:transition md:duration-300 flex flex-row gap-4 align-items-center">
            <Image
              alt={vendor?.avatar?.data?.attributes?.alternativeText}
              src={vendor?.avatar?.data?.attributes?.url}
              width={100}
              height={100}
              objectFit="fill"
              loader={loaderProp}
              className="hidden md:block w-32 h-32"
            />

            <div className="flex items-center">
              <Image
                alt={vendor?.avatar?.data?.attributes?.alternativeText}
                src={vendor?.avatar?.data?.attributes?.url}
                width={100}
                height={100}
                objectFit="fill"
                loader={loaderProp}
                className="block md:hidden rounded-full border border-1 border-gray-700 w-32 h-32"
              />
            </div>
            <div className="flex flex-col lg:gap-1 justify-center">
              <p className="font-bold text-lg">{vendor.name}</p>
              <p className="text-lg">{vendor.role}</p>
              <p className="font-bold">{vendor.email}</p>
              {vendor.linkedin_link ? (
                <Link href={`${vendor.linkedin_link}`} target="_blank">
                  <img
                    className="h-7 mt-2"
                    src="/assets/contacto/ruido-ovnisa-contacto-icono-linkedin-desktop.svg"
                  />
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
