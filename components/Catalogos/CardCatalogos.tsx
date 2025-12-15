"use client";

import Image from "next/image";
import { loaderProp } from "@/lib/utils";
import { CardCatalogosContent } from "@/types/catalogoTypes";
import Link from "next/link";

export const CardCatalogos = ({
  title,
  image,
  image_alt,
  file,
}: CardCatalogosContent) => {
  return (
    <div className="w-full">
      <Link target="_blank" href={file}>
        <div className=" h-40 lg:h-56 relative rounded-lg">
          {image ? (
            <Image
              src={image}
              alt={image_alt}
              fill
              className="object-cover rounded-lg border-2 border-gray-300"
              loader={loaderProp}
            />
          ) : (
            <div className="bg-ov-primaryLight rounded w-full h-full flex items-center justify-center">
              <Image
                className="w-48 h-20 border-2 border-gray-200"
                src={`/assets/main-menu/ruido-ovnisa-nav-logo-desktop.svg`}
                alt="Ovnisa Logo Desktop"
                loader={loaderProp}
                width={0}
                height={0}
              />
            </div>
          )}
        </div>
        <p className="text-gray-600 uppercase text-xs font-semibold mt-2">{title}</p>
      </Link>
    </div>
  );
};
