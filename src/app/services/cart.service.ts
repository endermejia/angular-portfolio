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
    const item = this.cartItems.find((p) => p.name === product.name && p.size === inputSize);
    if (item) {
      item.quantity += cartItem.quantity;
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

  stockQuantities(product: ProductModel): number[] {
    const stock = product.stock.find((s) => s.size === product.selectedSize)?.quantity;
    const buyed: number = this.cartItems
      .filter((item) => item.name === product.name && item.size === product.selectedSize)
      .reduce((acc, item) => acc + item.quantity, 0);
    return Array.from({length: stock - buyed}, (_, i) => i + 1);

  }

  stockSizes(product: ProductModel): string[] {
    return product.stock.map((s) => s.size);
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
