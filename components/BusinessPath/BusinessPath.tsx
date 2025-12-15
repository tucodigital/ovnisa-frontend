import React from "react";
import ReactMarkdown from "react-markdown";

import { BusinessPathContentType } from "../../types/components/BusinessPathTypes";

export const BusinessPath = ({
  title,
  subtitle,
  description,
  items,
}: BusinessPathContentType) => {
  return (
    <div className=" bg-white py-28 px-10 lg:px-28 flex gap-4 lg:gap-10 flex-col lg:flex-row w-full ">
      <div className="flex flex-col">
        <h2 className="text-gray-400 text-2xl lg:text-xl">
          {title}
        </h2>
        <h5 className="font-bold text-xl lg:text-4xl mb-4">{subtitle}</h5>

        <div className="mb-6">
          <ReactMarkdown
            className="lg:text-lg font-regular flex flex-col gap-1"
            children={description}
          />
        </div>
      </div>
    </div>
  );
};


