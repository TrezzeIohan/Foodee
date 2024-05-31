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
  }

  removeFromCart(item: Food): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
    this.updateCart();
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
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
