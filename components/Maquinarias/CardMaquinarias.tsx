"use client";

import Link from "next/link";
import Image from "next/image";
import { loaderProp } from "@/lib/utils";
import { CardMaquinariasContent } from "../../types/components/MaquinariasTypes";

export const CardMaquinarias = ({
  nombre,
  imagen_principal,
  imagen_principal_alt,
  marca,
  slug,
}: CardMaquinariasContent) => {
  return (
    <Link href={`/maquinarias/${slug}`}>
      <div className="border-2 border-gray-200 rounded-lg bg-white p-4 relative hover:shadow-lg transition duration-300">
        <div className="w-full h-56 relative">
          <Image
            src={imagen_principal}
            alt={imagen_principal_alt}
            fill
            style={{
              objectFit: "contain",
            }}
            loader={loaderProp}
          />
        </div>
      </div>
      <h3 className="font-bold text-sm mt-1 text-gray-500">{nombre}</h3>
    </Link>
  );
};
