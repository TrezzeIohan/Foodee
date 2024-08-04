import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgClass } from '@angular/common';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SlickCarouselModule, NgClass, NavigationBarComponent, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass'
})
export class MainComponent {
  // COnfiguration needed to figure the current route and change the style of the NavBar
  public currentRoute: string = '';
  constructor(private router: Router) {}

  ngOnInit() {
  }

// Big Slides COnfig
slides = [
    {id: 1, img: "../assets/imgs/donut.svg", title: "Free Donut!", description:"For orders over $20", bgColorClass:"bg-color-cambridge"},
    {id: 2, img: "../assets/imgs/fries.svg", title: "Extra Large Fries", description:"Free for orders over $35", bgColorClass:"bg-color-hunyadi-yellow"},
    {id: 3, img: "../assets/imgs/ingredients/bacon.svg", title: "Two For One", description:"Order an extra bacon and get two", bgColorClass:"bg-color-light-coral"},
    {id: 4, img: "../assets/imgs/choc.svg", title: "Choco Friday", description:"Chocolate festival for choco lovers", bgColorClass:"bg-color-tropical-indigo"}
  ];
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1, 
    "arrows": false,
  };

// Small Slide Config
  smallSlides = [
    {id: 1, img: "../assets/imgs/hamburger.svg", title: "Burgers", bgColorClass:"bg-color-flax"},
    {id: 2, img: "../assets/imgs/fries.svg", title: "Fries", bgColorClass:"bg-color-tea-rose"},
    {id: 3, img: "../assets/imgs/soda.svg", title: "Drinks", bgColorClass:"bg-color-ash-grey"},
    {id: 4, img: "../assets/imgs/choc.svg", title: "Desserts", bgColorClass:"bg-color-tropical-indigo"}
  ];

  smallSlideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 2, 
    "arrows": false,
    "swipeToSLide": true,
    
  };
  
  slickInit(e: any) {
    console.log('slick initialized');
  }


}
