"use client";

import Link from "next/link";
import Image from "next/image";
import { CardProductosRelacionadosContent } from "@/types/productoTypes";
import { loaderProp } from "@/lib/utils";

export const CardProductosRelacionados = ({
  nombre,
  imagen_principal,
  imagen_principal_alt,
  slug,
  categorias,
}: CardProductosRelacionadosContent) => {
  return (
    <div className="rounded-lg bg-gray-100 p-4 relative hover:shadow-lg transition duration-300 grid grid-cols-6 gap-4 h-full">
      <div className="w-full h-full relative rounded-lg col-span-2">
        <Link href={`/productos/${slug}`}>
          {imagen_principal ? (
            <Image
              src={imagen_principal}
              alt={imagen_principal_alt}
              fill
              style={{
                objectFit: "cover",
              }}
              className="rounded-lg"
              loader={loaderProp}
            />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </Link>
      </div>

      <div className="col-span-4">
        <Link href={`/productos/${slug}`}>
          <h3 className="font-bold text-gray-900 text-base xl:text-lg">
            {nombre}
          </h3>
          {categorias && categorias.data.length > 0 ? (
            <p className="mt-1 mb-6">{categorias.data[0].attributes.nombre} </p>
          ) : <div className="mt-1 mb-6 h-6"></div>}
        </Link>
        <Link href={`/productos/${slug}`}>
          <button className="bg-gradient-to-b from-ov-primaryLight to-ov-primary hover:to-blue-800 text-white py-2 text-sm px-10 rounded-full">
            Ver más
          </button>
        </Link>
      </div>
    </div>
  );
};
