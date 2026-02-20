import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { ServicioAttributes } from "@/types/serviciosTypes";
import ReactMarkdown from "react-markdown";
import { CardMaquinarias } from "../Maquinarias/CardMaquinarias";
import { loaderProp } from "@/lib/utils";
import { MainButton } from "../MainButton";

export const ServicioView = ({
  nombre,
  imagen_principal,
  slug,
  descripcion,
  maquinarias,
}: ServicioAttributes) => {
  return (
    <>
      <div className="p-4 lg:grid lg:grid-cols-2 gap-10">
        {/* <div className="MainProductImage rounded-lg relative w-full mb-4 lg:mb-0">
          {imagen_principal ? (
            <Image
              src={imagen_principal}
              alt={nombre}
              fill
              className="border rounded-lg"
              style={{
                objectFit: "contain",
              }}
              priority
              loader={loaderProp}
            />
          ) : null}
        </div> */}
        <div>
          <p className="text-xs text-gray-500">Linea de servicios</p>
          <h1 className="text-2xl font-bold text-black mb-2">
            {nombre}
          </h1>
          {descripcion ? (
            <div className="mb-6">
              <ReactMarkdown
                className="font-regular text-gray-800 prose prose-invert"
                children={descripcion}
              />
            </div>
          ) : null}
          <Link href={`/contacto?m=Servicio ${nombre}`}>
            <MainButton paddingX="px-8" paddingY="py-1" name="Contactanos" />
          </Link>
        </div>
      </div>
      {maquinarias?.data && maquinarias?.data?.length > 0 ? (
        <div className="mt-2 p-4">
          <div className="lg:grid lg:grid-cols-3 gap-4">
            {maquinarias.data.map((maq) => (
              <Fragment key={maq.id}>
                <CardMaquinarias
                  nombre={maq.attributes.nombre}
                  imagen_principal={
                    maq.attributes.imagen_principal.data.attributes.url
                  }
                  slug={maq.attributes.slug}
                  imagen_principal_alt={
                    maq.attributes.imagen_principal.data.attributes.name
                  }
                />
              </Fragment>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
