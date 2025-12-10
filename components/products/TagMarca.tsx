"use client";

import { TagMarcaContent } from "@/types/productoTypes";

export const TagMarca = ({ marca }: TagMarcaContent) => {
  switch (marca) {
    case "Ovniflex":
      return (
        <div className="absolute top-3 right-3 z-20">
          <div className="bg-ov-primaryLight rounded text-white px-3 py-1">
            <h4 className="font-medium uppercase text-[10px]">{marca}</h4>
          </div>
        </div>
      );
    case "Mima":
      return (
        <div className="absolute top-3 right-3 z-20">
          <div className="bg-red-600 rounded text-white px-3 py-1">
            <h4 className="font-medium uppercase text-[10px]">{marca}</h4>
          </div>
        </div>
      );
    case "Mr. Bond":
      return (
        <div className="absolute top-3 right-3 z-20">
          <div className="bg-cyan-600 rounded text-white px-3 py-1">
            <h4 className="font-medium uppercase text-[10px]">{marca}</h4>
          </div>
        </div>
      );
    default:
      return (
        <div className="absolute top-3 right-3 z-20">
          <div className="bg-gray-200 rounded text-gray-700 px-3 py-1">
            <h4 className="font-medium uppercase text-[10px]">{marca}</h4>
          </div>
        </div>
      );
  }
};
