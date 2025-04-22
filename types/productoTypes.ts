export interface Producto {
  id: number;
  attributes: ProductoAttributes;
}

export interface ProductoAttributes {
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
  galeria_imagenes: GaleriaImagenes;
  rubros: Categorias;
  marca: Marca;
  tipos_de_productos: Categorias;
  keywords: any[];
  categorias: Categorias;
  productos: Productos;
  servicios: Productos;
  tabla: string;
}

export interface Categorias {
  data: CategoriasData[];
}

export interface CategoriasData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  nombre: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface GaleriaImagenes {
  data: GaleriaImagenesData[];
}

export interface GaleriaImagenesData {
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
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export enum EXT {
  Jpg = ".jpg",
  PNG = ".png",
}

export interface Formats {
  small: Large;
  medium?: Large;
  thumbnail: Large;
  large?: Large;
}

export interface Large {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = "image",
}

export interface ImagenPrincipal {
  data: GaleriaImagenesData;
}

export interface Marca {
  data: CategoriasData;
}

export interface Productos {
  data: Datum[];
}

export interface Datum {
  id: number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  nombre: string;
  slug: string;
  descripcion: null | string;
  descripcion_corta: string;
  link_youtube: null;
  link_mercadolibre: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  imagen_principal: ImagenPrincipal;
  categorias: Categorias;
}

export interface CardProductosContent {
  nombre: string;
  imagen_principal: any;
  imagen_principal_alt: string;
  marca?: string;
  slug: string;
}

export interface CardProductosRelacionadosContent {
  nombre: string;
  imagen_principal: any;
  imagen_principal_alt: string;
  slug: string;
  categorias: Categorias;
}

export interface TagMarcaContent {
  marca: string;
}

export interface SkeletonContent {
  total: number;
}
