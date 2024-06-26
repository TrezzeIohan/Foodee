import { formatDate } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { CartService } from '../../cart.service';
import { CartItemGroup } from '../../models/cart/cart-item-group.model';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.sass'
})
export class OrderDetailsComponent {
cartservice = new CartService;
cartItemsList: CartItemGroup[] = [];
numberOfItems = this.cartservice.getItemCount();


@Input() orderInfo: CartItemGroup[] = [];

ngOnInit(){
}

orderTime = this.fakeOrderTime();

fakeOrderTime(): String{
    const now = new Date();
    now.setTime(now.getTime() + 30 * 60 * 1000);
    const formattedDate = now.toLocaleString('en-US', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
  });
  return formattedDate
}



}
