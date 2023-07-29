import {Injectable} from '@angular/core';
import {CartItemModel, ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItemModel[] = [];

  constructor() {
    this.getCartItemsStorage();
  }

  get cart(): CartItemModel[] {
    return this.cartItems;
  }

  add(product: ProductModel, inputSize: string, inputQuantity: number): void {
    const cartItem: CartItemModel = {
      name: product.name,
      price: product.price,
      quantity: Number(inputQuantity),
      size: inputSize,
      icon: product.icon
    };
    if (this.cartItems.length > 0) {
      const item = this.cartItems.find((p) => p.name === product.name && p.size === inputSize);
      if (item) {
        item.quantity += Number(inputQuantity);
      } else {
        this.cartItems.push(cartItem);
      }
    } else {
      this.cartItems.push(cartItem);
    }
    this.setCartItemsStorage();
  }

  remove(cartItem: CartItemModel): void {
    this.cartItems = this.cartItems.filter((item) => item !== cartItem);
    this.setCartItemsStorage();
  }

  get totalItems(): number {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  get totalPrice(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  private setCartItemsStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  private getCartItemsStorage(): void {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      this.cartItems = JSON.parse(cartItems);
    }
  }

}
