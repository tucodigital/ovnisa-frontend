"use client";

interface TagMarca {
  marca: string;
}

export const TagMarca = ({ marca }: TagMarca) => {
  switch (marca) {
    case "Ovniflex":
      return (
        <div className="absolute top-4 right-5 z-50">
          <div className="bg-blue-600 rounded text-white px-5 py-1">
            <h4 className="font-bold text-sm">{marca}</h4>
          </div>
        </div>
      );
    case "Mima":
      return (
        <div className="absolute top-4 right-5 z-50">
          <div className="bg-red-600 rounded text-white px-5 py-1">
            <h4 className="font-bold text-sm">{marca}</h4>
          </div>
        </div>
      );
    case "Mr. Bond":
      return (
        <div className="absolute top-4 right-5 z-50">
          <div className="bg-cyan-600 rounded text-white px-5 py-1">
            <h4 className="font-bold text-sm">{marca}</h4>
          </div>
        </div>
      );
    default:
      return (
        <div className="absolute top-4 right-5 z-50">
          <div className="bg-gray-200 rounded text-gray-700 px-5 py-1">
            <h4 className="font-bold text-sm">{marca}</h4>
          </div>
        </div>
      );
  }
};
