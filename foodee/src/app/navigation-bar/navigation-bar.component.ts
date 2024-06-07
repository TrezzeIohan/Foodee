import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgClass } from '@angular/common';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.sass']  // Corrigido de styleUrl para styleUrls
})
export class NavigationBarComponent implements OnInit {
  currentRoute: string = '';
  numberOfItemsInCart: number = 0;

  cartService = new CartService;

  constructor(private location: Location) { }

  ngOnInit() {
    this.currentRoute = this.location.path();
    this.numberOfItemsInCart = this.cartService.getItemCount();
  }
  
}