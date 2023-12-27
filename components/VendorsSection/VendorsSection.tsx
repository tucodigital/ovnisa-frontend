import React from "react";

import Image from "next/image";
import Link from "next/link";
import { loaderProp } from "@/lib/utils";

export const VendorsSection = ({ title, vendors }) => {
  if (!vendors) return null;
  return (
    <div className="bg-white pt-8 pb-12 lg:pb-28 px-10 lg:px-28 flex gap-4 lg:gap-10 flex-col lg:flex-row w-full ">
      {/* Título de la página que se muestra solo en Mobile */}
      <h2 className="block lg:hidden text-ov-primaryLight font-bold text-2xl mb-4">
        {title}
      </h2>
      <div className="grid lg:grid-cols-4 gap-8 lg:gap-4 w-full">
        {vendors.map((vendor) => (
          <div className="rounded-lg lg:bg-gray-100 lg:p-4 relative lg:hover:shadow-lg lg:transition lg:duration-300 flex flex-row gap-4 align-items-center">
            <Image
              alt={"image_desktop?.data?.attributes?.alternativeText"}
              src={`https://placehold.co/400x400/orange/white`}
              width={150}
              height={150}
              loader={loaderProp}
              className="hidden lg:block"
            />

            <div>
              <Image
                alt={"image_desktop?.data?.attributes?.alternativeText"}
                src={`https://placehold.co/400x400/orange/white`}
                width={100}
                height={100}
                loader={loaderProp}
                className="block lg:hidden rounded-full border border-1 border-gray-700"
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
