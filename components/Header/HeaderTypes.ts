export interface SliderContent {
  slides: SlideContent[];
}

export interface SlideContent {
  id: number;
  title?: string;
  image_desktop: any;
  image_mobile: any;
}
