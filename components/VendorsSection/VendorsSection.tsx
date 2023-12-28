import React from "react";

import Image from "next/image";
import Link from "next/link";
import { loaderProp } from "@/lib/utils";

export const VendorsSection = ({ title, vendors }) => {
  if (!vendors) return null;
  return (
    <div className="bg-white pt-8 pb-12 lg:pb-28 px-10 lg:px-28 flex gap-4 lg:gap-10 flex-col lg:flex-row w-full ">
      {/* Título de la página que se muestra solo en Mobile según el diseño */}
      <h2 className="block lg:hidden text-ov-primaryLight font-bold text-2xl mb-4">
        {title}
      </h2>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-4 w-full">
        {vendors.map((vendor) => (
          <div className="rounded-lg lg:bg-gray-100 lg:p-4 relative lg:hover:shadow-lg lg:transition lg:duration-300 flex flex-row gap-4 align-items-center">
            <div className="items-center hidden lg:flex">
              <Image
                alt={vendor?.avatar?.data?.attributes?.alternativeText}
                src={vendor?.avatar?.data?.attributes?.url}
                width={100}
                height={100}
                objectFit="fill"
                loader={loaderProp}
                className="w-32 h-32"
              />
            </div>

            <div className="flex lg:hidden items-center">
              <Image
                alt={vendor?.avatar?.data?.attributes?.alternativeText}
                src={vendor?.avatar?.data?.attributes?.url}
                width={100}
                height={100}
                objectFit="fill"
                loader={loaderProp}
                className="rounded-full border border-1 border-gray-700 w-32 h-32"
              />
            </div>
            <div className="flex flex-col lg:gap-1 justify-center">
              <p className="font-bold lg:text-lg">{vendor.name}</p>
              <p className="lg:text-lg">{vendor.role}</p>
              <p className="text-sm lg:text-regular font-bold">
                {vendor.email}
              </p>
              {vendor.linkedin_link ? (
                <Link href={`${vendor.linkedin_link}`} target="_blank">
                  <Image
                    alt={`Link a Linkedin de vendedor`}
                    src={`/assets/contacto/ruido-ovnisa-contacto-icono-linkedin-desktop.svg`}
                    width={100}
                    height={100}
                    objectFit="fill"
                    loader={loaderProp}
                    className="h-8 w-8 lg:h-6 lg:w-6 mt-2"
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
