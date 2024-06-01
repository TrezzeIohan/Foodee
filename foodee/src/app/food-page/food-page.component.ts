import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food/food.model';
import { Ingredient } from '../models/food/ingredient/ingredient.model';
import { NgClass, NgFor } from '@angular/common';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FoodPageNavbarComponent } from '../food-page-navbar/food-page-navbar.component';
import { HammerModule } from '@angular/platform-browser';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [SlickCarouselModule, NgClass, NgFor, FoodPageNavbarComponent, HammerModule],
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

  ngAfterViewInit(){
    this.addClickListeners();
  }
  
  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 3, 
    "arrows": false,
  };


  addClickListeners() {
    setTimeout(() => {
      let extraIngredientElements = document.querySelectorAll('.ingredient-slide');
      extraIngredientElements.forEach((element) => {
        element.addEventListener('click', () => {
          element.classList.toggle('slide-active');
        });
      });
    }, 0); // Usar setTimeout para garantir que os elementos estejam no DOM
  }

  manageActiveIngredients(ingredient : Ingredient){
    this.removeOrAddIngredient(ingredient);
  }

  removeOrAddIngredient(ingredient : Ingredient){
    if(this.food.extraIngredients.includes(ingredient)){
      this.food.removeExtraIngredient(ingredient);
      console.log('removing')
    }
    else{
      this.food.addExtraIngredient(ingredient);
      console.log('adding')
    }
  } 









}
