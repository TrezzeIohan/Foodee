import { Food } from "../food/food.model";

export class Cart {
    constructor(
      public name: string,
      public shoppingList: Food[],
      public suggestions: Food[]
      // outros campos...
    ) {}
  
    // Você pode adicionar métodos aqui
    totalPrice(): number {
      // Soma o Valor dos itens da Shopping List e retorna seu valor
      //return 
    }

    getSuggestions(): Food[]{
        // Returns a list of foods that has specific tags?
    }

    clearShoppingList(): void{
        // Clears the shoppingList array
    }
  }