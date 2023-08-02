import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems(product: Product) {
    return this.items;
  }

  clearCart(product: Product) {
    this.items = [];
    return this.items;
  }
}
