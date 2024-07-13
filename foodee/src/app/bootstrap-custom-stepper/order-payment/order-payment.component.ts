import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { CartItemGroup } from '../../models/cart/cart-item-group.model';
import { Food } from '../../models/food/food.model';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-order-payment',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './order-payment.component.html',
  styleUrl: './order-payment.component.sass'
})
export class OrderPaymentComponent {
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

}
