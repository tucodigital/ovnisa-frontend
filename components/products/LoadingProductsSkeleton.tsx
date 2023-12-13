"use client";
import { TagMarcaSkeleton } from "@/types/productoTypes";

export const LoadingProductsSkeleton = ({ total }: TagMarcaSkeleton) => {
  const renderProductCardSkeleton = () => {
    const data = Array.from({ length: total }, (_, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-lg bg-white p-4"
      >
        <div className="w-full h-56 rounded bg-gray-200 mb-2 animate-pulse"></div>
        <div className="h-6 w-full rounded bg-gray-200 animate-pulse"></div>
      </div>
    ));

    return data;
  };

  return <>{renderProductCardSkeleton()}</>;
};
