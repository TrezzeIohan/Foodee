import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from './models/food/food.model';
import { CartItemGroup } from './models/cart/cart-item-group.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemGroupArray: CartItemGroup[] = this.getcartItemGroupsFromLocalStorage();
  private cartSubject: BehaviorSubject<CartItemGroup[]> = new BehaviorSubject(this.cartItemGroupArray);

  cart$ = this.cartSubject.asObservable();

  constructor() { }

  addCartItemGroupToCart(cartItemGroup: CartItemGroup): void {

    this.cartItemGroupArray.push(cartItemGroup);
    this.updateCart();
    console.log(`Item ${cartItemGroup.food.name} added to the cart`);
  }

  removeCartItemGroupFromCart(cartItemGroup: CartItemGroup): void {
    const index = this.cartItemGroupArray.findIndex(item => item.food.id === cartItemGroup.id);
    if (index > -1) {
      this.cartItemGroupArray[index].quantity -= 1;
      if (this.cartItemGroupArray[index].quantity === 0) {
        this.cartItemGroupArray.splice(index, 1);
      }
      this.updateCart();
      console.log(`Item ${cartItemGroup.food.name} removed from cart`);
    }
  }

  clearCart(): void {
    this.cartItemGroupArray = [];
    this.updateCart();
    console.log('Cart cleared');
  }

  getItemCount(): number {
    return this.cartItemGroupArray.reduce((count, item) => count + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItemGroupArray.reduce((total, item) => total + (item.food.price * item.quantity), 0);
  }

  private updateCart(): void {
    this.cartSubject.next(this.cartItemGroupArray);
    this.savecartItemGroupsToLocalStorage();
  }

  private savecartItemGroupsToLocalStorage(): void {
    localStorage.setItem('cartItemGroupArray', JSON.stringify(this.cartItemGroupArray));
  }

  private getcartItemGroupsFromLocalStorage(): CartItemGroup[] {
    const cartItemGroupArray = localStorage.getItem('cartItemGroupArray');
    return cartItemGroupArray ? JSON.parse(cartItemGroupArray) : [];
  }
}
