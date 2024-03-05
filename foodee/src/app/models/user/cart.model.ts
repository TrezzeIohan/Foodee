import { Food } from "../food/food.model";
import { Main } from "../main.model";

export class Cart {
    constructor(
      public name: string,
      public shoppingList: Food[],
      public suggestions: Food[],
      public totalPrice: number,
      // outros campos...
    ) {}
  
    // Você pode adicionar métodos aqui
    GetTotalPrice(): number {
      // Soma o Valor dos itens da Shopping List e retorna seu valor
      //return
      this.shoppingList.forEach(food => {
        this.totalPrice += food.price;
      });
      return this.totalPrice;
    }

    clearShoppingList(): void{
        // Clears the shoppingList array
        this.shoppingList.length = 0;
    }
  }