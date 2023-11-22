import React from "react";

interface CategoriesSectionContent {
  /* id: number; */
  title: String;
  subtitle: String;
}

export const CategoriesSection = ({
  title,
  subtitle,
}: CategoriesSectionContent) => {
  return <div className=" bg-white py-20 px-56 flex flex-col w-full">
    <h2 className="text-ov-primaryLight font-bold text-4xl mb-2">{title}</h2>
    <p className="text-lg">{subtitle}</p>
  </div>;
};
