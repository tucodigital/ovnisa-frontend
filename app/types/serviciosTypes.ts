export interface Servicio {
  id: number;
  attributes: ServicioAttributes;
}

export interface ServicioAttributes {
  nombre: string;
  slug?: string;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
  descripcion: string;
  descripcion_corta: string;
  keywords: Keyword[];
  imagen_principal: any;
  galeria_imagenes: any;
  maquinarias: Maquinarias;
}
export interface Maquinaria {
  nombre: string;
  slug: string;
  descripcion: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  imagen_principal: any;
}
export interface Maquinarias {
  id: number;
  attributes: Maquinaria;
}
export interface Keyword {
  id: number;
  tag: string;
}
