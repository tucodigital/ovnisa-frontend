import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const BusinessPathV2 = dynamic(() =>
  import("./BusinessPath/BusinessPathV2").then(
    (module) => module.BusinessPathV2
  )
);

const BusinessResume = dynamic(() =>
  import("./BusinessResume/BusinessResume").then(
    (module) => module.BusinessResume
  )
);

const ContactSection = dynamic(() =>
  import("./ContactSection/ContactSection").then(
    (module) => module.ContactSection
  )
);

const VendorsSection = dynamic(() =>
  import("./VendorsSection/VendorsSection").then(
    (module) => module.VendorsSection
  )
);

import { HomeHeader } from "./Header/Header";
import { CategoriesSection } from "./CategoriesSection/CategoriesSection";
import { BrandsSection } from "./BrandsSection/BrandsSection";
import SeoComponent from "./SEOComponent/SEOComponent";
import { HomeCTASection } from "./HomeCTASection/HomeCTASection";

const HOME_HEADER = "home-comp.header";
const CATEGORIES_SECTION = "home-comp.cat-section";
const MAP_SECTION = "home-comp.map-section";
const HOME_CTA = "home-comp.cta";

const BUSINESS_PATH_V2 = "empr-comp.business-path-v2";
const BUSINESS_RESUME = "empr-comp.business-resume";

const CONTACT_SECTION = "contacto.contact-section";
const VENDORS_SECTION = "contacto.vendors-section";

const SEO_COMPONENT = "seo.seo";

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
          <BrandsSection
            id={component?.id}
            key={`${MAP_SECTION}_${component?.id}`}
            title={component?.title}
            brands={component?.brands}
          />
        );

      case HOME_CTA:
        return (
          <HomeCTASection
            key={`${HOME_CTA}_${component?.id}`}
            id={component?.id}
            __component={component?.__component}
            title={component?.title}
            subtitle={component?.subtitle}
            link_name={component?.link_name}
            link={component?.link}
            image={component?.image}
          />
        );

      case BUSINESS_PATH_V2:
        return (
          <BusinessPathV2
            key={`${MAP_SECTION}_${component?.id}`}
            title={component?.title}
            over_title={component?.over_title}
            description={component?.description}
          />
        );

      case BUSINESS_RESUME:
        return (
          <BusinessResume
            key={`${MAP_SECTION}_${component?.id}`}
            title={component?.title}
            over_title={component?.over_title}
            items={component?.items}
            cards={component?.cards}
            main_image={component?.main_image}
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
            name_and_lastname_placeholder={
              component?.name_and_lastname_placeholder
            }
            phone_placeholder={component?.phone_placeholder}
            email_placeholder={component?.email_placeholder}
            subject_placeholder={component?.subject_placeholder}
            message_placeholder={component?.message_placeholder}
          />
        );

      case VENDORS_SECTION:
        return (
          <VendorsSection
            key={`${VENDORS_SECTION}_${component?.id}`}
            title={component?.title}
            vendors={component?.vendors}
          />
        );

      case SEO_COMPONENT:
        return (
          <SeoComponent
            key={`${VENDORS_SECTION}_${component?.id}`}
            meta_title={component?.meta_title}
            meta_url={component?.meta_url}
            meta_description={component?.meta_description}
            meta_image={component?.meta_image}
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
