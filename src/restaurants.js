export const Restaurants = {
  rialto: {
    name: "Rialto",
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
        url: "shrimp-ceviche",
        price: "10.50",
        types: ["seafood", "vegan"],
        info: `shrimp poached in lime juice, old bay spices and served with pico de gallo, tortilla chips, and avocado cocktail sauce`
      },
      {
        name: "JT's Chicken",
        category: "entree",
        url: "jt-chicken",
        price: "20",
        types: ["chicken"],
        info: `pan-seared chicken, jack daniels, mushroom and cream sauce`
      },
      {
        name: "Osso Bucco",
        category: "entree",
        url: "osso-bucco",
        price: "24.50",
        types: ["pork"],
        info: `pork shank simmered in red wine and demi glaze, carrots, celery, onions`
      }
    ]
  }
};
