import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { CartItemGroup } from '../../models/cart/cart-item-group.model';
import { cloneDeep } from 'lodash';
import { Food } from '../../models/food/food.model';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './order.component.html',
  styleUrl: './order.component.sass'
})
export class OrderComponent {
cartService = new CartService;
cartItemsList: CartItemGroup[] = this.cartService.cartItemGroupArray;

ngOnInit(){

}

ngAfterViewInit(){
 // console.log(this.cartItemsList[0].food.getTotalPrice())
}

reduceOrderQuantityFromItemWithIndex(i:number){
  if(this.cartItemsList[i].quantity > 0){
    this.cartItemsList[i].quantity--;
    this.cartService.updateCart();
  }
}
increaseOrderQuantityFromItemWithIndex(i:number){
  this.cartItemsList[i].quantity++;
  this.cartService.updateCart();
}



}