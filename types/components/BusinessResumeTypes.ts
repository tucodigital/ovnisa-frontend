import { ImageData } from "../noticiaTypes";

export interface BusinessResumeContent {
  title: string;
  over_title: string;
  items: BusinessResumeItemContent[];
  main_image: any;
  cards: BusinessResumeSectionCardContent[];
}

export interface BusinessResumeItemContent {
  id: number;
  title: String;
  description: String;
  icon: any;
}

interface BusinessResumeSectionCardContent {
  id: number;
  title: String;
  description: String;
  image: ImageData;
}