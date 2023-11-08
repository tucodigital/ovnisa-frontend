"use client";

import React from "react";

export interface FooterContent {
  component: FooterComponentContent;
  name: String;
}

interface FooterComponentContent {
  id: number;
  contact_section_title: String;
  copyright_text: String;
  description_text: String;
  email_text: String;
  location_text: String;
  phone_text_1: String;
  phone_text_2: String;
  site_map_title: String;
  whatsapp_text: String;
  whatsapp_link: String;
  site_map_items: SiteMapItem[];
  social_items: SocialItem[];
}

interface SiteMapItem {
  id: number;
  item_text: string;
  item_link: string;
}

interface SocialItem {
  id: number;
  social_name: string;
  social_link: string;
}

export const Footer = ({ component }: FooterContent) => {

  if (!component) return null;
  return (
    <div className="bg-ov-primaryLight h-96 w-full">
      <img
        className="w-64"
        src={`/assets/footer/ruido-ovnisa-logo-footer-desktop.svg`}
      />
    </div>
  );
};
