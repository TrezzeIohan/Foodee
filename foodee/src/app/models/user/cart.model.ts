import { Food } from "../food/food.model";

export class Cart {
    public totalPrice: number
    constructor(
      public name: string,
      public shoppingList: Food[],
      public suggestions: Food[],
    ) {
      this.totalPrice = this.GetTotalPrice();
    }
  
    // Você pode adicionar métodos aqui
    GetTotalPrice(): number {
      let totalPrice = 0;
      this.shoppingList.forEach(food => {
        totalPrice += food.price;
      });
      return totalPrice;
    }

    clearShoppingList(): void{
        // Clears the shoppingList array
        this.shoppingList.length = 0;
    }
  }