import React from "react";
import Image from "next/image";
import { loaderProp } from "@/lib/utils";
import { BrandsSectionContent } from "../../types/components/BrandsSectionTypes";

export const BrandsSection = ({
  title,
  brands,
}: BrandsSectionContent) => {
  return (
    <div className="pt-10 lg:pt-14">
      <h4 className="text-black text-center text-2xl font-bold mb-2">{title}</h4>
      <div className="PageMainContainer bg-ov-primaryLight px-4">
        
        {brands.length > 0 ? (
          <div className="hidden lg:flex py-12 px-16 flex-col w-full">
            <div className="flex gap-4 flex-row justify-between">
              {brands.map((brand, index) => (
                <div key={index} className="w-64 h-20 flex">
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
