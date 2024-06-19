import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { CartItemGroup } from '../../models/cart/cart-item-group.model';
import { cloneDeep } from 'lodash';
import { Food } from '../../models/food/food.model';


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.sass'
})
export class OrderComponent {
cartService = new CartService;
cartItemsList: CartItemGroup[] = this.cartService.cartItemGroupArray;

ngOnInit(){
  console.log(this.cartItemsList)
  console.log(this.cartItemsList[0].food.price)
  if(this.cartItemsList[0].food instanceof Food){
    console.log(`That is an instance
                 of class Food and its
                 type is: ${typeof this.cartItemsList[0].food}`)
}
else{
  console.log("They're different")
}
  console.log(this.cartItemsList[0].food.name)
  console.log(typeof this.cartItemsList[0].food)

}

ngAfterViewInit(){
 // console.log(this.cartItemsList[0].food.getTotalPrice())
}



}
