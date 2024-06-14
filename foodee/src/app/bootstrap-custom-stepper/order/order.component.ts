import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.sass'
})
export class OrderComponent {
cartService = new CartService;

ngOnInit(){
  
}



}
