import { Food } from './models/food/food.model';
import { Ingredient } from './models/food/ingredient/ingredient.model';
import { Nutrition } from './models/food/ingredient/nutrition/nutrition.model';

// Ingredientes
const cheese = new Ingredient('1', 'Cheese', 2.0, new Nutrition(100, 1, 8, 6), './assets/imgs/cheddar.svg');
const tomato = new Ingredient('2', 'Tomato', 0.5, new Nutrition(20, 4, 0.2, 1), './assets/imgs/tomato.svg');
const dough = new Ingredient('3', 'Dough', 1.5, new Nutrition(200, 40, 2, 6), 'dough.jpg');
const cheddar = new Ingredient('4', 'Cheddar', 1.5, new Nutrition(113, 0.1, 9.4, 7.0), './assets/imgs/cheddar.svg');
const onions = new Ingredient('5', 'Onions', 0.29, new Nutrition(40, 9.0, 0.1, 1.1), './assets/imgs/onion.svg');
const bacon = new Ingredient('6', 'Bacon', 0.59, new Nutrition(42, 0.2, 3.3, 3.0), './assets/imgs/bacon.svg');
const pepperoni = new Ingredient('7', 'Pepperoni', 2.5, new Nutrition(150, 1, 13, 6), 'pepperoni.jpg');
const mushroom = new Ingredient('8', 'Mushroom', 1.0, new Nutrition(15, 2, 0.1, 1), './assets/imgs/mushroom.svg');
const bellPepper = new Ingredient('9', 'Bell Pepper', 1.0, new Nutrition(0,0.25, 0.0, 0), './assets/imgs/bell-pepper.svg');
const shrimp = new Ingredient('10', 'Shrimp', 4.0, new Nutrition(10,2.25, 3.0, 8.0,), './assets/imgs/shrimp.svg');
const milk = new Ingredient('11', 'Milk', 0.5, new Nutrition(42, 5, 1, 3), './assets/imgs/milk.svg');
const sugar = new Ingredient('12', 'Sugar', 0.1, new Nutrition(387, 100, 0, 0), './assets/imgs/sugar.svg');
const coffee = new Ingredient('13', 'Coffee', 0.3, new Nutrition(2, 0, 0, 0), './assets/imgs/coffee.svg');
const potato = new Ingredient('14', 'Potato', 0.2, new Nutrition(77, 17, 0.1, 2), './assets/imgs/potato.svg');
const strawberry = new Ingredient('15', 'Strawberry', 0.5, new Nutrition(32, 8, 0.3, 1), './assets/imgs/strawberry.svg');
const cream = new Ingredient('16', 'Cream', 0.8, new Nutrition(50, 0.6, 5.5, 0.3), './assets/imgs/cream.svg');
const bun = new Ingredient('17', 'Bun', 1.0, new Nutrition(150, 30, 2, 5), './assets/imgs/bun.svg');
const sausage = new Ingredient('18', 'Sausage', 2.5, new Nutrition(200, 1, 18, 10), './assets/imgs/sausage.svg');
const ketchup = new Ingredient('19', 'Ketchup', 0.2, new Nutrition(20, 5, 0, 0), './assets/imgs/ketchup.svg');
const mustard = new Ingredient('20', 'Mustard', 0.2, new Nutrition(15, 1, 0, 0), './assets/imgs/mustard.svg');

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
  3,
  'Ice Cream',
  'A delicious and creamy dessert made from milk, cocoa, cream, and sugar.',
  [milk, sugar, cream],
  3.50,
  false,
  false,
  '../assets/imgs/choc-icecream.svg',
  [],
  [],
  ['Classic Taste', 'Delicious']
);

const frenchFries = new Food(
  4,
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
  5,
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
  6,
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
  7,
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
  8,
  'Ice Cream',
  'A strawberry-flavored ice cream.',
  [milk, sugar, strawberry, cream],
  4.00,
  false,
  false,
  '../assets/imgs/icecream.svg',
  [],
  [],
  ['Delicious', 'Flavorful']
);

const hotdog = new Food(
  9,
  'Hotdog',
  'A delicious hotdog with a sausage, bun, and condiments.',
  [bun, sausage, ketchup, mustard],
  4.99,
  false,
  false,
  './assets/imgs/hotdog.svg',
  [onions, cheese],
  [],
  ['Classic Taste', 'Street Food']
);

// Exportando os dados
export const foodList = [
  pizzaMargherita,
  cheeseburger,
  iceCream,
  frenchFries,
  espresso,
  soda,
  coke,
  strawberryIceCreamCone,
  hotdog // Added the hotdog instance here
];