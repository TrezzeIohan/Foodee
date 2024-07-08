import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit, AfterViewInit {

  foodDbList: Food[] = [];
  cartItemsList: CartItemGroup[] = [];
  suggestions: CartItemGroup[] = [];
  suggestionsList: Food[] = [];

  constructor(private cartService: CartService, private foodDbService: DataService) { }

  ngOnInit() {
    this.foodDbList = this.foodDbService.getFoodList();
    this.suggestionsList = [this.foodDbList[5], this.foodDbList[6], this.foodDbList[7]];

    this.cartService.cart$.subscribe(cartItems => {
      this.cartItemsList = cartItems;
    });
  }

  ngAfterViewInit() {
    // Perform any additional setup after the view has been initialized
  }

  reduceOrderQuantityFromItemWithIndex(i: number) {
    if (this.cartItemsList[i].quantity > 1) {
      this.cartItemsList[i].quantity--;
      this.cartService.updateCart();
    } else if (this.cartItemsList[i].quantity == 1) {
      this.cartService.removeCartItemGroupFromCart(this.cartItemsList[i].id);
    }
  }

  increaseOrderQuantityFromItemWithIndex(i: number) {
    this.cartItemsList[i].quantity++;
    this.cartService.updateCart();
  }

  clearComponentCartAndAttLocalCart() {
    this.cartService.clearCart();
  }

  addFoodToCart(food: Food) {
    let newCartItemGroup = new CartItemGroup(food, 1);
    this.cartService.addCartItemGroupToCart(newCartItemGroup);
  }
}
