import React, { Fragment } from "react";
import { HomeHeader } from "./Header/Header";
import { CategoriesSection } from "./CategoriesSection/CategoriesSection";
import { MapSection } from "./MapSection/MapSection";

const HOME_HEADER = "home-comp.header";
const CATEGORIES_SECTION = "home-comp.cat-section";
const MAP_SECTION = "home-comp.map-section";

export default function ComponentSwitcher({ componentsList }: any) {
  const RenderComponent = (component: any) => {
    switch (component.__component) {
      case HOME_HEADER:
        return (
          <HomeHeader
            key={`${HOME_HEADER}_${component?.id}`}
            slides={component?.slides}
          />
        );
      case CATEGORIES_SECTION:
        return (
          <CategoriesSection
            key={`${CATEGORIES_SECTION}_${component?.id}`}
            title={component?.title}
            subtitle={component?.subtitle}
            categorias={component?.categorias}
          />
        );
      case MAP_SECTION:
        return (
          <MapSection
            key={`${MAP_SECTION}_${component?.id}`}
            title={component?.title}
            description={component?.description}
            brands={component?.brands}
          />
        );
      default:
        return <div></div>;
    }
  };

  return (
    <Fragment>
      {componentsList.map((component: any) => {
        return RenderComponent(component);
      })}
    </Fragment>
  );
}