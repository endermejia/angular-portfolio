import {Injectable} from '@angular/core';
import {PRODUCTS} from '../mocks/global-info';
import {CartItemModel, ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItemModel[] = [];
  private products: ProductModel[] = PRODUCTS;

  constructor() {
  }

  get cart(): CartItemModel[] {
    return this.cartItems;
  }

  add(product: ProductModel, inputSize: string, inputQuantity: number): void {
    const cartItem: CartItemModel = {
      name: product.name,
      price: product.price,
      quantity: inputQuantity,
      size: inputSize,
      icon: product.icon
    };
    if (this.cartItems.length > 0) {
      const item = this.cartItems.find((p) => p.name === product.name && p.size === inputSize);
      if (item) {
        item.quantity += inputQuantity;
      } else {
        this.cartItems.push(cartItem);
      }
    } else {
      this.cartItems.push(cartItem);
    }
  }

  remove(cartItem: CartItemModel): void {
    this.cartItems = this.cartItems.filter((item) => item !== cartItem);
  }

  get cartTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

}
