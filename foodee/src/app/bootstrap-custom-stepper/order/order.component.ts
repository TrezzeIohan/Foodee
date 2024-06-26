import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { CartItemGroup } from '../../models/cart/cart-item-group.model';
import { Food } from '../../models/food/food.model';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './order.component.html',
  styleUrl: './order.component.sass'
})
export class OrderComponent {

cartService = new CartService;
foodDbService = new DataService;
foodDbList: Food[] = this.foodDbService.getFoodList();
cartItemsList: CartItemGroup[] = this.cartService.cartItemGroupArray;
suggestions: CartItemGroup[] = [];
suggestionsList: Food[] = [this.foodDbList[5], this.foodDbList[6], this.foodDbList[7]];


ngOnInit(){
}

ngAfterViewInit(){
 // console.log(this.cartItemsList[0].food.getTotalPrice())
}

reduceOrderQuantityFromItemWithIndex(i:number){
  if(this.cartItemsList[i].quantity > 1){
    this.cartItemsList[i].quantity--;
    this.cartService.updateCart();
  }
  else if(this.cartItemsList[i].quantity == 1){
    this.cartItemsList[i].quantity--;
    this.cartService.removeCartItemGroupFromCart(this.cartItemsList[i].id);
    this.cartService.updateCart();
  }
}
increaseOrderQuantityFromItemWithIndex(i:number){
  this.cartItemsList[i].quantity++;
  this.cartService.updateCart();
}

clearComponentCartAndAttLocalCart(){
  this.cartService.clearCart();
  this.attLocalCartList()
}

addFoodToCart(food: Food){
  let newCartItemGroup: CartItemGroup = new CartItemGroup(food, 1);
  this.cartService.addCartItemGroupToCart(newCartItemGroup);
}

attLocalCartList(){
  this.cartItemsList= this.cartService.cartItemGroupArray;
}


}
