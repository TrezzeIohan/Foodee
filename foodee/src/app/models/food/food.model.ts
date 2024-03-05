import { Ingredient } from "./ingredient/ingredient.model";
import { Nutrition } from "./ingredient/nutrition/nutrition.model";

export class Food {
    constructor(
      public id: number,
      public name: string,
      public descrition: string,
      public ingredients: Ingredient[],
      public price: number,
      public offer: boolean,
      public nutritionalValue: Nutrition, // Talvez eu precise criar um objeto para valores nutricionais
      public suggestion: boolean,
    // I didn't used a function to determine tags, because I thought the client would
    // want to detemine it because of marketing reasons, etc
      public tags: string[],
    ) {}

    //Changes the suggestion property
    turnSuggestionOnOff(): void{
      this.suggestion = !this.suggestion
    }

    getNutritionalValue(): Nutrition{
    let totalNutritionalValue: Nutrition = { calories: 0, carbs: 0, fat: 0, protein: 0 };;
      this.ingredients.forEach(ingredient => {
        totalNutritionalValue.calories += ingredient.nutritionalValue.calories;
        totalNutritionalValue.carbs += ingredient.nutritionalValue.carbs;
        totalNutritionalValue.fat += ingredient.nutritionalValue.fat;
        totalNutritionalValue.protein += ingredient.nutritionalValue.protein;
      });
    return totalNutritionalValue;
    }


  }