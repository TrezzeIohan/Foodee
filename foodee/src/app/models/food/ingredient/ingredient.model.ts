export class Ingredient {
    constructor(
      public id: number,
      public name: string,
      public price: number,
      public nutrition: {[nutritionalMeasure:string]:string}
      // outros campos...
    ) {}
  
    // Você pode adicionar métodos aqui
    displayName(): string {
      return `User: ${this.name}`;
    }
  }