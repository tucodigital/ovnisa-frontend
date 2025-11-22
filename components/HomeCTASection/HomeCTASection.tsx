import React from "react";
import Image from "next/image";
import { loaderProp } from "@/lib/utils";
import { HomeSectionContent } from "@/types/components/HomeCtaSectionTypes";
import ReactMarkdown from "react-markdown";

export const HomeCTASection = ({ title, subtitle }: HomeSectionContent) => {
  return (
    <div className="bg-ov-primary py-10 lg:py-20">
      <div className="PageMainContainer px-4">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          <div className="lg:col-span-4">
            {title ? (
              <h3 className="text-white text-3xl font-bold mb-8">{title}</h3>
            ) : null}

            {subtitle ? (
              <ReactMarkdown
                className="font-light prose prose-h2:font-light text-lg xl:text-xl text-left text-white mb-2"
                children={subtitle}
              />
            ) : null}
          </div>
          <div className="lg:col-span-2"></div>
        </div>
      </div>
    </div>
  );
};
