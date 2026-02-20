export interface ImageData {
  data: null | {
    id: number;
    attributes: {
      url: string;
      alternativeText?: string;
      width?: number;
      height?: number;
    };
  };
}

export interface HomeSectionContent {
  id: number;
  __component: string;
  title: string;
  subtitle: string;
  link_name: string;
  link: string;
  image: ImageData;
}
