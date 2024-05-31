import { Ingredient } from "./ingredient/ingredient.model";
import { Nutrition } from "./ingredient/nutrition/nutrition.model";

export class Food {
    public nutritionalValue: Nutrition;
    public diaryNutriValues: Map<string, number>;

    constructor(
      public id: number,
      public name: string,
      public description: string,
      public ingredients: Ingredient[],
      private basePrice: number,
      public offer: boolean,
      public suggestion: boolean,
      public image: string,
      public listOfPossibleExtraIngredients: Ingredient[],
      public extraIngredients: Ingredient[],
      public tags: string[],
    ) {
      this.nutritionalValue = this.calculateNutritionalValue();
      this.diaryNutriValues = this.calculateDiaryNutriValues();
    }

    // Changes the suggestion property
    turnSuggestionOnOff(): void {
      this.suggestion = !this.suggestion;
    }

    // Sums the nutritional values of the ingredients and returns a nutrition object with the sums
    calculateNutritionalValue(): Nutrition {
      let totalNutritionalValue: Nutrition = { calories: 0, carbs: 0, fat: 0, protein: 0 };
      this.ingredients.forEach(ingredient => {
        totalNutritionalValue.calories += ingredient.nutritionalValue.calories;
        totalNutritionalValue.carbs += ingredient.nutritionalValue.carbs;
        totalNutritionalValue.fat += ingredient.nutritionalValue.fat;
        totalNutritionalValue.protein += ingredient.nutritionalValue.protein;
      });
      this.extraIngredients.forEach(ingredient => {
        totalNutritionalValue.calories += ingredient.nutritionalValue.calories;
        totalNutritionalValue.carbs += ingredient.nutritionalValue.carbs;
        totalNutritionalValue.fat += ingredient.nutritionalValue.fat;
        totalNutritionalValue.protein += ingredient.nutritionalValue.protein;
      });
  
      // Arredonda os valores para duas casas decimais
      totalNutritionalValue.calories = parseFloat(totalNutritionalValue.calories.toFixed(2));
      totalNutritionalValue.carbs = parseFloat(totalNutritionalValue.carbs.toFixed(2));
      totalNutritionalValue.fat = parseFloat(totalNutritionalValue.fat.toFixed(2));
      totalNutritionalValue.protein = parseFloat(totalNutritionalValue.protein.toFixed(2));
  
      return totalNutritionalValue;
    }

    calculateDiaryNutriValues(): Map<string, number> {
      let dailyCarbs = 250;
      let dailyFat = 44;
      
      let dailyCarbsPercentage = (100 * this.nutritionalValue.carbs) / dailyCarbs;
      let dailyFatPercentage = (100 * this.nutritionalValue.fat) / dailyFat;

      dailyCarbsPercentage = parseFloat(dailyCarbsPercentage.toFixed(2));
      dailyFatPercentage = parseFloat(dailyFatPercentage.toFixed(2));

      let diaryNutriValues = new Map<string, number>();
      diaryNutriValues.set('dailyCarbsPercentage', dailyCarbsPercentage);
      diaryNutriValues.set('dailyFatPercentage', dailyFatPercentage);

      return diaryNutriValues;
    }

    // Getter for the price that includes the extra ingredients' prices
    get price(): number {
      let totalPrice = this.basePrice;
      this.extraIngredients.forEach(ingredient => {
        totalPrice += ingredient.price;
      });
      return totalPrice;
    }

    addExtraIngredient(ingredient: Ingredient): void {
      this.extraIngredients.push(ingredient);
      this.nutritionalValue = this.calculateNutritionalValue();
      this.diaryNutriValues = this.calculateDiaryNutriValues();
    }

    // Remove an extra ingredient by Ingredient object
    removeExtraIngredient(ingredient: Ingredient): void {
      const index = this.extraIngredients.findIndex(extra => extra.id === ingredient.id);
      if (index !== -1) {
        this.extraIngredients.splice(index, 1);
        this.nutritionalValue = this.calculateNutritionalValue();
        this.diaryNutriValues = this.calculateDiaryNutriValues();
      }
    }

    //TODO -- Add a property for extra ingredients that can be add
}
