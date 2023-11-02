"use client";

interface TagMarca {
  total: number;
}

export const LoadingProductsSkeleton = ({ total }: TagMarca) => {
  {
    for (var i = 0; i < total; i++) {
      return (
        <div className="border border-gray-200 rounded-lg bg-white p-4">
          <div className="w-full h-56 rounded bg-gray-200 mb-2 animate-pulse"></div>
          <div className="h-6 w-full rounded bg-gray-200 animate-pulse"></div>
        </div>
      );
    }
  }
};
