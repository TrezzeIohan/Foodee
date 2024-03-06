import { Cart } from "./cart.model";
export class User {
    constructor(
      public id: number,
      public name: string,
      public cart: Cart,
      public photoPath: string,
    ) {}
  
    changeNameTo(newName: string): void {
      this.name = newName;
    }

    changePhotoPathTo(newPath: string): void{
      this.photoPath = newPath;
    }
  }