import { Injectable } from '@angular/core';
import { Food } from './models/food/food.model';
import { foodList } from './fakedb';
import { Ingredient } from './models/food/ingredient/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private foods: Food[] = foodList;

  constructor() { }

  // Método para obter todos os alimentos (retornando cópias)
  getFoodList(): Food[] {
    return this.foods.map(food => this.cloneFood(food));
  }

  // Método para obter um alimento por ID (retornando cópia)
  getFoodById(id: number): Food {
    const food = this.foods.find(food => food.id === id);
    if (!food) {
      throw new Error('Food not found');
    }
    return this.cloneFood(food);
  }

  // Método para clonar um objeto Food
  private cloneFood(food: Food): Food {
    return new Food(
      food.id,
      food.name,
      food.description,
      [...food.ingredients], 
      food.price,
      food.offer,
      food.suggestion,
      food.image,
      [...food.listOfPossibleExtraIngredients], 
      [...food.extraIngredients], 
      [...food.tags] 
    );
  }
}