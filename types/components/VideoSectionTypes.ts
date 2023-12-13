export interface VideoSectionContent {
  video_link: string;
  items: VideoSectionItemContent[];
}

export interface VideoSectionItemContent {
  id: number;
  title: String;
  description: String;
  icon: any;
}
