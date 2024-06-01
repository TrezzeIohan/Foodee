import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from './models/food/food.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Food[] = this.getCartItemsFromLocalStorage();
  private cartSubject: BehaviorSubject<Food[]> = new BehaviorSubject(this.cartItems);

  cart$ = this.cartSubject.asObservable();

  constructor() { }

  addToCart(item: Food): void {
    this.cartItems.push(item);
    this.updateCart();
    console.log(`Item ${item.name} added to cart`);
  }

  removeFromCart(item: Food): void {
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.updateCart();
      console.log(`Item ${item.name} removed from cart`);
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
    console.log('Cart cleared');
  }

  getItemCount(): number {
    return this.cartItems.length;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  private updateCart(): void {
    this.cartSubject.next(this.cartItems);
    this.saveCartItemsToLocalStorage();
  }

  private saveCartItemsToLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  private getCartItemsFromLocalStorage(): Food[] {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
  }
}
