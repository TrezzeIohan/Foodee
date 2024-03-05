export class Nutrition {
    calories: number;
    carbs: number;
    fat: number;
    protein: number;

    constructor(calories: number, carbs: number, fat: number, protein: number) {
        this.calories = calories;
        this.carbs = carbs;
        this.fat = fat;
        this.protein = protein;
    }
}