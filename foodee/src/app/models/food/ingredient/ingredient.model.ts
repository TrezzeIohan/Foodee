import { Nutrition } from "./nutrition/nutrition.model";
  export class Ingredient {
    id: string;
    name: string;
    price: number;
    nutritionalValue: Nutrition;

    constructor(id: string, name: string, price: number, nutritionalValue: Nutrition) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.nutritionalValue = nutritionalValue;
    }
}