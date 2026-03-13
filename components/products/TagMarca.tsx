"use client";

import { TagMarcaContent } from "@/types/productoTypes";

export const TagMarca = ({ marca }: TagMarcaContent) => {
  return (
    <div className="absolute top-3 right-3 z-20">
      <div className="bg-ov-primaryLight rounded text-white px-3 py-1">
        <h4 className="font-medium uppercase text-[10px]">{marca}</h4>
      </div>
    </div>
  );
};
