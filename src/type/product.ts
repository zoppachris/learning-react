export interface ProductItem {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
}

export interface ProductResponse {
  products: ProductItem[];
  total: number;
  skip: number;
  limit: number;
}
