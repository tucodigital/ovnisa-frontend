import React from "react";

interface LocationSectionContentType {
  title: string;
}

export const LocationSection = ({ title }: LocationSectionContentType) => {
  return (
    <div className=" bg-white flex flex-col  w-full px-28 pt-20 ">
        <h2 className="text-black font-bold text-2xl lg:text-5xl mb-12">
          {title}
        </h2>
      <div className="">
        <iframe
          width="100%"
          height="500"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=C.%2051%201757,%20Guillermo%20Enrique%20Hudson,%20Provincia%20de%20Buenos%20Aires+(Ovnisa)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          {" "}
        </iframe>
      </div>
    </div>
  );
};
