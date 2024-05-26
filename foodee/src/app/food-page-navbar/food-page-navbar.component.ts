import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-food-page-navbar',
  standalone: true,
  imports: [ NgIf],
  templateUrl: './food-page-navbar.component.html',
  styleUrl: './food-page-navbar.component.sass'
})
export class FoodPageNavbarComponent {
  numberOfItems: number = 0;

  increaseNumberOfItems(){
    this.numberOfItems++;
  }

  decreaseNumberOfItems(){
    if(this.numberOfItems > 0){
      this.numberOfItems--;
    }
  }
}
