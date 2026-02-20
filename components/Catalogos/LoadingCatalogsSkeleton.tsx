"use client";
import { SkeletonContent } from "@/types/productoTypes";

export const LoadingCatalogsSkeleton = ({ total }: SkeletonContent) => {
  const renderCatalogsCardSkeleton = () => {
    const data = Array.from({ length: total }, (_, index) => (
      <div
        key={index}
        className="rounded-2xl bg-white w-full items-center"
      >
        <div className="w-full h-80 lg:h-64 rounded-2xl bg-gray-200 animate-pulse"></div>
        <div className="block mt-4 h-16 w-56 relative lg:hidden rounded-full mx-auto bg-gray-200 animate-pulse"></div>
      </div>
    ));

    return data;
  };

  return <>{renderCatalogsCardSkeleton()}</>;
};
