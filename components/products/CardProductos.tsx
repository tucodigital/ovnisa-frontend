import Link from "next/link";
import Image from "next/image";

interface CardProductos {
  nombre: string;
  imagen_principal: any;
  imagen_principal_alt: string;
  marca: string;
}

export const CardProductos = ({
  nombre,
  imagen_principal,
  imagen_principal_alt,
}: CardProductos) => {
  return (
    <div className="border rounded shadow-sm bg-white">
      <div className="w-full h-56 relative">
        <Image
          src={process.env.NEXT_PUBLIC_STRAPI_API_URL + imagen_principal}
          alt={imagen_principal_alt}
          sizes="500px"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <h3 className="font-bold text-gray-600">{nombre}</h3>
      {process.env.NEXT_PUBLIC_STRAPI_API_URL + imagen_principal}
    </div>
  );
};
