import React, { Fragment } from "react";
import { HomeHeader } from "./Header/Header";
import { CategoriesSection } from "./CategoriesSection/CategoriesSection";
import { MapSection } from "./MapSection/MapSection";
import { BusinessPath } from "./BusinessPath/BusinessPath";
import { VideoSection } from "./VideoSection/VideoSection";
import { LocationSection } from "./LocationSection/LocationSection";

const HOME_HEADER = "home-comp.header";
const CATEGORIES_SECTION = "home-comp.cat-section";
const MAP_SECTION = "home-comp.map-section";

const BUSINESS_PATH = "empr-comp.business-path";
const VIDEO_SECTION = "empr-comp.video-section";
const LOCATION_SECTION = "empr-comp.location-section";

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

      case BUSINESS_PATH:
        return (
          <BusinessPath
            key={`${MAP_SECTION}_${component?.id}`}
            title={component?.title}
            subtitle={component?.subtitle}
            description={component?.description}
            items={component?.items}
          />
        );

      case VIDEO_SECTION:
        return (
          <VideoSection
            key={`${VIDEO_SECTION}_${component?.id}`}
            video_link={component?.video_link}
            items={component?.items}
          />
        );

      case LOCATION_SECTION:
        return (
          <LocationSection
            key={`${LOCATION_SECTION}_${component?.id}`}
            title={component?.title}
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
