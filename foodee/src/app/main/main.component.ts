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
slides = [
    {id: 1, img: "../assets/food-imgs/donut.svg", title: "Free Donut!", description:"For orders over $20"},
    {id: 2, img: "../assets/food-imgs/donut.svg", title: "Shakes", description:"Delicious"},
    {id: 3, img: "../assets/food-imgs/donut.svg", title: "", description:"Delicious"},
    {id: 4, img: "../assets/food-imgs/donut.svg", title: "", description:"Delicious"}
  ];
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1, 
    "arrows": false,
  };
  
  slickInit(e: any) {
    console.log('slick initialized');
  }

}
