import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-next-step-buttom',
  standalone: true,
  imports: [NgIf],
  templateUrl: './next-step-buttom.component.html',
  styleUrl: './next-step-buttom.component.sass'
})
export class NextStepButtomComponent {
  @Input() stepperButtonNumber!: Number;
  @Input() totalValue!: Number;

  constructor(private router: Router, private cartService: CartService) {}

  clearCartAndNavigateToOrderMadeCOmponent() {
    this.router.navigate(['/order-made']);
    this.cartService.clearCart();
  }

}
