export interface ImageData {
  data: null | {
    id: number;
    attributes: {
      url: string;
      alternativeText?: string;
      width?: number;
      height?: number;
      name?: string;
    };
  };
}

export interface NoticiaAttributes {
  title: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: ImageData;
}

export interface Noticia {
  id: number;
  attributes: NoticiaAttributes;
}
