import React, { useState } from "react";

export const MapMarker = ({
  top,
  right,
  info,
}: {
  top: number;
  right: number;
  info: string;
}) => {
  const [openMarker, setOpenMarker] = useState(false);

  return (
    <div className={`absolute top-[${top}%] right-[${right}%]`} onMouseOver={() => setOpenMarker(true)} onMouseLeave={() => setOpenMarker(false)}>
      <div className="relative">
        <div className="bg-ov-primaryLight h-6 w-6 rounded-full flex items-center justify-center">
          <div className="bg-white h-4 w-4 rounded-full"></div>
        </div>
        <div className={`bg-white rounded-lg p-4 absolute ${openMarker ? "h-32 w-56 z-10" : "hidden"}`}>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};
