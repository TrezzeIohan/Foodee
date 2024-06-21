import { Food } from './models/food/food.model';
import { Ingredient } from './models/food/ingredient/ingredient.model';
import { Nutrition } from './models/food/ingredient/nutrition/nutrition.model';

// Ingredientes
const cheese = new Ingredient('1', 'Cheese', 2.0, new Nutrition(100, 1, 8, 6), 'cheese.jpg');
const tomato = new Ingredient('2', 'Tomato', 0.5, new Nutrition(20, 4, 0.2, 1), './assets/imgs/tomato.svg');
const dough = new Ingredient('3', 'Dough', 1.5, new Nutrition(200, 40, 2, 6), 'dough.jpg');
const cheddar = new Ingredient('4', 'Cheddar', 1.5, new Nutrition(113, 0.1, 9.4, 7.0), './assets/imgs/cheddar.svg');
const onions = new Ingredient('5', 'Onions', 0.29, new Nutrition(40, 9.0, 0.1, 1.1), './assets/imgs/onion.svg');
const bacon = new Ingredient('6', 'Bacon', 0.59, new Nutrition(42, 0.2, 3.3, 3.0), './assets/imgs/bacon.svg');
const pepperoni = new Ingredient('7', 'Pepperoni', 2.5, new Nutrition(150, 1, 13, 6), 'pepperoni.jpg');
const mushroom = new Ingredient('8', 'Mushroom', 1.0, new Nutrition(15, 2, 0.1, 1), './assets/imgs/mushroom.svg');
const bellPepper = new Ingredient('9', 'Bell Pepper', 1.0, new Nutrition(0,0.25, 0.0, 0), './assets/imgs/bell-pepper.svg');
const shrimp = new Ingredient('10', 'Shrimp', 4.0, new Nutrition(10,2.25, 3.0, 8.0,), './assets/imgs/shrimp.svg');
const milk = new Ingredient('1', 'Milk', 0.5, new Nutrition(42, 5, 1, 3), './assets/imgs/milk.svg');
const sugar = new Ingredient('2', 'Sugar', 0.1, new Nutrition(387, 100, 0, 0), './assets/imgs/sugar.svg');
const coffee = new Ingredient('3', 'Coffee', 0.3, new Nutrition(2, 0, 0, 0), './assets/imgs/coffee.svg');
const potato = new Ingredient('4', 'Potato', 0.2, new Nutrition(77, 17, 0.1, 2), './assets/imgs/potato.svg');
const strawberry = new Ingredient('5', 'Strawberry', 0.5, new Nutrition(32, 8, 0.3, 1), './assets/imgs/strawberry.svg');
const cream = new Ingredient('6', 'Cream', 0.8, new Nutrition(50, 0.6, 5.5, 0.3), './assets/imgs/cream.svg');

// Comidas
const pizzaMargherita = new Food(
  1,
  'Pizza Margherita',
  'Classic Italian pizza with cheese and tomato.',
  [cheese, tomato, dough],
  12.99,
  false,
  true,
  '../assets/imgs/pizza.svg',
  [shrimp, mushroom, bellPepper],
  [],
  ['Italian', 'Vegetarian']
);

const cheeseburger = new Food(
  2,
  'Mr. Cheezy',
  'Each Mr.Cheeze® includes a delectable Cheese Bacon Burger, featuring thick-cut applewood smoked bacon atop a juicy quarter-pound patty.',
  [cheese, tomato, dough], // Assuming dough as a bun here
  5.99,
  true,
  false,
  '../assets/imgs/hamburger.svg',
  [cheddar, bacon, onions],
  [],
  ['Classic Taste', 'Bestseller']
);

const iceCream = new Food(
  1,
  'Ice Cream',
  'A creamy dessert made from milk, cream, and sugar.',
  [milk, sugar, cream],
  3.50,
  false,
  false,
  '../assets/imgs/icecream.svg',
  [],
  [],
  ['Classic Taste', 'Delicious']
);

const frenchFries = new Food(
  2,
  'French Fries',
  'Crispy deep-fried potato strips.',
  [potato],
  2.00,
  false,
  false,
  '../assets/imgs/french-fries.svg',
  [],
  [],
  ['Golden Color', 'Crunchy']
);

const espresso = new Food(
  3,
  'Espresso',
  'Strong black coffee made by forcing steam through ground coffee beans.',
  [coffee],
  2.50,
  false,
  false,
  '../assets/imgs/espresso.svg',
  [],
  [],
  ['Steamy', 'Handmade']
);

const soda = new Food(
  4,
  'Soda',
  'A carbonated soft drink with sugar or artificial sweeteners.',
  [sugar],
  1.50,
  false,
  false,
  '../assets/imgs/soda-can.svg',
  [],
  [],
  ['Freezing Cold', 'Unique Flavor']
);

const coke = new Food(
  5,
  'Coke',
  'A popular brand of carbonated soft drink.',
  [sugar],
  1.50,
  false,
  false,
  '../assets/imgs/coke.svg',
  [],
  [],
  ['Classic Taste', 'Freezing Cold']
);

const strawberryIceCreamCone = new Food(
  6,
  'Strawberry Ice Cream Cone',
  'A cone filled with strawberry-flavored ice cream.',
  [milk, sugar, strawberry, cream],
  4.00,
  false,
  false,
  '../assets/imgs/ice-cream-cone.svg',
  [],
  [],
  ['Delicious', 'Flavorful']
);

// Exportando os dados
export const foodList = [pizzaMargherita, cheeseburger, iceCream, frenchFries, espresso, soda, coke, strawberryIceCreamCone];