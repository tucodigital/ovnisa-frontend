export interface FooterContent {
  component: FooterComponentContent;
  name: String;
}

export interface FooterComponentContent {
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
  facebook_link: String;
  instagram_link: String;
  youtube_link: String;
  linkedin_link: String;
  mercado_libre_link: String;
}

export interface SiteMapItem {
  id: number;
  item_text: string;
  item_link: string;
}
