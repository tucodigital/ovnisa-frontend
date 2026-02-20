import React from "react";
import Image from "next/image";
import { loaderProp } from "@/lib/utils";
import { HomeSectionContent } from "@/types/components/HomeCtaSectionTypes";
import ReactMarkdown from "react-markdown";
import { link } from "fs";
import Link from "next/link";

export const HomeCTASection = ({
  title,
  subtitle,
  link_name,
  link,
  image,
}: HomeSectionContent) => {
  return (
    <div className="bg-ov-primary">
      <div className="PageMainContainer px-4">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
          <div className="lg:col-span-4 py-10 lg:py-20">
            {title ? (
              <h3 className="text-white text-2xl lg:text-4xl font-bold mb-8">
                {title}
              </h3>
            ) : null}

            {subtitle ? (
              <ReactMarkdown
                className="font-light prose prose-h2:font-light text-base xl:text-xl text-left text-white mb-8"
                children={subtitle}
              />
            ) : null}
            {link_name && link ? (
              <Link
                href={link}
                className={`bg-white text-ov-primary py-2 px-8 rounded-lg hover:bg-ov-primaryLight hover:text-white transform duration-300 ease-in-out`}
              >
                {link_name}
              </Link>
            ) : null}
          </div>
          <div className="lg:col-span-2">
            {image && image?.data?.attributes?.url ? (
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  loader={loaderProp}
                  src={image?.data?.attributes?.url}
                  alt={
                    image?.data?.attributes?.alternativeText ||
                    "Mapa ovnisa CTA home"
                  }
                  width={1000}
                  height={1000}
                  className="max-w-full h-auto"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
