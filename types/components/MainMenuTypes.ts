export interface MainMenuContent {
  component: MainMenuComponentContent;
  name: String;
  showSearchOverlay: Boolean;
  setShowSearchOverlay: Function;
}

export interface MainMenuComponentContent {
  id: number;
  email_text: String;
  phone_text: String;
  whatsapp_text: String;
  whatsapp_link: String;
  mercado_libre_text: String;
  mercado_libre_link: String;
  items: MenuItemContent[];
}

export interface MenuItemContent {
  id: number;
  item_text: string;
  item_link: string;
}
