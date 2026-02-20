import React from "react";
import Image from "next/image";
import { loaderProp } from "@/lib/utils";
import { BrandsSectionContent } from "../../types/components/BrandsSectionTypes";

export const BrandsSection = ({ title, brands }: BrandsSectionContent) => {
  return (
    <div className="py-10 lg:py-14">
      <h4 className="text-black text-center text-2xl font-bold mb-2">
        {title}
      </h4>
      <div className="bg-ov-primaryLight">
        <div className="PageMainContainer py-10 px-4">
          {brands && brands.length > 0 ? (
            <div className="relative overflow-hidden m-auto flex items-center h-40 border-ov-primaryLight">
              <div className="absolute z-10 left-0 top-0 bg-gradient-to-r from-ov-primaryLight to-transparent w-12 lg:w-28 h-40"></div>
              <div className="container-slides">
                {brands.map((brand, index) => (
                  <div key={"slides-1-" + brand.image?.data?.attributes?.name}>
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
                  </div>
                ))}
                {brands.map((brand, index) => (
                  <div key={"slides-2-" + brand.image?.data?.attributes?.name}>
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
                  </div>
                ))}
                {brands.map((brand, index) => (
                  <div key={"slides-3-" + brand.image?.data?.attributes?.name}>
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
                  </div>
                ))}
                {brands.map((brand, index) => (
                  <div key={"slides-4-" + brand.image?.data?.attributes?.name}>
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
                  </div>
                ))}
                {brands.map((brand, index) => (
                  <div key={"slides-5-" + brand.image?.data?.attributes?.name}>
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
                  </div>
                ))}
                {brands.map((brand, index) => (
                  <div key={"slides-6-" + brand.image?.data?.attributes?.name}>
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
                  </div>
                ))}
                {brands.map((brand, index) => (
                  <div key={"slides-7-" + brand.image?.data?.attributes?.name}>
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
                  </div>
                ))}
              </div>
              <div className="absolute z-10 right-0 top-0 bg-gradient-to-r from-transparent to-ov-primaryLight w-12 lg:w-28 h-40"></div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
