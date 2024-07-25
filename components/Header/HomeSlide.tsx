import React from "react";
import Image from "next/image";

import { loaderProp } from "@/lib/utils";
import { SlideContent } from "../../types/components/HeaderTypes";

export default function HomeSlide({
  title,
  image_mobile,
  image_desktop,
}: SlideContent) {
  return (
    <div className="w-full bg-gray-100 relative">
      {image_desktop ? (
        <div className="homeSlide-desk hidden md:block">
          <Image
            alt={image_desktop?.data?.attributes?.name}
            src={image_desktop?.data?.attributes?.url}
            fill
            loader={loaderProp}
          />
        </div>
      ) : null}
      {image_mobile ? (
        <div className="homeSlide-mobile block md:hidden">
          <Image
            alt={image_mobile?.data?.attributes?.name}
            src={image_mobile?.data?.attributes?.url}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ) : null}

      <div className="content-homeSlide-desk flex items-center">
        <div className="mx-auto px-10 md:px-4 lg:grid lg:grid-cols-3 lg:gap-3 w-full">
          <div className="flex items-center">
            {title ? (
              <div className="headerTextContent">
                <p className="font-bold prose prose-h1:font-medium prose-h1:text-white text-2xl lg:text-4xl xl:text-6xl lg:mb-2 text-left text-white lg:mb-3 xl:mb-10">
                  {title}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
