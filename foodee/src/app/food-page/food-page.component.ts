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
  
  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 3, 
    "arrows": false,
  };

  

}
