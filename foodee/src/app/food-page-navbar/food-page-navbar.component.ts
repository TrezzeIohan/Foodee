import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgIf } from '@angular/common';
import { Food } from '../models/food/food.model';

@Component({
  selector: 'app-food-page-navbar',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './food-page-navbar.component.html',
  styleUrls: ['./food-page-navbar.component.sass']  // Corrigido de styleUrl para styleUrls
})
export class FoodPageNavbarComponent implements OnChanges {

  @Input() food!: Food;
  numberOfItems: number = 0;
  baseFoodValue: number = 0;
  totalPrice: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['food'] && changes['food'].currentValue) {
      this.baseFoodValue = this.food.price;
      this.updateTotalPrice();
    }
  }

  increaseNumberOfItems(){
    this.numberOfItems++;
    this.updateTotalPrice();
  }

  decreaseNumberOfItems(){
    if(this.numberOfItems > 0){
      this.numberOfItems--;
      this.updateTotalPrice();
    }
  }

  private updateTotalPrice() {
    this.totalPrice = parseFloat((this.baseFoodValue * this.numberOfItems).toFixed(2));
  }
}