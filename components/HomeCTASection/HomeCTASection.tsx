import React from "react";
import Image from "next/image";
import { loaderProp } from "@/lib/utils";
import { HomeSectionContent } from "@/types/components/HomeCtaSectionTypes";

export const HomeCTASection = ({ title }: HomeSectionContent) => {
  return (
    <div className="bg-ov-primary py-10 lg:py-20">
      <div className="PageMainContainer px-4">
        {title ? (
          <h3 className="text-white text-3xl font-bold mb-8">{title}</h3>
        ) : null}
      </div>
    </div>
  );
};
