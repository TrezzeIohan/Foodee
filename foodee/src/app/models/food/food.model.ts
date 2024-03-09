import { Ingredient } from "./ingredient/ingredient.model";
import { Nutrition } from "./ingredient/nutrition/nutrition.model";

export class Food {
    public nutritionalValue: Nutrition;
    public diaryNutriValues: Map<string, number>;

    constructor(
      public id: number,
      public name: string,
      public descrition: string,
      public ingredients: Ingredient[],
      public price: number,
      public offer: boolean,
      public suggestion: boolean,
      public image: string,
      public extraIngredients: Ingredient[],

    // I didn't used a function to determine tags, because I thought the client would
    // want to detemine it because of marketing reasons, etc
      public tags: string[],
    ) {
      this.nutritionalValue = this.calculateNutritionalValue();
      this.diaryNutriValues = this.calculateDiaryNutriValues();
    }

    //Changes the suggestion property
    turnSuggestionOnOff(): void{
      this.suggestion = !this.suggestion
    }

    // Sums the nutritional values of the ingredients and returns a nutrition object with the sums
    calculateNutritionalValue(): Nutrition{
    let totalNutritionalValue: Nutrition = { calories: 0, carbs: 0, fat: 0, protein: 0 };
      this.ingredients.forEach(ingredient => {
        totalNutritionalValue.calories += ingredient.nutritionalValue.calories;
        totalNutritionalValue.carbs += ingredient.nutritionalValue.carbs;
        totalNutritionalValue.fat += ingredient.nutritionalValue.fat;
        totalNutritionalValue.protein += ingredient.nutritionalValue.protein;
      });
    return totalNutritionalValue;
    }

    calculateDiaryNutriValues(): Map<string, number>{
      let dailyCarbs = 250;
      let dailyFat = 44;
      
      let dailyCarbsPercentage = (100 * this.nutritionalValue.carbs)/dailyCarbs;
      let dailyFatPercentage = (100 * this.nutritionalValue.fat)/dailyFat;

      let diaryNutriValues = new Map <string, number>();
      diaryNutriValues.set('dailyCarbsPercentage', dailyCarbsPercentage);
      diaryNutriValues.set('dailyFatPercentage', dailyFatPercentage);

      return diaryNutriValues;
    }
  }