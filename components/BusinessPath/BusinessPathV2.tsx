import React from "react";
import ReactMarkdown from "react-markdown";

import { BusinessPathV2ContentType } from "../../types/components/BusinessPathTypes";

export const BusinessPathV2 = ({
  title,
  over_title,
  description,
}: BusinessPathV2ContentType) => {
  return (
    <div className=" bg-white py-28 px-10 lg:px-28 flex gap-4 lg:gap-10 flex-col lg:flex-row w-full ">
      <div className="flex flex-col">
        <h5 className="text-gray-400 text-2xl lg:text-xl ">{over_title}</h5>
        <h2 className="font-bold text-xl lg:text-4xl mb-4">
          {title}
        </h2>

        <div className="mb-6">
          <ReactMarkdown
            className="lg:text-lg font-regular flex flex-col "
            children={description}
          />
        </div>
      </div>
    </div>
  );
};


