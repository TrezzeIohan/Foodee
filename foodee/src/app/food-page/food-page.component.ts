import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food/food.model';
import { Ingredient } from '../models/food/ingredient/ingredient.model';
import { NgClass } from '@angular/common';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [SlickCarouselModule, NgClass],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.sass'
})
export class FoodPageComponent {
  constructor(
    private dataService : DataService,
    private route: ActivatedRoute,
  ){}

  id = this.route.snapshot.paramMap.get('id');
  IntId: number = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);


  food : Food = this.dataService.getFoodById(this.IntId);

  ngOnInit(){
   
  }
  
  slides = [
    {id: 1, img: "../assets/imgs/donut.svg", title: "Cheddar", description:"+0.23", bgColorClass:"bg-color-cambridge"},
    {id: 2, img: "../assets/imgs/fries.svg", title: "Extra Large Fries", description:"Free for orders over $35", bgColorClass:"bg-color-hunyadi-yellow"},
    {id: 3, img: "../assets/imgs/ingredients/bacon.svg", title: "Two For One", description:"Order an extra bacon and get two", bgColorClass:"bg-color-light-coral"},
    {id: 4, img: "../assets/imgs/choc.svg", title: "Choco Friday", description:"Chocolate festival for choco lovers", bgColorClass:"bg-color-tropical-indigo"}
  ];
  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 3, 
    "arrows": false,
  };

  

}
