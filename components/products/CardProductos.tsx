"use client";

import Link from "next/link";
import Image from "next/image";
import { TagMarca } from "./TagMarca";
import { loaderProp } from "@/lib/utils";

interface CardProductos {
  nombre: string;
  imagen_principal: any;
  imagen_principal_alt: string;
  marca?: string;
  slug: string;
}

export const CardProductos = ({
  nombre,
  imagen_principal,
  imagen_principal_alt,
  marca,
  slug,
}: CardProductos) => {
  return (
    <div className="border border-gray-200 rounded-lg bg-white p-4 relative hover:shadow-lg transition duration-300">
      <Link href={`/productos/${slug}`}>
        {marca ? <TagMarca marca={marca} /> : null}
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
