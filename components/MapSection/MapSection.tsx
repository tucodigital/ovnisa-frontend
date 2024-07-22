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
    <div className=" bg-gradient-to-b from-ov-primary to-ov-primaryLight bg-ov-primary py-10 lg:py-20 px-10 lg:px-28 flex flex-col w-full">
      {title && description ? (
        <div className="pt-2 lg:pt-8 pb-8 lg:pb-24  rounded-md flex flex-col lg:flex-row w-full items-center gap-12 lg:gap-64">
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
            <MapMarker top={5} right={62} info={"Informacion de este punto del mapa"} />
            <MapMarker top={15} right={43} info={"Informacion de este punto del mapa"} />
            <MapMarker top={20} right={62} info={"Informacion de este punto del mapa"} />
            <MapMarker top={28} right={80} info={"Informacion de este punto del mapa"} />
            <MapMarker top={32} right={56} info={"Informacion de este punto del mapa"} />
            <MapMarker top={38} right={38} info={"Informacion de este punto del mapa"} />
            <MapMarker top={42} right={80} info={"Informacion de este punto del mapa"} />
            <MapMarker top={46} right={58} info={"Informacion de este punto del mapa"} />
            <MapMarker top={54} right={83} info={"Informacion de este punto del mapa"} />
            <MapMarker top={65} right={72} info={"Informacion de este punto del mapa"} />
            <MapMarker top={70} right={89} info={"Informacion de este punto del mapa"} />
            <MapMarker top={77} right={68} info={"Informacion de este punto del mapa"} />
            <MapMarker top={97} right={64} info={"Informacion de este punto del mapa"} />
          </div>
        </div>
      ) : null}
      {brands.length > 0 ? (
        <div className="hidden lg:block py-12 px-16 bg-gray-100 rounded-md flex flex-col w-full">
          <div className="flex flex-row justify-between">
            {brands.map((brand, index) => (
              <div key={index} className="w-64 h-20 bg-white flex">
                <Image
                  alt={brand.image?.data?.attributes?.name}
                  src={brand.image?.data?.attributes?.url}
                  width={400}
                  height={200}
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
