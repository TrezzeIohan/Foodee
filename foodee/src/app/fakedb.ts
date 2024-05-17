import { Food } from './models/food/food.model';
import { Ingredient } from './models/food/ingredient/ingredient.model';
import { Nutrition } from './models/food/ingredient/nutrition/nutrition.model';

// Ingredientes
const cheese = new Ingredient('1', 'Cheese', 2.0, new Nutrition(100, 1, 8, 6), 'cheese.jpg');
const tomato = new Ingredient('2', 'Tomato', 0.5, new Nutrition(20, 4, 0.2, 1), 'tomato.jpg');
const dough = new Ingredient('3', 'Dough', 1.5, new Nutrition(200, 40, 2, 6), 'dough.jpg');

// Extra Ingredientes
const pepperoni = new Ingredient('4', 'Pepperoni', 2.5, new Nutrition(150, 1, 13, 6), 'pepperoni.jpg');
const mushroom = new Ingredient('5', 'Mushroom', 1.0, new Nutrition(15, 2, 0.1, 1), 'mushroom.jpg');

// Comidas
const pizzaMargherita = new Food(
  1,
  'Pizza Margherita',
  'Classic Italian pizza with cheese and tomato.',
  [cheese, tomato, dough],
  12.99,
  false,
  true,
  '../assets/imgs/hamburger.svg',
  [pepperoni, mushroom],
  ['Italian', 'Vegetarian']
);

const cheeseburger = new Food(
  2,
  'Mr. Cheezy',
  'Each Mr.Cheeze® includes a delectable Cheese Bacon Burger, featuring thick-cut applewood smoked bacon atop a juicy quarter-pound patty.',
  [cheese, tomato, dough], // Assuming dough as a bun here
  8.99,
  true,
  false,
  '../assets/imgs/pizza.svg',
  [],
  ['Classic Taste', 'Bestseller']
);

// Exportando os dados
export const foods = [pizzaMargherita, cheeseburger];