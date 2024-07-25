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

      <div className="content-homeSlide-desk px-4 flex items-center justify-center w-full">
        <div className="PageMainContainer lg:grid lg:grid-cols-3 lg:gap-3 ">
          <div className="flex items-center w-full">
            {title ? (
              <div className="headerTextContent">
                <p className="font-bold prose prose-h1:font-medium prose-h1:text-white text-2xl lg:text-4xl min-w-full xl:text-6xl mb-0 md:mb-2 text-left text-white lg:mb-3 xl:mb-10">
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
