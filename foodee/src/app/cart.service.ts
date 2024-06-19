import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from './models/food/food.model';
import { CartItemGroup } from './models/cart/cart-item-group.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemGroupArray: CartItemGroup[] = this.getcartItemGroupsFromLocalStorage();
  private cartSubject: BehaviorSubject<CartItemGroup[]> = new BehaviorSubject(this.cartItemGroupArray);

  cart$ = this.cartSubject.asObservable();

  constructor() { }

  addCartItemGroupToCart(cartItemGroup: CartItemGroup): void {

    this.cartItemGroupArray.push(cartItemGroup);
    this.updateCart();
    console.log(`${cartItemGroup.quantity} Item(s) ${cartItemGroup.food.name} added to the cart`);
    console.log(this.cartItemGroupArray);
  }

  removeCartItemGroupFromCart(cartItemGroupId: number): void {
    const index = this.cartItemGroupArray.findIndex(item => item.id === cartItemGroupId);
    if (index > -1) {
      this.cartItemGroupArray.splice(index, 1);
      this.updateCart();
      console.log(`Item(s) removed from cart`);
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
    // Recupere os dados do localStorage
const cartItemGroupArray = JSON.parse(localStorage.getItem('cartItemGroupArray') || '[]');

// Crie instâncias de CartItemGroup a partir dos objetos convertidos
const cartItemsList = cartItemGroupArray.map((item: any) => {
  return new CartItemGroup(
    new Food(
      item.food.id,
      item.food.name,
      item.food.description,
      item.food.ingredients,
      item.food.basePrice,
      item.food.offer,
      item.food.suggestion,
      item.food.image,
      item.food.listOfPossibleExtraIngredients,
      item.food.extraIngredients,
      item.food.tags
    ),
    item.quantity
  );
});
// Agora cartItemsList contém instâncias da classe CartItemGroup
console.log(cartItemsList);

return cartItemsList;


  }
}
