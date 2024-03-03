import { Cart } from "./cart.model";
export class User {
    constructor(
      public id: number,
      public name: string,
      public cart: Cart
      // outros campos...
    ) {}
  
    // Você pode adicionar métodos aqui
    displayName(): string {
      return `User: ${this.name}`;
    }
  }