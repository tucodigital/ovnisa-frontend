import React from "react";
import ReactMarkdown from "react-markdown";

import Image from "next/image";

interface VideoSectionContentType {
  video_link: String;
  items: VideoSectionItemType[];
}

export interface VideoSectionItemType {
  id: number;
  title: String;
  description: String;
  icon: any;
}

const loaderProp = ({ src }: { src: string }) => {
  return src;
};

export const VideoSection = ({
  video_link,
  items,
}: VideoSectionContentType) => {
  return (
    <div className=" bg-white  flex flex-col lg:grid lg:grid-cols-2 lg:grid-flow-row w-full ">
      {/* py-4 pt-28 px-10 gap-4 */}
      <div className="bg-black videoContainerDesktop"></div>
      <div className="bg-gradient-to-b from-ov-primary to-ov-primaryLight  videoContainerDesktop">
        <div className="grid grid-flow-row grid-cols-2 pt-24 px-28 gap-y-12">
          {items.map((item, index) => (
            <div className="flex flex-col gap-3">
              <Image
                src={item.icon.data.attributes.url}
                alt={
                  "data.attributes.imagen_principal.data.attributes.alternativeText"
                }
                width={70}
                height={70}
                loader={loaderProp}
              />
              <h6 className="font-bold lg:text-6xl text-white">
                {item.title}
              </h6>
              <p className="lg:text-2xl font-bold text-white w-10">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
