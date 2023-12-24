import React, { Fragment } from "react";
import { HomeHeader } from "./Header/Header";
import { CategoriesSection } from "./CategoriesSection/CategoriesSection";
import { MapSection } from "./MapSection/MapSection";
import { BusinessPath } from "./BusinessPath/BusinessPath";
import { VideoSection } from "./VideoSection/VideoSection";
import { LocationSection } from "./LocationSection/LocationSection";
import { ContactSection } from "./ContactSection/ContactSection";

const HOME_HEADER = "home-comp.header";
const CATEGORIES_SECTION = "home-comp.cat-section";
const MAP_SECTION = "home-comp.map-section";

const BUSINESS_PATH = "empr-comp.business-path";
const VIDEO_SECTION = "empr-comp.video-section";
const LOCATION_SECTION = "empr-comp.location-section";

const CONTACT_SECTION = "contacto.contact-section";

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

      case CONTACT_SECTION:
        return (
          <ContactSection
            key={`${CONTACT_SECTION}_${component?.id}`}
            title={component?.title}
            phone_text_1={component?.phone_text_1}
            phone_text_2={component?.phone_text_2}
            email_text={component?.email_text}
            whatsapp_text={component?.whatsapp_text}
            facebook_link={component?.facebook_link}
            instagram_link={component?.instagram_link}
            youtube_link={component?.youtube_link}
            linkedin_link={component?.linkedin_link}
            mercado_libre_link={component?.mercado_libre_link}
            name_and_lastname_placeholder={component?.name_and_lastname_placeholder}
            phone_placeholder={component?.phone_placeholder}
            email_placeholder={component?.email_placeholder}
            subject_placeholder={component?.subject_placeholder}
            message_placeholder={component?.message_placeholder}
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
