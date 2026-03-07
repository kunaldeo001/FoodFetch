export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
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
  "Biryani", "Pizza", "Burgers", "North Indian", "Chinese", "Desserts", "Healthy Food", "South Indian"
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: "r1",
    name: "Biryani Blues",
    cuisine: "North Indian, Biryani",
    rating: 4.3,
    deliveryTime: "30-35 min",
    costForTwo: 500,
    image: "https://picsum.photos/seed/biryani/800/600",
    description: "Authentic Hyderabadi biryanis and North Indian delights.",
    menu: [
      { id: "m1", name: "Hyderabadi Chicken Biryani", description: "Long grain basmati rice cooked with succulent chicken and spices.", price: 320, image: "https://picsum.photos/seed/m1/400/300", category: "Biryani", isVeg: false },
      { id: "m2", name: "Paneer Tikka", description: "Grilled cottage cheese cubes marinated in yogurt and spices.", price: 240, image: "https://picsum.photos/seed/m2/400/300", category: "Starters", isVeg: true },
      { id: "m3", name: "Butter Chicken", description: "Classic creamy tomato-based chicken curry.", price: 350, image: "https://picsum.photos/seed/m3/400/300", category: "Main Course", isVeg: false }
    ]
  },
  {
    id: "r2",
    name: "Pizza Paradise",
    cuisine: "Italian, Pizzas",
    rating: 4.5,
    deliveryTime: "25-30 min",
    costForTwo: 600,
    image: "https://picsum.photos/seed/pizza-rest/800/600",
    description: "Hand-tossed pizzas with the freshest ingredients.",
    menu: [
      { id: "m4", name: "Margherita Pizza", description: "Classic tomato sauce, mozzarella, and fresh basil.", price: 299, image: "https://picsum.photos/seed/m4/400/300", category: "Pizza", isVeg: true },
      { id: "m5", name: "Pepperoni Feast", description: "Loaded with pork pepperoni and extra cheese.", price: 499, image: "https://picsum.photos/seed/m5/400/300", category: "Pizza", isVeg: false },
      { id: "m6", name: "Garlic Breadsticks", description: "Freshly baked bread with garlic butter.", price: 149, image: "https://picsum.photos/seed/m6/400/300", category: "Sides", isVeg: true }
    ]
  },
  {
    id: "r3",
    name: "Green Wok",
    cuisine: "Chinese, Asian",
    rating: 4.1,
    deliveryTime: "35-40 min",
    costForTwo: 450,
    image: "https://picsum.photos/seed/wok/800/600",
    description: "Fusion Chinese food with a healthy twist.",
    menu: [
      { id: "m7", name: "Veg Hakka Noodles", description: "Stir-fried noodles with crisp vegetables.", price: 180, image: "https://picsum.photos/seed/m7/400/300", category: "Main Course", isVeg: true },
      { id: "m8", name: "Chicken Manchurian", description: "Spicy and tangy chicken balls in gravy.", price: 260, image: "https://picsum.photos/seed/m8/400/300", category: "Starters", isVeg: false }
    ]
  }
];
