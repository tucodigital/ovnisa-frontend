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
    <div className="w-full bg-gray-100 relative mt-20 lg:mt-32">
      {image_desktop ? (
        <div className="homeSlide-desk hidden md:block">
          <Image
            alt={image_desktop?.data?.attributes?.name}
            src={image_desktop?.data?.attributes?.url}
            fill
            loader={loaderProp}
            objectFit="cover"
            priority
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

      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
        <div className="flex gap-4 lg:grid lg:grid-cols-2 lg:gap-3 w-full">
          <div className="flex items-center w-full">
            {title ? (
              <div className="headerTextContent bg-ov-primaryLight pl-16 pr-6 py-6 flex items-center justify-end w-full rounded-r-full">
                <p className="max-w-lg lg:max-w-xl prose prose-h1:font-medium prose-h1:text-white text-xl lg:text-2xl lg:text-start xl:text-4xl mb-0 text-left text-white">
                  {title}
                </p>
              </div>
            ) : null}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
