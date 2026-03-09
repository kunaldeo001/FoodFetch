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
    image: "https://picsum.photos/seed/rest-biryani/800/600",
    description: "Authentic Hyderabadi biryanis and North Indian delights.",
    menu: [
      { id: "m1", name: "Hyderabadi Chicken Biryani", description: "Long grain basmati rice cooked with succulent chicken and spices.", price: 320, image: "https://picsum.photos/seed/biryani-chicken/400/300", category: "Biryani", isVeg: false, rating: true },
      { id: "m2", name: "Paneer Tikka", description: "Grilled cottage cheese cubes marinated in yogurt and spices.", price: 240, image: "https://picsum.photos/seed/paneer-tikka/400/300", category: "Starters", isVeg: true },
      { id: "m3", name: "Butter Chicken", description: "Classic creamy tomato-based chicken curry.", price: 350, image: "https://picsum.photos/seed/butter-chicken/400/300", category: "Main Course", isVeg: false }
    ]
  },
  {
    id: "r2",
    name: "Pizza Paradise",
    cuisine: "Italian, Pizzas",
    rating: 4.5,
    deliveryTime: "25-30 min",
    costForTwo: 600,
    image: "https://picsum.photos/seed/rest-pizza/800/600",
    description: "Hand-tossed pizzas with the freshest ingredients.",
    menu: [
      { id: "m4", name: "Margherita Pizza", description: "Classic tomato sauce, mozzarella, and fresh basil.", price: 299, image: "https://picsum.photos/seed/pizza-margherita/400/300", category: "Pizza", isVeg: true, rating: true },
      { id: "m5", name: "Pepperoni Feast", description: "Loaded with pork pepperoni and extra cheese.", price: 499, image: "https://picsum.photos/seed/pizza-pepperoni/400/300", category: "Pizza", isVeg: false },
      { id: "m6", name: "Garlic Breadsticks", description: "Freshly baked bread with garlic butter.", price: 149, image: "https://picsum.photos/seed/garlic-bread-sticks/400/300", category: "Sides", isVeg: true }
    ]
  },
  {
    id: "r3",
    name: "Green Wok",
    cuisine: "Chinese, Asian",
    rating: 4.1,
    deliveryTime: "35-40 min",
    costForTwo: 450,
    image: "https://picsum.photos/seed/rest-wok/800/600",
    description: "Fusion Chinese food with a healthy twist.",
    menu: [
      { id: "m7", name: "Veg Hakka Noodles", description: "Stir-fried noodles with crisp vegetables.", price: 180, image: "https://picsum.photos/seed/veg-noodles/400/300", category: "Main Course", isVeg: true, rating: true },
      { id: "m8", name: "Chicken Manchurian", description: "Spicy and tangy chicken balls in gravy.", price: 260, image: "https://picsum.photos/seed/chicken-manchurian/400/300", category: "Starters", isVeg: false }
    ]
  },
  {
    id: "r4",
    name: "Burger King",
    cuisine: "Burgers, American",
    rating: 4.2,
    deliveryTime: "20-25 min",
    costForTwo: 400,
    image: "https://picsum.photos/seed/rest-burger/800/600",
    description: "Flame-grilled burgers and crispy fries.",
    menu: [
      { id: "m9", name: "Whopper", description: "A quarter-pound of flame-grilled beef.", price: 199, image: "https://picsum.photos/seed/whopper/400/300", category: "Burgers", isVeg: false, rating: true },
      { id: "m10", name: "Veggie Burger", description: "Crispy vegetable patty with fresh lettuce.", price: 149, image: "https://picsum.photos/seed/veggie-burger/400/300", category: "Burgers", isVeg: true }
    ]
  },
  {
    id: "r5",
    name: "Dosa Delight",
    cuisine: "South Indian",
    rating: 4.4,
    deliveryTime: "25-30 min",
    costForTwo: 300,
    image: "https://picsum.photos/seed/rest-dosa/800/600",
    description: "Crispy dosas and fluffy idlis with authentic chutneys.",
    menu: [
      { id: "m11", name: "Masala Dosa", description: "Crispy rice crepe filled with spiced potato mash.", price: 160, image: "https://picsum.photos/seed/masala-dosa/400/300", category: "Main Course", isVeg: true, rating: true },
      { id: "m12", name: "Idli Sambhar", description: "Steamed rice cakes served with lentil stew and coconut chutney.", price: 120, image: "https://picsum.photos/seed/idli/400/300", category: "Main Course", isVeg: true }
    ]
  },
  {
    id: "r6",
    name: "The Sweet Spot",
    cuisine: "Desserts, Bakery",
    rating: 4.7,
    deliveryTime: "15-20 min",
    costForTwo: 350,
    image: "https://picsum.photos/seed/rest-bakery/800/600",
    description: "Satisfy your sweet tooth with our fresh bakes.",
    menu: [
      { id: "m13", name: "Chocolate Lava Cake", description: "Warm chocolate cake with a gooey molten center.", price: 180, image: "https://picsum.photos/seed/lava-cake/400/300", category: "Desserts", isVeg: true, rating: true }
    ]
  },
  {
    id: "r7",
    name: "Healthy Bowls",
    cuisine: "Healthy Food, Salads",
    rating: 4.6,
    deliveryTime: "30-35 min",
    costForTwo: 550,
    image: "https://picsum.photos/seed/rest-salad/800/600",
    description: "Fresh, nutritious, and delicious bowls for a better you.",
    menu: [
      { id: "m14", name: "Avocado Quinoa Salad", description: "Fresh greens with avocado, quinoa, and lemon dressing.", price: 340, image: "https://picsum.photos/seed/avocado-salad/400/300", category: "Salads", isVeg: true, rating: true }
    ]
  },
  {
    id: "r8",
    name: "The Curry House",
    cuisine: "North Indian",
    rating: 4.0,
    deliveryTime: "40-45 min",
    costForTwo: 450,
    image: "https://picsum.photos/seed/rest-curry/800/600",
    description: "Home-style Indian curries and fragrant basmati rice.",
    menu: [
      { id: "m15", name: "Kadai Paneer", description: "Paneer cooked in a spicy gravy with bell peppers.", price: 280, image: "https://picsum.photos/seed/kadai-paneer/400/300", category: "Main Course", isVeg: true, rating: true }
    ]
  },
  {
    id: "r9",
    name: "Pasta Palace",
    cuisine: "Italian, Pasta",
    rating: 4.3,
    deliveryTime: "25-30 min",
    costForTwo: 700,
    image: "https://picsum.photos/seed/rest-pasta/800/600",
    description: "Authentic Italian pastas and creamy sauces.",
    menu: [
      { id: "m16", name: "Penne Alfredo", description: "Penne pasta in a rich and creamy white sauce.", price: 399, image: "https://picsum.photos/seed/pasta-alfredo/400/300", category: "Pasta", isVeg: true, rating: true }
    ]
  }
];
