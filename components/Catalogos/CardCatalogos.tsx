"use client";

import Image from "next/image";
import { loaderProp } from "@/lib/utils";
import { CardCatalogosContent } from "@/types/catalogoTypes";
import Link from "next/link";
import { MainButton } from "../MainButton";

export const CardCatalogos = ({
  title,
  image,
  image_alt,
  file,
}: CardCatalogosContent) => {
  return (
    <div className="relative w-80">
      <div className=" h-80 lg:h-96 relative rounded-lg">
        <Image
          src={image}
          alt={image_alt}
          fill
          style={{
            objectFit: "cover",
            borderRadius: "0.5rem",
          }}
          loader={loaderProp}
        />
      </div>
      <div className="hidden relative -mt-16 lg:flex z-10 justify-center">
        <Link
          target="_blank"
          href={
            "https://www.correoargentino.com.ar/sites/default/files/f-202-fisica.pdf"
          }
        >
          <MainButton paddingX="px-10" paddingY="py-3" name="Descargar" />
        </Link>
      </div>

      <div className="flex mt-4 relative lg:hidden z-10 justify-center">
        <Link
          target="_blank"
          href={
            "https://www.correoargentino.com.ar/sites/default/files/f-202-fisica.pdf"
          }
        >
          <MainButton paddingX="px-10" paddingY="py-3" name="Descargar" />
        </Link>
      </div>
    </div>
  );
};
