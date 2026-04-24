export interface Product {
  id: string
  title: string
  slug: string
  description: string
  category: ProductCategory
  images: ProductImage[]
  metadata: ProductMetadata
  price?: string
  status: 'available' | 'sold' | 'reserved'
  createdAt: string
  updatedAt: string
}

export type ProductCategory = 
  | 'ropa-americana'
  | 'segunda-mano'
  | 'ninos'
  | 'bebe'
  | 'moda-tecnica'
  | 'motos'
  | 'nieve'
  | 'outdoor'
  | 'trajes-clinicos'
  | 'formal-gala'
  | 'vestidos-fiesta'
  | 'vestones'
  | 'camisas'
  | 'accesorios'
  | 'carteras'
  | 'zapatos'
  | 'calzados'
  | 'accesorios-mujer'
  | 'disfraces'
  | 'trajes-bano'

export interface ProductImage {
  id: string
  url: string
  alt: string
  width: number
  height: number
}

export interface ProductMetadata {
  talla?: string
  tipoTela?: string
  estado?: 'nuevo' | 'como-nuevo' | 'buen-estado' | 'vintage'
  color?: string
  marca?: string
  genero?: 'hombre' | 'mujer' | 'unisex' | 'ninos'
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image?: ProductImage
  count: number
}

export interface SearchFilter {
  category?: ProductCategory
  talla?: string
  estado?: string
  color?: string
  query?: string
}
