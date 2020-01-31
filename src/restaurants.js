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

    items: [
      {
        name: "Shrimp Ceviche",
        category: "appetizer",
        url: "ceviche",
        price: "10.50",
        types: ["seafood", "gluten-free"],
        info: `shrimp poached in lime juice, old bay spices, and served with pico de gallo, tortilla chips, avocado cocktail sauce`
      },
      {
        url: "cheese",
        name: "Breaded Mozzarella",
        price: "9.50",
        category: "appetizer",
        info: `logs of fresh mozzarella, italian breading, deep-fried, with spicy caper marinara`
      },
      {
        name: "14oz Ribeye",
        category: "entree",
        url: "ribeye",
        price: "30",
        types: ["beef"],
        info: `seasoned and grilled to your preference`,
        sides: ["twice baked potato", "asparagus"]
      },
      {
        url: "wings",
        name: "Wings (8)",
        price: "10",
        types: ["chicken"],
        category: "appetizer",
        info: `deep-fried and tossed in a light cajun sauce topped with cilantro and gorgonzola chipotle ranch`
      },
      {
        name: "Spinach & Shrimp",
        category: "entree",
        url: "s-s",
        price: "14",
        types: ["salad"],
        info: `blackened shrimp, panko-breaded avocado, bacon, mandarin oranges, eggs, boursin cheese, tomato, caramelized onions`
      },
      {
        name: "Pesto Linguine",
        category: "entree",
        url: "pesto",
        price: "12",
        types: ["vegetarian"],
        info: `squash, red onions, tomatoes, artichokes, mushrooms, eggplant, asparagus, spinach, vegan mozzarella`
      },
      {
        name: "Crab Cake",
        category: "appetizer",
        url: "crab-cake",
        price: "10.50",
        types: ["seafood"],
        info: `jumbo lump crab cake, shrimp, with artichoke spinach cream sauce`
      },
      {
        name: "Osso Bucco",
        category: "entree",
        url: "osso",
        price: "24.50",
        types: ["pork", "gluten-free"],
        sides: ["whipped potatoes"],
        info: `pork shank simmered in red wine and demi-glaze with carrots, celery, onions`
      },
      {
        name: "Boston Casserole",
        url: "boston",
        price: "25",
        types: ["seafood"],
        category: "entree",
        info: `shrimp, scallops, lobster, crabmeat, water chestnuts, broccoli, mozzarella, newburg sauce, linguine`
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
        url: "scallops",
        name: "Scallops Florentine",
        price: "20.95",
        types: ["gluten-free", "seafood"],
        category: "entree",
        info: `pan-seared scallops, risotto, spinach, with pomodoro sauce`
      },
      {
        url: "chicken",
        name: "JT's Chicken",
        price: "20",
        types: ["chicken"],
        sides: ["whipped potatoes", "asparagus"],
        category: "entree",
        info: `pan-seared chicken, jack daniels with mushroom cream sauce`
      },
      {
        url: "spring-rolls",
        name: `Shina's Spring Rolls (4)`,
        price: "9.50",
        category: "appetizer",
        info: `ground beef, chicken, pork, noodles, vegetables, wrapped and deep-fried with oriental sauce`
      },
      {
        name: "Chicken Avocado Club",
        category: "entree",
        url: "cac",
        price: "12",
        sides: ["seasoned fries"],
        types: ["chicken","sandwich"],
        info: `grilled chicken, bacon, avocado, swiss cheese, lettuce, tomato, chipotle aioli, on pecan and cranberry sourdough`
      },
      {
        name: "Chicken Alfredo",
        category: "entree",
        url: "alfredo",
        price: "14.50",
        types: ["chicken"],
        info: `linguine and parmesan with toast points`
      },
      {
        name: "Beef Short Rib",
        category: "entree",
        url: "short-rib",
        price: "25.50",
        types: ["beef"],
        sides: ["whipped potatoes"],
        info: `seasoned and lightly smoked with carrots, celery, onions, and demi-glaze`
      },
      {
        name: "Creme Brulee",
        category: "dessert",
        url: "creme-brulee",
        price: "5"
      },
      {
        url: "cheesecake",
        name: "Cheesecake",
        price: "5",
        category: "dessert",
        info: `Banana Pudding`
      },
      {
        url: "ice-cream",
        name: "Ice Cream",
        price: "5",
        category: "dessert",
        info: `smoked maple & bourbon praline`
      },
      {
        name: "Tiramisu",
        category: "dessert",
        url: "tiramisu",
        price: "5"
      },
      {
        name: "Blackened Sea bass",
        category: "entree",
        url: "seabass",
        price: "22.50",
        types: ["seafood", "gluten-free"],
        info: "topped wih crabmeat and tarragon cream sauce",
        sides: ["wild rice", "asparagus"]
      },
      {
        name:'Ginger Salmon',
        category: "entree",
        types: ["seafood", "gluten-free"],
        sides: ["wild rice", "seasonal vegetables"],
        url:'ginger-salmon',
        price:'24'
      },
      {
        name: "Cobb",
        category: "entree",
        url: "cobb",
        price: "12",
        types: ["salad","gluten-free"],
        info: `fresh mixed greens, avocado, tomato, eggs, cheddar, blue cheese, black olives, bacon, fried or grilled chicken, and choice of dressing`
      },
      {
        name: "Filet Mignon",
        category: "entree",
        url: "filet",
        price: "34",
        types: ["beef"],
        sides: ["asparagus","twice-baked potato"],
        info: `bacon-wrapped and topped with portobello mushroom demi-glaze`
      },
      {
        name: "Prime Rib Sandwich",
        category: "entree",
        url: "prime-rib-sandwich",
        price: "12",
        sides: ["au jus", "seasoned fries"],
        types: ["beef","sandwich"],
        info: `portobello mushrooms, swiss cheese, peppers, onions, served with horseradish aioli on a grilled hoagie`
      },

    ]
  }
};
