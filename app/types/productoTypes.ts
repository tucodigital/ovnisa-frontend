export interface Producto {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  nombre: string;
  slug: string;
  descripcion: string;
  descripcion_corta: string;
  link_youtube: string;
  link_mercadolibre: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  imagen_principal: ImagenPrincipal;
  rubros: Categorias;
  marca: Marca;
  tipos_de_productos: Categorias;
  keywords: any[];
  categorias: Categorias;
}

export interface Categorias {
  data: DAT[];
}

export interface DAT {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  nombre: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface ImagenPrincipal {
  data: ImagenPrincipalData;
}

export interface ImagenPrincipalData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface Formats {
  small: Medium;
  medium: Medium;
  thumbnail: Medium;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface Marca {
  data: DAT;
}

