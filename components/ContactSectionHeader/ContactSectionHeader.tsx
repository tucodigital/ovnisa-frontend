import React from "react";
import Image from "next/image";

import { loaderProp } from "@/lib/utils";

export const ContactSectionHeader = ({
  title,
  subtitle,
  image
}) => {
  return (
    <div className="w-full bg-gray-100 relative">
      <div className="homeSlide-desk hidden md:block ">
        <Image
          alt={image?.data?.attributes?.name}
          src={image?.data?.attributes?.url}
          fill
          loader={loaderProp}
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-ov-primary opacity-60"></div>

      <div className="absolute top-0 left-0 flex justify-center w-full h-full">
        <div className="flex w-full">
          <div className="flex pt-36 w-full">
            {title && subtitle ? (
              <div className="flex w-full flex-col items-center gap-4 text-center">
                <p className="lg:text-2xl xl:text-4xl mb-0  text-white font-semibold">
                  {title}
                </p>
                <p className=" text-white xl:text-2xl w-2/5">
                  {subtitle}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
