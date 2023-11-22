import React from "react";
import Image from "next/image";

import { Slide } from "./Header";

const loaderProp = ({ src }: { src: string }) => {
  return src;
};

export default function HomeSlide({
  title,
  image_mobile,
  image_desktop,
}: Slide) {
  return (
    <div className="w-full bg-gray-100 relative">
      {image_desktop ? (
        <div className="homeSlide-desk">
          <Image
            alt={"image_desktop?.data?.attributes?.alternativeText"}
            src={image_desktop?.data?.attributes?.url}
            fill
            /* objectFit='contain' */
            loader={loaderProp}
          />
        </div>
      ) : null}
      {image_mobile ? (
        <div className="homeSlide-mobile">
          <Image
            alt={image_mobile?.data?.attributes?.alternativeText}
            src={image_mobile?.data?.attributes?.url}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ) : null}

      <div className="content-homeSlide-desk flex items-center">
        <div className="mx-auto px-4 lg:grid lg:grid-cols-3 lg:gap-3 w-full">
          <div className="flex justify-center items-center ">
            {title ? (
              <div className="headerTextContent">
                <p className="font-bold prose prose-h1:font-medium prose-h1:text-white text-4xl xl:text-6xl mb-2 text-center lg:text-left text-white lg:mb-3 xl:mb-10">
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
