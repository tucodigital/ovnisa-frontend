import React from "react";
import Image from "next/image";
import { loaderProp } from "@/lib/utils";
import { MapSectionContent } from "../../types/components/MapSectionTypes";
import { MapMarker } from "./MapMarker";

export const MapSection = ({
  title,
  description,
  brands,
}: MapSectionContent) => {
  return (
    <div className="bg-gradient-to-b from-ov-primary to-ov-primaryLight bg-ov-primary py-10 lg:py-20">
      <div className="PageMainContainer px-4">
        {title && description ? (
          <div className="pt-2 xl:pt-8 pb-8 xl:pb-24  rounded-md flex flex-col xl:flex-row w-full items-center gap-12 xl:gap-64">
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
            <div className="mr-12 lg:mr-0 relative">
              <Image
                alt={"image_desktop?.data?.attributes?.alternativeText"}
                src={`/assets/ruido-ovnisa-mapa-argentina-desktop.svg`}
                width={350}
                height={350}
                objectFit="contain"
                loader={loaderProp}
              />
              <MapMarker
                top={32}
                right={58}
                info={""}
                alt="Ovnisa en Córdoba"
                image="/assets/imgmapa/cordoba.JPG"
              />
              <MapMarker
                top={34}
                right={42}
                info={""}
                alt="Ovnisa en Santa Fe"
                image="/assets/imgmapa/santa-fe.jpg"
              />
              <MapMarker
                top={16}
                right={70}
                info={""}
                alt="Ovnisa en Catamarca"
                image="/assets/imgmapa/catamarca.jpg"
              />
              <MapMarker
                top={4}
                right={56}
                info={""}
                alt="Ovnisa en Salta"
                image="/assets/imgmapa/salta.jpg"
              />
              <MapMarker
                top={29}
                right={79}
                info={""}
                alt="Ovnisa en San Juan"
                image="/assets/imgmapa/sanjuan.jpg"
              />
              <MapMarker
                top={53}
                right={81}
                info={""}
                alt="Ovnisa en San Neuquén"
                image="/assets/imgmapa/neuquen.jpg"
              />
              <MapMarker
                top={57}
                right={72}
                info={""}
                alt="Ovnisa en Rio Negro"
                image="/assets/imgmapa/rionegro.jpg"
              />
            </div>
          </div>
        ) : null}
        {brands.length > 0 ? (
          <div className="hidden lg:flex py-12 px-16 bg-gray-100 rounded-md  flex-col w-full">
            <div className="flex gap-4 flex-row justify-between">
              {brands.map((brand, index) => (
                <div key={index} className="w-64 h-20 bg-white flex rounded">
                  <Image
                    alt={brand.image?.data?.attributes?.name}
                    src={brand.image?.data?.attributes?.url}
                    width={400}
                    height={200}
                    objectFit="contain"
                    className="rounded p-2"
                    loader={loaderProp}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
