import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

import Image from "next/image";
import { loaderProp } from "@/lib/utils";
import { VideoSectionContent } from "@/types/components/VideoSectionTypes";

export const VideoSection = ({ video_link, items }: VideoSectionContent) => {
  /* Lígoca para obtener el ID del video a partir del link */
  const videoURL = new URL(video_link)
  const videoSearchParams = new URLSearchParams(videoURL?.search)
  const videoID = videoSearchParams.get('v')
  
  return (
    <div className=" bg-gradient-to-b from-ov-primary to-ov-primaryLight  flex flex-col lg:grid lg:grid-cols-2 lg:grid-flow-row w-full ">
      {video_link ? (
        <div className="bg-gradient-to-b from-ov-primary to-ov-primaryLight videoContainer">
          <LiteYouTubeEmbed
            id={videoID}
            wrapperClass="yt-main-img"
            playerClass="lty-playbtn"
            title="Video Institucional Ovnisa"
            iframeClass="yt-main-iframe"
          />
        </div>
      ) : null}
      <div className="bg-gradient-to-b from-ov-primary to-ov-primaryLight  videoItemsContainer">
        <div className="grid grid-flow-row grid-cols-2 pt-12 lg:pt-20 px-8 lg:px-28 gap-y-8 lg:gap-y-12">
          {items.map((item, index) => (
            <div className="flex flex-col gap-3">
              <Image
                src={item.icon.data.attributes.url}
                alt={item.icon.data.attributes?.alternativeText || "Icono secciòn video."}
                width={70}
                height={70}
                loader={loaderProp}
              />
              <h6 className="font-bold text-4xl lg:text-6xl text-white">
                {item.title}
              </h6>
              <p className="text-xl lg:text-2xl font-bold text-white w-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
