import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass'
})
export class MainComponent {

// Big Slides COnfig
slides = [
    {id: 1, img: "../assets/imgs/donut.svg", title: "Free Donut!", description:"For orders over $20", bgColor:""},
    {id: 2, img: "../assets/imgs/fries.svg", title: "Extra Large Fries", description:"Free for orders over $35", bgColor:""},
    {id: 3, img: "../assets/imgs/ingredients/bacon.svg", title: "Two For One", description:"Order an extra bacon and get two", bgColor:""},
    {id: 4, img: "../assets/imgs/choc.svg", title: "Choco Friday", description:"Chocolate festival for choco lovers", bgColor:""}
  ];
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1, 
    "arrows": false,
  };

// Small Slide Config
  smallSlides = [
    {id: 1, img: "../assets/imgs/hamburguer.svg", title: "Burgers", bgColor:""},
    {id: 2, img: "../assets/imgs/fries.svg", title: "Fries", bgColor:""},
    {id: 3, img: "../assets/imgs/soda.svg", title: "Drinks", bgColor:""},
    {id: 4, img: "../assets/imgs/choc.svg", title: "Desserts", bgColor:""}
  ];

  smallSlideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 1, 
    "arrows": false,
  };
  
  slickInit(e: any) {
    console.log('slick initialized');
  }

}
