import { Food } from "../food/food.model";

export interface ICartItemGroup {
  id: number;
  food: Food;
  quantity: number;
}

export class CartItemGroup implements ICartItemGroup {
  private static idSet: Set<number> = new Set();

  public id: number;
  public food: Food;
  public quantity: number;

  constructor(food: Food, quantity: number) {
    this.id = CartItemGroup.generateUniqueId();
    this.food = food;
    this.quantity = quantity;
  }

  private static generateUniqueId(): number {
    let newId: number;
    do {
      newId = Math.floor(Math.random() * 1000000); // Generate a random ID
    } while (CartItemGroup.idSet.has(newId));
    CartItemGroup.idSet.add(newId);
    return newId;
  }
}