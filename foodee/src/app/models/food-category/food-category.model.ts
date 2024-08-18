import { Food } from "../food/food.model";

export class FoodCategory {
    constructor(
        public id: number,
        public name: string,
        public foodIds: number[] = []
    ) {}
}