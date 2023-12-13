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
    <div className="border border-gray-200 rounded-lg bg-white p-4 relative hover:shadow-lg transition duration-300">
      <Link href={`/maquinarias/${slug}`}>
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
        <h3 className="font-bold text-gray-600">{nombre}</h3>
      </Link>
    </div>
  );
};
