export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  rating?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  costForTwo: number;
  image: string;
  description: string;
  menu: MenuItem[];
}

export const CATEGORIES = [
  { name: "Biryani", imageId: "cuisine-biryani" },
  { name: "Pizza", imageId: "cuisine-pizza" },
  { name: "Burgers", imageId: "cuisine-burgers" },
  { name: "North Indian", imageId: "cuisine-north-indian" },
  { name: "Chinese", imageId: "cuisine-chinese" },
  { name: "Desserts", imageId: "cuisine-desserts" },
  { name: "Healthy Food", imageId: "cuisine-healthy" },
  { name: "South Indian", imageId: "cuisine-south-indian" }
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: "r1",
    name: "Biryani Blues",
    cuisine: "North Indian, Biryani",
    rating: 4.3,
    deliveryTime: "30-35 min",
    costForTwo: 500,
    image: "https://picsum.photos/seed/biryani-pot-1/800/600",
    description: "Authentic Hyderabadi biryanis and North Indian delights.",
    menu: [
      { id: "m1", name: "Hyderabadi Chicken Biryani", description: "Long grain basmati rice cooked with succulent chicken and spices.", price: 320, image: "https://picsum.photos/seed/biryani-chicken-1/400/300", category: "Biryani", isVeg: false, rating: true },
      { id: "m2", name: "Paneer Tikka", description: "Grilled cottage cheese cubes marinated in yogurt and spices.", price: 240, image: "https://picsum.photos/seed/paneer-tikka-1/400/300", category: "Starters", isVeg: true },
      { id: "m3", name: "Butter Chicken", description: "Classic creamy tomato-based chicken curry.", price: 350, image: "https://picsum.photos/seed/butter-chicken-1/400/300", category: "Main Course", isVeg: false }
    ]
  },
  {
    id: "r2",
    name: "Pizza Paradise",
    cuisine: "Italian, Pizzas",
    rating: 4.5,
    deliveryTime: "25-30 min",
    costForTwo: 600,
    image: "https://picsum.photos/seed/pizza-slice-1/800/600",
    description: "Hand-tossed pizzas with the freshest ingredients.",
    menu: [
      { id: "m4", name: "Margherita Pizza", description: "Classic tomato sauce, mozzarella, and fresh basil.", price: 299, image: "https://picsum.photos/seed/margherita-pizza-1/400/300", category: "Pizza", isVeg: true, rating: true },
      { id: "m5", name: "Pepperoni Feast", description: "Loaded with pork pepperoni and extra cheese.", price: 499, image: "https://picsum.photos/seed/pepperoni-pizza-1/400/300", category: "Pizza", isVeg: false },
      { id: "m6", name: "Garlic Breadsticks", description: "Freshly baked bread with garlic butter.", price: 149, image: "https://picsum.photos/seed/garlic-bread-1/400/300", category: "Sides", isVeg: true }
    ]
  },
  {
    id: "r3",
    name: "Green Wok",
    cuisine: "Chinese, Asian",
    rating: 4.1,
    deliveryTime: "35-40 min",
    costForTwo: 450,
    image: "https://picsum.photos/seed/asian-dish-1/800/600",
    description: "Fusion Chinese food with a healthy twist.",
    menu: [
      { id: "m7", name: "Veg Hakka Noodles", description: "Stir-fried noodles with crisp vegetables.", price: 180, image: "https://picsum.photos/seed/veg-noodles-1/400/300", category: "Main Course", isVeg: true, rating: true },
      { id: "m8", name: "Chicken Manchurian", description: "Spicy and tangy chicken balls in gravy.", price: 260, image: "https://picsum.photos/seed/chicken-manchurian-1/400/300", category: "Starters", isVeg: false }
    ]
  },
  {
    id: "r4",
    name: "Burger King",
    cuisine: "Burgers, American",
    rating: 4.2,
    deliveryTime: "20-25 min",
    costForTwo: 400,
    image: "https://picsum.photos/seed/burger-meal-1/800/600",
    description: "Flame-grilled burgers and crispy fries.",
    menu: [
      { id: "m9", name: "Whopper", description: "A quarter-pound of flame-grilled beef.", price: 199, image: "https://picsum.photos/seed/whopper-burger-1/400/300", category: "Burgers", isVeg: false, rating: true },
      { id: "m10", name: "Veggie Burger", description: "Crispy vegetable patty with fresh lettuce.", price: 149, image: "https://picsum.photos/seed/veggie-burger-1/400/300", category: "Burgers", isVeg: true }
    ]
  }
];
