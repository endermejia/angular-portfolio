export interface ProductModel {
  name: string;
  price: number;
  sizes: string[];
  soldOut: boolean;
  icon: string;
}

export interface CartItemModel {
  name: string;
  price: number;
  quantity: number;
  size: string;
  icon: string;
}
