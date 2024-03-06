import { Food } from "./food/food.model";
import { Cart } from "./user/cart.model";
import { User } from "./user/user.model";

export class Main {
    constructor(
      public user: User,
      public menu: Food[] 
      // outros campos...
    ) {}
  }