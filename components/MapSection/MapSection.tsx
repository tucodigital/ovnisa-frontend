import React from "react";
import Image from "next/image";

interface MapSectionContent {
  /* id: number; */
  title: String;
  description: String;
  brands: BrandContent[];
}

interface BrandContent {
  title: String;
  image: any;
}

const loaderProp = ({ src }: { src: string }) => {
  return src;
};

export const MapSection = ({
  title,
  description,
  brands,
}: MapSectionContent) => {
  console.log(brands);
  return (
    <div className=" bg-gradient-to-b from-ov-primary to-ov-primaryLight bg-ov-primary py-20 px-56 flex flex-col w-full">
      {title && description ? (
        <div className="pt-8 pb-24  rounded-md flex flex-row w-full items-center gap-64">
          <div className="flex flex-col gap-8 max-w-xl">
            <Image
              alt={"image_desktop?.data?.attributes?.alternativeText"}
              src={`/assets/main-menu/ruido-ovnisa-nav-logo-desktop.svg`}
              width={240}
              height={240}
              objectFit="contain"
              loader={loaderProp}
            />

            <h3 className="text-white text-3xl font-bold">{title}</h3>
            <p className="text-white text-lg">{description}</p>
          </div>
          <div>
            <Image
              alt={"image_desktop?.data?.attributes?.alternativeText"}
              src={`/assets/ruido-ovnisa-mapa-argentina-desktop.svg`}
              width={350}
              height={350}
              objectFit="contain"
              loader={loaderProp}
            />
          </div>
        </div>
      ) : null}
      {brands.length > 0 ? (
        <div className="py-12 px-16 bg-gray-100 rounded-md flex flex-col w-full">
          <div className="flex flex-row justify-between">
            {brands.map((brand, index) => (
              <div className="w-64 border border-gray-500 h-20 bg-white flex">
                <Image
                  alt={"image_desktop?.data?.attributes?.alternativeText"}
                  src={brand.image?.data?.attributes?.url}
                  width={1200}
                  height={1200}
                  objectFit="contain"
                  loader={loaderProp}
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
