import React, { useState } from "react";
import Image from "next/image";
import { BusinessPathItemType } from "../../types/components/BusinessPathTypes";
import { loaderProp } from "@/lib/utils";

export const BusinessPathAccordeonItem = ({
  id,
  title,
  description,
  icon,
}: BusinessPathItemType) => {
  const [itemOpen, setItemOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4 items-center">
          <Image
            src={icon.data.attributes.url}
            alt={
              icon.data.attributes?.alternativeText
            }
            width={55}
            height={55}
            loader={loaderProp}
          />
          <h6 className="font-bold text-xl">{title}</h6>
        </div>
        <Image
          src={
            !itemOpen
              ? "/assets/chrevron-down-accordeon.svg"
              : "/assets/chevron-up-accordeon.svg"
          }
          alt={
            !itemOpen
              ? "Icono Desplegar"
              : "Icono Colapsar"
          }
          width={45}
          height={45}
          loader={loaderProp}
          onClick={() => setItemOpen(!itemOpen)}
        />
      </div>
      {itemOpen ? (
        <div>
          <p className="text-xl font-regular">{description}</p>
        </div>
      ) : null}
      <div className="businessPathItemDivisor"></div>
    </div>
  );
};
