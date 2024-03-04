import { Ingredient } from "./ingredient/ingredient.model";

export class Food {
    constructor(
      public id: number,
      public name: string,
      public ingredients: Ingredient[],
      public price: number,
      public offer: boolean,
      public nutritionalValues: any, // Talvez eu precise criar um objeto para valores nutricionais
      public suggestion: boolean,

    // I didn't used a function to determine tags, because I thought the client would
    // want to detemine it because of marketing reasons, etc
      public tags: string[],
    ) {}
  
    // Você pode adicionar métodos aqui
    displayName(): string {
      return `User: ${this.name}`;
    }

    //Changes the suggestion property
    turnSuggestionOnOff(): void{
      this.suggestion = !this.suggestion
    }
  }