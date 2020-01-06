export const Restaurants = {
  rialto: {
    name: "Rialto",
    location: {
      name: "720 Garrison Ave",
      address: "https://goo.gl/maps/tXo5y9ccKjo9A9EF6"
    },
    phone: "(479) 769-2406",
    dressings: [
      "sun-dried tomato vinaigrette",
      "raspberry vinaigrette",
      "chipotle ranch",
      "honey mustard",
      "blue cheese",
      "ranch"
    ],
    sides: [
      "asparagus",
      "wild rice",
      "seasoned fries",
      "roasted garlic spinach",
      "seasonal vegetables",
      "whipped potatoes",
      "twice-baked potato"
    ],
    items: [
      {
        name: "Crab Cake",
        category: "appetizer",
        url: "crab-cake",
        price: "10.50",
        types: ["seafood"],
        info: `jumbo lump crab cake,shrimp, with artichoke spinach cream sauce`
      },
      {
        name: "Shrimp Ceviche",
        category: "appetizer",
        url: "ceviche",
        price: "10.50",
        types: ["seafood", "gluten-free"],
        info: `shrimp poached in lime juice, old bay spices and served with pico de gallo, tortilla chips, and avocado cocktail sauce`
      },
      {
        name: "Osso Bucco",
        category: "entree",
        url: "osso",
        price: "24.50",
        types: ["pork"],
        info: `pork shank simmered in red wine and demi glaz with carrots, celery, onions`
      },
      {
        name: "Boston Casserole",
        url: "boston",
        price: "25",
        types: ["seafood"],
        category: "entree",
        info: `shrimp, scallops, lobster, crabmeat, water chestnuts broccoli, mozzarella, newburg sauce, linguine`
      },
      {
        url: "cf-steak",
        name: "Chicken Fried Steak",
        price: "15.50",
        types: ["beef"],
        category: "entree",
        info: `breaded chopped steak with peppered gravy`
      },
      {
        url: "cheesecake",
        name: "Cheesecake",
        price: "5",
        types: [],
        category: "dessert",
        info: `Banana Pudding Cheesecake`
      },
      {
        url: "ice-cream",
        name: "Ice Cream",
        price: "5",
        types: [],
        category: "dessert",
        info: `Smoked Maple & Bourbon Praline`
      },
      {
        url: "scallops",
        name: "Scallops Florentine",
        price: "20.95",
        types: ["gluten-free", "seafood"],
        category: "entree",
        info: `pan-seared scallops, risotto, spinach with pomodoro sauce`
      },
      {
        url: "chicken",
        name: "JT's Chicken",
        price: "20",
        types: ["chicken"],
        category: "entree",
        info: `pan-seared chicken, jack daniels, mushroom and cream sauce`
      },
      {
        url: "spring-rolls",
        name: `Shina's Spring Rolls (4)`,
        price: "9.50",
        types: [],
        category: "appetizer",
        info: `ground beef, chicken, pork, noodles, vegetables, wrapped and deep-fried with oriental sauce`
      },
      {
        url: "wings",
        name: "Wings (8)",
        price: "10",
        types: ["chicken"],
        category: "appetizer",
        info: `deep-fried and tossed in a light cajun sauce
        topped with cilantro and gorgonzola
        chipotle ranch`
      },
      {
        url: "cheese",
        name: "Breaded Mozzarella",
        price: "9.50",
        types: [],
        category: "appetizer",
        info: `logs of fresh mozzarella, italian breading, deep-fried, with spicy caper marinara`
      },
      {
        name: "Chicken Alfredo",
        category: "entree",
        url: "alfredo",
        price: "14.50",
        types: [],
        info: `linguine and parmesan with toast points`
      },
      {
        name: "Creme Brulee",
        category: "dessert",
        types: [],
        url: "creme-brulee",
        price: "5"
      },
      {
        name: "Tiramisu",
        types: [],
        category: "dessert",
        url: "tiramisu",
        price: "5"
      }
    ]
  }
};
