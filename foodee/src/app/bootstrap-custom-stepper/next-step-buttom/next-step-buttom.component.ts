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
export class NextStepButtomComponent implements OnChanges {
  @Input() stepperButtonNumber!: Number;
  @Input() totalValue!: Number;
  formattedTotalValue: string = '';

  constructor(private router: Router, private cartService: CartService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalValue']) {
      this.formattedTotalValue = this.totalValue.toFixed(2);
    }
  }

  clearCartAndNavigateToOrderMadeCOmponent() {
    this.router.navigate(['/order-made']);
    this.cartService.clearCart();
  }
}
