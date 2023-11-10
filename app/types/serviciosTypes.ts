export interface Servicio {
    id:         number;
    attributes: ServicioAttributes;
}

export interface ServicioAttributes {
    nombre:            string;
    slug:              string;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
    descripcion:       string;
    descripcion_corta: string;
    keywords:          Keyword[];
    imagen_principal:  GaleriaImagenes;
    galeria_imagenes:  GaleriaImagenes;
    maquinarias:       GaleriaImagenes;
}

export interface DatumAttributes {
    nombre:           string;
    slug:             string;
    descripcion:      string;
    createdAt:        Date;
    updatedAt:        Date;
    publishedAt:      Date;
    imagen_principal: GaleriaImagenes;
}

export interface Datum {
    id:         number;
    attributes: DatumAttributes;
}

export interface GaleriaImagenes {
    data: Datum[] | DataClass | null;
}

export interface DataClass {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    thumbnail: Medium;
    medium:    Medium;
    small:     Medium;
}

export interface Medium {
    name:   string;
    hash:   string;
    ext:    string;
    mime:   string;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export interface Keyword {
    id:  number;
    tag: string;
}