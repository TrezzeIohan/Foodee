import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { CartItemGroup } from '../../models/cart/cart-item-group.model';

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
  console.log(this.cartItemsList[0].food.price)
}



}
