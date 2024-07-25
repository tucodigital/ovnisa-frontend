import React, { useState } from "react";
import Image from "next/image";

export const MapMarker = ({
  top,
  right,
  info,
  image,
  alt,
}: {
  top: number;
  right: number;
  info: string;
  image: string;
  alt: string;
}) => {
  const [openMarker, setOpenMarker] = useState(false);

  return (
    <div
      className="absolute"
      style={{ top: `${top}%`, right: `${right}%` }}
      onMouseOver={() => setOpenMarker(true)}
      onMouseLeave={() => setOpenMarker(false)}
    >
      <div className="relative">
        <div className="bg-ov-primaryLight h-6 w-6 rounded-full flex items-center justify-center">
          <div className="bg-white h-4 w-4 rounded-full"></div>
        </div>
        <div
          className={`bg-white rounded-lg p-4 absolute ${
            openMarker ? "h-auto w-56 z-10" : "hidden"
          }`}
        >
          {info ? <p className="mb-4">{info}</p> : null}
          {image ? (
            <div className="relative">
              <Image
                src={image}
                alt={alt}
                height={200}
                width={200}
                className="object-cover object-center"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
