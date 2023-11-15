import Link from "next/link";
import Image from "next/image";
import { ServicioAttributes } from "@/app/types/serviciosTypes";

const loaderProp = ({ src }: { src: string }) => {
  return src;
};

export const ServicioView = ({
  nombre,
  imagen_principal,
  slug,
  descripcion,
}: ServicioAttributes) => {
  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      <div className="w-full h-56 relative rounded shadow">
        {imagen_principal ? (
          <Image
            src={process.env.NEXT_PUBLIC_STRAPI_API_URL + imagen_principal}
            alt={nombre}
            fill
            style={{
              objectFit: "contain",
            }}
            loader={loaderProp}
          />
        ) : null}
      </div>
      <div>
        <h3 className="font-bold text-gray-800 text-2xl xl:text-4xl">
          {nombre}
        </h3>
      </div>
    </div>
  );
};
