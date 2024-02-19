"use client";

import Link from "next/link";
import Image from "next/image";
import { TagMarca } from "./TagMarca";
import { loaderProp } from "@/lib/utils";
import { CardProductosContent } from "@/types/productoTypes";

export const CardProductos = ({
  nombre,
  imagen_principal,
  imagen_principal_alt,
  marca,
  slug,
}: CardProductosContent) => {
  return (
    <div className="border border-gray-200 rounded-lg bg-white p-4 relative hover:shadow-lg transition duration-300">
      <Link href={`/productos/${slug}`}>
        {marca ? <TagMarca marca={marca} /> : null}
        <div className="w-full h-56 relative mb-2">
          {imagen_principal !== "" ? (
            <Image
              src={imagen_principal}
              alt={imagen_principal_alt}
              fill
              style={{
                objectFit: "contain",
              }}
              loader={loaderProp}
            />
          ) : (
            <div className="bg-ov-primaryLight rounded w-full h-full flex items-center justify-center">
              <Image
                className="w-48 h-20"
                src={`/assets/main-menu/ruido-ovnisa-nav-logo-desktop.svg`}
                alt="Ovnisa Logo Desktop"
                loader={loaderProp}
                width={0}
                height={0}
              />
            </div>
          )}
        </div>
        <h3 className="font-bold text-gray-600">{nombre}</h3>
      </Link>
    </div>
  );
};
