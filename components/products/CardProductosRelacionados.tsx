"use client";

import Link from "next/link";
import Image from "next/image";
import { Categorias } from "@/app/types/productoTypes";

interface CardProductosRelacionados {
  nombre: string;
  imagen_principal: any;
  imagen_principal_alt: string;
  slug: string;
  categorias: Categorias;
}

const loaderProp = ({ src }: { src: string }) => {
  return src;
};

export const CardProductosRelacionados = ({
  nombre,
  imagen_principal,
  imagen_principal_alt,
  slug,
  categorias,
}: CardProductosRelacionados) => {
  return (
    <Link href={`/productos/${slug}`}>
      <div className="rounded-lg bg-gray-100 p-4 relative hover:shadow-lg transition duration-300 grid grid-cols-6 gap-4">
        <div className="w-full h-full relative rounded-lg col-span-2">
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
        </div>
        <div className="col-span-4">
          <h3 className="font-bold text-gray-900 text-lg">{nombre} dsad a dsada ds dsad a dsada ds</h3>
          {categorias.data.length > 0 ? (
            <p className="mt-1 mb-6">{categorias.data[0].attributes.nombre} </p>
          ) : null}
          <Link href={`/productos/${slug}`}>
            <button className="bg-gradient-to-b from-ov-primaryLight to-ov-primary text-white py-2 text-sm px-10 rounded-full">
              Ver Producto
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};
