import { Nutrition } from "./nutrition/nutrition.model";
  export class Ingredient {
    id: string;
    name: string;
    price: number;
    nutritionalValue: Nutrition;
    image: string;

    constructor(id: string, name: string, price: number, nutritionalValue: Nutrition, image: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.nutritionalValue = nutritionalValue;
        this.image = image;
    }
}