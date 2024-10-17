const db = require(`../db`);
const Cuisine = require(`../models/cuisine`);
const Recipe = require(`../models/recipe`);
const Direction = require(`../models/direction`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  await Cuisine.deleteMany();
  await Recipe.deleteMany();

  const mediterranean = await new Cuisine({
    name: "Mediterranean",
    description:
      "Mediterranean cuisine encompasses the culinary traditions of the countries surrounding the Mediterranean Sea. It is known for its use of fresh vegetables, fruits, whole grains, olive oil, and lean proteins like fish and poultry. Herbs like oregano, basil, and parsley are also commonly used, along with garlic, lemon, and a variety of cheeses.",
    popularIngredients:
      "Olive oil, tomatoes, cucumbers, feta cheese, chickpeas, seafood, and lamb",
    averagePrepTime: 40,
  });
  mediterranean.save();

  const italian = await new Cuisine({
    name: "Italian",
    description:
      "Italian cuisine is rich in flavors and known for its regional diversity. It emphasizes the use of fresh, high-quality ingredients like tomatoes, olive oil, garlic, and a variety of cheeses. Pasta, pizza, and seafood are staples, and meals often feature simple yet bold flavors.",
    popularIngredients:
      "Olive oil, garlic, tomatoes, pasta, basil, parmesan cheese, and seafood",
    averagePrepTime: 35,
  });
  italian.save();

  const japanese = await new Cuisine({
    name: "Japanese",
    description:
      "Japanese cuisine focuses on fresh ingredients and minimal seasoning, allowing the natural flavors of the food to shine. Dishes often feature rice, fish, and vegetables, with an emphasis on presentation and seasonal ingredients. Popular techniques include grilling, steaming, and raw preparations like sushi and sashimi.",
    popularIngredients:
      "Rice, soy sauce, fish, seaweed, tofu, miso, and pickled vegetables",
    averagePrepTime: 30,
  });
  japanese.save();

  const mexican = await new Cuisine({
    name: "Mexican",
    description:
      "Mexican cuisine is vibrant and flavorful, combining indigenous and Spanish influences. It makes use of ingredients like corn, beans, chili peppers, and avocados, often incorporating bold spices and flavors. Common dishes include tacos, enchiladas, and tamales, with regional variations throughout the country.",
    popularIngredients:
      "Corn, beans, chili peppers, avocados, tomatoes, cilantro, and lime",
    averagePrepTime: 45,
  });
  mexican.save();

  const indian = await new Cuisine({
    name: "Indian",
    description:
      "Indian cuisine is known for its rich use of spices and herbs, creating complex and aromatic flavors. It features a wide variety of vegetarian and non-vegetarian dishes, with staples like rice, lentils, and flatbreads. Popular spices include cumin, coriander, turmeric, and garam masala, often combined in intricate blends.",
    popularIngredients:
      "Rice, lentils, turmeric, cumin, coriander, garlic, ginger, and ghee",
    averagePrepTime: 50,
  });
  indian.save();

  const mediterraneanRecipe1 = new Recipe({
    cuisineID: mediterranean._id,
    name: "Mediterranean Grilled Vegetable and Couscous Salad",
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    ingredients: [
      "1 cup couscous",
      "1 zucchini, sliced",
      "1 eggplant, sliced",
      "1 red bell pepper, sliced",
      "1 yellow bell pepper, sliced",
      "1/4 cup extra virgin olive oil",
      "2 tablespoons lemon juice",
      "1 teaspoon dried oregano",
      "Salt and pepper to taste",
      "1/4 cup crumbled feta cheese (optional)",
      "Fresh parsley for garnish",
    ],
    difficulty: "Easy",
    calories: 350,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: false,
    author: "Sophia Greendale",
    rating: 4.5,
  });

  const mediterraneanRecipe2 = new Recipe({
    cuisineID: mediterranean._id,
    name: "Classic Hummus",
    servings: 6,
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    ingredients: [
      "2 cups canned chickpeas, drained",
      "1/4 cup tahini",
      "2 tablespoons olive oil",
      "2 tablespoons lemon juice",
      "2 garlic cloves",
      "Salt to taste",
      "Paprika for garnish",
      "Olive oil for garnish",
    ],
    difficulty: "Easy",
    calories: 180,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    author: "Laila Antoni",
    rating: 4.8,
  });

  const mediterraneanRecipe3 = new Recipe({
    cuisineID: mediterranean._id,
    name: "Tabbouleh Salad",
    servings: 4,
    prepTime: 15,
    cookTime: 0,
    totalTime: 15,
    ingredients: [
      "1 cup bulgur wheat",
      "2 cups fresh parsley, chopped",
      "1/4 cup mint leaves, chopped",
      "1 cucumber, diced",
      "2 tomatoes, diced",
      "1/4 cup olive oil",
      "2 tablespoons lemon juice",
      "Salt and pepper to taste",
    ],
    difficulty: "Easy",
    calories: 250,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: false,
    author: "Nadia Sevin",
    rating: 4.7,
  });

  const mediterraneanRecipe4 = new Recipe({
    cuisineID: mediterranean._id,
    name: "Greek Spanakopita",
    servings: 6,
    prepTime: 30,
    cookTime: 45,
    totalTime: 75,
    ingredients: [
      "1 lb spinach",
      "1/2 cup feta cheese",
      "1/2 cup ricotta cheese",
      "1 onion, diced",
      "2 eggs",
      "1 package phyllo dough",
      "1/4 cup olive oil",
      "Salt and pepper to taste",
    ],
    difficulty: "Medium",
    calories: 400,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: false,
    author: "Sophia Greendale",
    rating: 4.6,
  });

  const mediterraneanRecipe5 = new Recipe({
    cuisineID: mediterranean._id,
    name: "Lamb Souvlaki",
    servings: 4,
    prepTime: 25,
    cookTime: 15,
    totalTime: 40,
    ingredients: [
      "1 lb lamb, cubed",
      "1/4 cup olive oil",
      "2 tablespoons lemon juice",
      "1 teaspoon oregano",
      "2 garlic cloves, minced",
      "Salt and pepper to taste",
      "Pita bread (optional)",
    ],
    difficulty: "Medium",
    calories: 450,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    author: "Yannis Kouros",
    rating: 4.7,
  });

  const italianRecipe1 = new Recipe({
    cuisineID: italian._id,
    name: "Spaghetti Carbonara",
    servings: 4,
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    ingredients: [
      "400g spaghetti",
      "200g pancetta",
      "2 eggs",
      "1/2 cup parmesan cheese",
      "Salt and pepper to taste",
    ],
    difficulty: "Medium",
    calories: 600,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    author: "Marco Bellini",
    rating: 4.8,
  });

  const italianRecipe2 = new Recipe({
    cuisineID: italian._id,
    name: "Margherita Pizza",
    servings: 6,
    prepTime: 30,
    cookTime: 20,
    totalTime: 50,
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste",
    ],
    difficulty: "Medium",
    calories: 500,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: false,
    author: "Francesca Rossi",
    rating: 4.7,
  });

  const italianRecipe3 = new Recipe({
    cuisineID: italian._id,
    name: "Risotto alla Milanese",
    servings: 4,
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    ingredients: [
      "1 1/2 cups Arborio rice",
      "4 cups chicken broth",
      "1/4 cup white wine",
      "1/4 cup grated parmesan",
      "1 pinch saffron",
      "Salt and pepper to taste",
    ],
    difficulty: "Medium",
    calories: 400,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    author: "Giovanni Amato",
    rating: 4.6,
  });

  const italianRecipe4 = new Recipe({
    cuisineID: italian._id,
    name: "Caprese Salad",
    servings: 4,
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    ingredients: [
      "Fresh mozzarella",
      "Tomatoes",
      "Basil leaves",
      "Olive oil",
      "Salt and pepper to taste",
    ],
    difficulty: "Easy",
    calories: 250,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: true,
    author: "Lucia Vieri",
    rating: 4.9,
  });

  const italianRecipe5 = new Recipe({
    cuisineID: italian._id,
    name: "Tiramisu",
    servings: 6,
    prepTime: 30,
    cookTime: 0,
    totalTime: 30,
    ingredients: [
      "1 cup espresso",
      "2 tablespoons cocoa powder",
      "3 egg yolks",
      "1/2 cup sugar",
      "1/2 cup mascarpone cheese",
      "Ladyfingers",
    ],
    difficulty: "Medium",
    calories: 450,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: false,
    author: "Giovanna Conti",
    rating: 4.8,
  });

  const japaneseRecipe1 = new Recipe({
    cuisineID: japanese._id,
    name: "Sushi Rolls",
    servings: 4,
    prepTime: 20,
    cookTime: 10,
    totalTime: 30,
    ingredients: [
      "2 cups sushi rice",
      "1/4 cup rice vinegar",
      "Nori sheets",
      "Cucumber, sliced",
      "Avocado, sliced",
      "Tuna or salmon (optional)",
      "Soy sauce",
    ],
    difficulty: "Medium",
    calories: 300,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: true,
    author: "Yuki Nakamura",
    rating: 4.6,
  });

  const japaneseRecipe2 = new Recipe({
    cuisineID: japanese._id,
    name: "Ramen",
    servings: 4,
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    ingredients: [
      "4 cups chicken broth",
      "200g ramen noodles",
      "1 boiled egg",
      "1/2 cup sliced pork",
      "Soy sauce",
      "Green onions for garnish",
    ],
    difficulty: "Medium",
    calories: 600,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    author: "Akira Sato",
    rating: 4.7,
  });

  const japaneseRecipe3 = new Recipe({
    cuisineID: japanese._id,
    name: "Tempura",
    servings: 4,
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    ingredients: [
      "1/2 cup flour",
      "1/2 cup cold water",
      "Shrimp",
      "Zucchini, sliced",
      "Carrots, sliced",
      "Soy sauce",
    ],
    difficulty: "Medium",
    calories: 400,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    author: "Hana Yamada",
    rating: 4.5,
  });

  const japaneseRecipe4 = new Recipe({
    cuisineID: japanese._id,
    name: "Miso Soup",
    servings: 4,
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    ingredients: [
      "4 cups dashi stock",
      "2 tablespoons miso paste",
      "1/2 cup tofu, cubed",
      "Green onions for garnish",
      "Seaweed",
    ],
    difficulty: "Easy",
    calories: 100,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    author: "Keiko Tanaka",
    rating: 4.8,
  });

  const japaneseRecipe5 = new Recipe({
    cuisineID: japanese._id,
    name: "Yakitori",
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    ingredients: [
      "1 lb chicken thighs",
      "1/4 cup soy sauce",
      "2 tablespoons sake",
      "Green onions",
      "Wooden skewers",
    ],
    difficulty: "Medium",
    calories: 350,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    author: "Takashi Murakami",
    rating: 4.6,
  });

  const mexicanRecipe1 = new Recipe({
    cuisineID: mexican._id,
    name: "Tacos Al Pastor",
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    ingredients: [
      "1 lb pork",
      "1/4 cup pineapple juice",
      "2 tablespoons chili powder",
      "1 teaspoon cumin",
      "Corn tortillas",
      "Pineapple slices",
      "Onion, chopped",
      "Cilantro, chopped",
    ],
    difficulty: "Medium",
    calories: 400,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    author: "Carlos Mendoza",
    rating: 4.8,
  });

  const mexicanRecipe2 = new Recipe({
    cuisineID: mexican._id,
    name: "Guacamole",
    servings: 4,
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    ingredients: [
      "3 avocados",
      "1 lime, juiced",
      "1/4 cup cilantro, chopped",
      "1/4 cup onion, chopped",
      "Salt to taste",
      "Tomato, diced",
    ],
    difficulty: "Easy",
    calories: 200,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    author: "Maria Diaz",
    rating: 4.9,
  });

  const mexicanRecipe3 = new Recipe({
    cuisineID: mexican._id,
    name: "Chicken Enchiladas",
    servings: 4,
    prepTime: 20,
    cookTime: 25,
    totalTime: 45,
    ingredients: [
      "1 lb shredded chicken",
      "12 corn tortillas",
      "2 cups enchilada sauce",
      "1/2 cup shredded cheese",
      "1/4 cup sour cream",
    ],
    difficulty: "Medium",
    calories: 600,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    author: "Diego Gutierrez",
    rating: 4.7,
  });

  const mexicanRecipe4 = new Recipe({
    cuisineID: mexican._id,
    name: "Churros",
    servings: 6,
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    ingredients: [
      "1 cup flour",
      "1 cup water",
      "1/4 cup butter",
      "1/2 cup sugar",
      "1 teaspoon cinnamon",
      "Vegetable oil for frying",
    ],
    difficulty: "Medium",
    calories: 350,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: false,
    author: "Sofia Castillo",
    rating: 4.6,
  });

  const mexicanRecipe5 = new Recipe({
    cuisineID: mexican._id,
    name: "Pozole",
    servings: 6,
    prepTime: 30,
    cookTime: 90,
    totalTime: 120,
    ingredients: [
      "2 lbs pork shoulder",
      "1 can hominy",
      "2 tablespoons chili powder",
      "1 onion, chopped",
      "1 garlic clove",
      "Cilantro and lime for garnish",
    ],
    difficulty: "Medium",
    calories: 500,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    author: "Juan Ramirez",
    rating: 4.8,
  });

  const indianRecipe1 = new Recipe({
    cuisineID: indian._id,
    name: "Chicken Tikka Masala",
    servings: 4,
    prepTime: 25,
    cookTime: 30,
    totalTime: 55,
    ingredients: [
      "1 lb chicken breast, cubed",
      "1 cup yogurt",
      "2 tablespoons garam masala",
      "1 onion, chopped",
      "1 can tomato sauce",
      "1/2 cup cream",
      "Cilantro for garnish",
    ],
    difficulty: "Medium",
    calories: 600,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    author: "Ravi Patel",
    rating: 4.7,
  });

  const indianRecipe2 = new Recipe({
    cuisineID: indian._id,
    name: "Vegetable Biryani",
    servings: 4,
    prepTime: 20,
    cookTime: 30,
    totalTime: 50,
    ingredients: [
      "2 cups basmati rice",
      "1 cup mixed vegetables (carrots, peas, potatoes)",
      "1 onion, chopped",
      "2 tablespoons curry powder",
      "1/4 cup yogurt",
      "Cilantro for garnish",
    ],
    difficulty: "Medium",
    calories: 450,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: true,
    author: "Anjali Rao",
    rating: 4.8,
  });

  const indianRecipe3 = new Recipe({
    cuisineID: indian._id,
    name: "Palak Paneer",
    servings: 4,
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    ingredients: [
      "1 lb spinach",
      "1/2 cup paneer cheese, cubed",
      "1 onion, chopped",
      "2 garlic cloves, minced",
      "1 teaspoon cumin",
      "1/4 cup cream",
    ],
    difficulty: "Medium",
    calories: 400,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: true,
    author: "Vikram Singh",
    rating: 4.9,
  });

  const indianRecipe4 = new Recipe({
    cuisineID: indian._id,
    name: "Chana Masala",
    servings: 4,
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    ingredients: [
      "2 cups chickpeas",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "2 tablespoons garam masala",
      "1 teaspoon turmeric",
      "Cilantro for garnish",
    ],
    difficulty: "Easy",
    calories: 350,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    author: "Priya Desai",
    rating: 4.8,
  });

  const indianRecipe5 = new Recipe({
    cuisineID: indian._id,
    name: "Butter Chicken",
    servings: 4,
    prepTime: 30,
    cookTime: 30,
    totalTime: 60,
    ingredients: [
      "1 lb chicken thighs, cubed",
      "1/2 cup yogurt",
      "1/4 cup butter",
      "1 onion, chopped",
      "1 can tomato sauce",
      "1/2 cup cream",
      "Garam masala",
    ],
    difficulty: "Medium",
    calories: 700,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    author: "Amit Sharma",
    rating: 4.7,
  });

  await mediterraneanRecipe1.save();
  await mediterraneanRecipe2.save();
  await mediterraneanRecipe3.save();
  await mediterraneanRecipe4.save();
  await mediterraneanRecipe5.save();

  await italianRecipe1.save();
  await italianRecipe2.save();
  await italianRecipe3.save();
  await italianRecipe4.save();
  await italianRecipe5.save();

  await japaneseRecipe1.save();
  await japaneseRecipe2.save();
  await japaneseRecipe3.save();
  await japaneseRecipe4.save();
  await japaneseRecipe5.save();

  await mexicanRecipe1.save();
  await mexicanRecipe2.save();
  await mexicanRecipe3.save();
  await mexicanRecipe4.save();
  await mexicanRecipe5.save();

  await indianRecipe1.save();
  await indianRecipe2.save();
  await indianRecipe3.save();
  await indianRecipe4.save();
  await indianRecipe5.save();

  const directions = [
    {
      _id: "Med1_Dir1",
      recipeID: mediterraneanRecipe1._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Cook the couscous according to package instructions.",
          estimatedTime: 10,
          optionalTips: "Fluff couscous with a fork after cooking.",
          tools: "Pot, Fork",
        },
        {
          stepNumber: 2,
          instruction: "Grill the vegetables until tender.",
          estimatedTime: 8,
          optionalTips: "Use a grill pan if you don't have a barbecue.",
          tools: "Grill Pan",
        },
        {
          stepNumber: 3,
          instruction: "Mix the couscous and vegetables together.",
          estimatedTime: 2,
          optionalTips: "Let the vegetables cool slightly before mixing.",
          tools: "Mixing Bowl",
        },
      ],
    },
    {
      _id: "Med2_Dir1",
      recipeID: mediterraneanRecipe2._id,
      steps: [
        {
          stepNumber: 1,
          instruction:
            "Blend chickpeas, tahini, lemon juice, and garlic in a food processor.",
          estimatedTime: 5,
          optionalTips: "Add water if needed to reach desired consistency.",
          tools: "Food Processor",
        },
        {
          stepNumber: 2,
          instruction: "Slowly add olive oil while blending.",
          estimatedTime: 2,
          tools: "Food Processor",
        },
        {
          stepNumber: 3,
          instruction: "Season with salt and cumin.",
          estimatedTime: 1,
          optionalTips: "Taste and adjust seasoning.",
          tools: "Spoon",
        },
        {
          stepNumber: 4,
          instruction:
            "Serve with a drizzle of olive oil and garnish with paprika.",
          estimatedTime: 1,
          tools: "Serving Dish",
        },
      ],
    },
    {
      _id: "Med3_Dir1",
      recipeID: mediterraneanRecipe3._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Cook bulgur wheat according to package instructions.",
          estimatedTime: 10,
          tools: "Pot",
        },
        {
          stepNumber: 2,
          instruction: "Chop parsley, mint, tomatoes, and cucumber finely.",
          estimatedTime: 10,
          tools: "Knife, Cutting Board",
        },
        {
          stepNumber: 3,
          instruction: "Mix bulgur with the chopped vegetables.",
          estimatedTime: 2,
          tools: "Mixing Bowl, Spoon",
        },
        {
          stepNumber: 4,
          instruction: "Add olive oil, lemon juice, and salt. Toss to combine.",
          estimatedTime: 1,
          tools: "Spoon",
        },
      ],
    },
    {
      _id: "Med4_Dir1",
      recipeID: mediterraneanRecipe4._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Sauté onions and spinach in olive oil until wilted.",
          estimatedTime: 5,
          optionalTips: "Use medium heat to avoid burning the onions.",
          tools: "Skillet",
        },
        {
          stepNumber: 2,
          instruction:
            "Mix spinach with crumbled feta and season with salt and pepper.",
          estimatedTime: 2,
          tools: "Mixing Bowl",
        },
        {
          stepNumber: 3,
          instruction:
            "Layer phyllo dough sheets, brushing each with melted butter.",
          estimatedTime: 10,
          optionalTips: "Work quickly with phyllo to prevent drying out.",
          tools: "Pastry Brush",
        },
        {
          stepNumber: 4,
          instruction:
            "Spread spinach mixture on the phyllo, and layer more phyllo on top.",
          estimatedTime: 3,
          tools: "Pastry Brush",
        },
        {
          stepNumber: 5,
          instruction: "Bake until golden brown.",
          estimatedTime: 25,
          optionalTips: "Preheat oven to 350°F (175°C).",
          tools: "Oven",
        },
      ],
    },
    {
      _id: "Med5_Dir1",
      recipeID: mediterraneanRecipe5._id,
      steps: [
        {
          stepNumber: 1,
          instruction:
            "Marinate lamb in olive oil, lemon juice, garlic, oregano, and pepper for at least 1 hour.",
          estimatedTime: 60,
          tools: "Mixing Bowl",
        },
        {
          stepNumber: 2,
          instruction: "Skewer the marinated lamb pieces.",
          estimatedTime: 5,
          tools: "Skewers",
        },
        {
          stepNumber: 3,
          instruction: "Grill the lamb skewers until cooked through.",
          estimatedTime: 10,
          tools: "Grill",
        },
        {
          stepNumber: 4,
          instruction: "Serve with pita bread and tzatziki.",
          estimatedTime: 2,
          tools: "Serving Dish",
        },
      ],
    },

    {
      _id: "It1_Dir1",
      recipeID: italianRecipe1._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Cook spaghetti in salted water until al dente.",
          estimatedTime: 10,
          tools: "Pot",
        },
        {
          stepNumber: 2,
          instruction: "Sauté pancetta until crisp.",
          estimatedTime: 5,
          tools: "Skillet",
        },
        {
          stepNumber: 3,
          instruction: "Mix eggs and grated Parmesan cheese in a bowl.",
          estimatedTime: 2,
          tools: "Mixing Bowl",
        },
        {
          stepNumber: 4,
          instruction:
            "Toss the hot spaghetti with the egg mixture and pancetta.",
          estimatedTime: 3,
          optionalTips: "Work quickly to avoid scrambling the eggs.",
          tools: "Tongs",
        },
        {
          stepNumber: 5,
          instruction: "Serve with extra Parmesan and black pepper.",
          estimatedTime: 1,
          tools: "Serving Dish",
        },
      ],
    },
    {
      _id: "It2_Dir1",
      recipeID: italianRecipe2._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Preheat the oven to 500°F (260°C).",
          estimatedTime: 10,
          tools: "Oven",
        },
        {
          stepNumber: 2,
          instruction: "Roll out pizza dough on a floured surface.",
          estimatedTime: 5,
          tools: "Rolling Pin, Floured Surface",
        },
        {
          stepNumber: 3,
          instruction: "Spread tomato sauce over the dough.",
          estimatedTime: 2,
          tools: "Spoon",
        },
        {
          stepNumber: 4,
          instruction: "Top with fresh mozzarella slices and basil leaves.",
          estimatedTime: 2,
          tools: "Knife",
        },
        {
          stepNumber: 5,
          instruction:
            "Bake until the crust is golden and the cheese is bubbly.",
          estimatedTime: 10,
          tools: "Oven",
        },
      ],
    },
    {
      _id: "It3_Dir1",
      recipeID: italianRecipe3._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Sauté onions in butter until soft.",
          estimatedTime: 5,
          tools: "Skillet",
        },
        {
          stepNumber: 2,
          instruction: "Add rice and stir to coat in butter.",
          estimatedTime: 3,
          tools: "Skillet, Wooden Spoon",
        },
        {
          stepNumber: 3,
          instruction: "Slowly add warm broth while stirring the rice.",
          estimatedTime: 20,
          tools: "Ladle, Pot",
        },
        {
          stepNumber: 4,
          instruction: "Add saffron threads dissolved in a bit of broth.",
          estimatedTime: 2,
          tools: "Spoon",
        },
        {
          stepNumber: 5,
          instruction:
            "Cook until the rice is creamy and al dente, then add Parmesan.",
          estimatedTime: 5,
          tools: "Grater, Skillet",
        },
      ],
    },
    {
      _id: "It4_Dir1",
      recipeID: italianRecipe4._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Slice tomatoes and fresh mozzarella.",
          estimatedTime: 5,
          tools: "Knife, Cutting Board",
        },
        {
          stepNumber: 2,
          instruction:
            "Layer tomato slices and mozzarella on a plate, alternating them.",
          estimatedTime: 2,
          tools: "Plate",
        },
        {
          stepNumber: 3,
          instruction: "Drizzle with olive oil and balsamic vinegar.",
          estimatedTime: 1,
          tools: "Spoon",
        },
        {
          stepNumber: 4,
          instruction:
            "Garnish with fresh basil and season with salt and pepper.",
          estimatedTime: 1,
          tools: "Serving Dish",
        },
      ],
    },
    {
      _id: "It5_Dir1",
      recipeID: italianRecipe5._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Whisk egg yolks with sugar until thick.",
          estimatedTime: 5,
          tools: "Whisk, Bowl",
        },
        {
          stepNumber: 2,
          instruction: "Add mascarpone and blend until smooth.",
          estimatedTime: 3,
          tools: "Spatula",
        },
        {
          stepNumber: 3,
          instruction: "Dip ladyfingers in coffee and layer in a dish.",
          estimatedTime: 5,
          tools: "Baking Dish, Bowl",
        },
        {
          stepNumber: 4,
          instruction: "Spread mascarpone mixture over the ladyfingers.",
          estimatedTime: 3,
          tools: "Spatula",
        },
        {
          stepNumber: 5,
          instruction: "Repeat layers and dust the top with cocoa powder.",
          estimatedTime: 2,
          tools: "Sifter",
        },
      ],
    },
    {
      _id: "Jap1_Dir1",
      recipeID: japaneseRecipe1._id,
      steps: [
        {
          stepNumber: 1,
          instruction:
            "Prepare sushi rice by cooking and seasoning it with vinegar.",
          estimatedTime: 10,
          tools: "Pot",
        },
        {
          stepNumber: 2,
          instruction:
            "Place nori sheet on a bamboo mat and spread rice evenly on it.",
          estimatedTime: 3,
          tools: "Bamboo Mat, Spoon",
        },
        {
          stepNumber: 3,
          instruction: "Add fillings such as fish or vegetables in the center.",
          estimatedTime: 2,
          tools: "Knife",
        },
        {
          stepNumber: 4,
          instruction: "Roll the sushi tightly using the bamboo mat.",
          estimatedTime: 3,
          tools: "Bamboo Mat",
        },
        {
          stepNumber: 5,
          instruction: "Cut into pieces and serve with soy sauce and wasabi.",
          estimatedTime: 2,
          tools: "Knife",
        },
      ],
    },
    {
      _id: "Jap2_Dir1",
      recipeID: japaneseRecipe2._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Cook ramen noodles according to package instructions.",
          estimatedTime: 5,
          tools: "Pot",
        },
        {
          stepNumber: 2,
          instruction: "Prepare broth by simmering miso, soy sauce, and dashi.",
          estimatedTime: 10,
          tools: "Pot",
        },
        {
          stepNumber: 3,
          instruction:
            "Add toppings like sliced pork, soft-boiled eggs, and scallions.",
          estimatedTime: 5,
          tools: "Knife, Bowl",
        },
        {
          stepNumber: 4,
          instruction: "Pour broth over the noodles and serve.",
          estimatedTime: 2,
          tools: "Serving Bowl",
        },
      ],
    },
    {
      _id: "Jap3_Dir1",
      recipeID: japaneseRecipe3._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Prepare a light batter with flour, egg, and ice water.",
          estimatedTime: 3,
          tools: "Bowl",
        },
        {
          stepNumber: 2,
          instruction: "Dip vegetables or shrimp in the batter.",
          estimatedTime: 2,
          tools: "Tongs",
        },
        {
          stepNumber: 3,
          instruction: "Fry the tempura in hot oil until crispy.",
          estimatedTime: 5,
          tools: "Frying Pan",
        },
        {
          stepNumber: 4,
          instruction: "Drain excess oil and serve with dipping sauce.",
          estimatedTime: 1,
          tools: "Paper Towels, Serving Plate",
        },
      ],
    },
    {
      _id: "Jap4_Dir1",
      recipeID: japaneseRecipe4._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Bring dashi stock to a simmer.",
          estimatedTime: 5,
          tools: "Pot",
        },
        {
          stepNumber: 2,
          instruction: "Whisk in miso paste until dissolved.",
          estimatedTime: 2,
          tools: "Whisk",
        },
        {
          stepNumber: 3,
          instruction: "Add tofu cubes and wakame seaweed.",
          estimatedTime: 3,
          tools: "Knife, Bowl",
        },
        {
          stepNumber: 4,
          instruction: "Simmer for a few minutes, then serve.",
          estimatedTime: 2,
          tools: "Serving Bowl",
        },
      ],
    },
    {
      _id: "Jap5_Dir1",
      recipeID: japaneseRecipe5._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Marinate chicken pieces in soy sauce, sake, and sugar.",
          estimatedTime: 15,
          tools: "Mixing Bowl",
        },
        {
          stepNumber: 2,
          instruction: "Skewer the marinated chicken pieces.",
          estimatedTime: 3,
          tools: "Skewers",
        },
        {
          stepNumber: 3,
          instruction:
            "Grill the skewers until cooked, basting with sauce occasionally.",
          estimatedTime: 8,
          tools: "Grill",
        },
        {
          stepNumber: 4,
          instruction: "Serve hot with extra sauce on the side.",
          estimatedTime: 1,
          tools: "Serving Plate",
        },
      ],
    },
    {
      _id: "Mex1_Dir1",
      recipeID: mexicanRecipe1._id,
      steps: [
        {
          stepNumber: 1,
          instruction:
            "Marinate pork in a mixture of adobo sauce, pineapple, and spices.",
          estimatedTime: 60,
          tools: "Mixing Bowl",
        },
        {
          stepNumber: 2,
          instruction: "Grill the pork until crispy.",
          estimatedTime: 15,
          tools: "Grill",
        },
        {
          stepNumber: 3,
          instruction: "Slice thinly and serve on warm tortillas.",
          estimatedTime: 5,
          tools: "Knife",
        },
        {
          stepNumber: 4,
          instruction: "Top with onions, cilantro, and salsa.",
          estimatedTime: 2,
          tools: "Knife",
        },
      ],
    },
    {
      _id: "Mex2_Dir1",
      recipeID: mexicanRecipe2._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Mash ripe avocados in a bowl.",
          estimatedTime: 2,
          tools: "Fork, Bowl",
        },
        {
          stepNumber: 2,
          instruction: "Mix in lime juice, onions, tomatoes, and cilantro.",
          estimatedTime: 3,
          tools: "Knife, Bowl",
        },
        {
          stepNumber: 3,
          instruction: "Season with salt and pepper.",
          estimatedTime: 1,
          tools: "Spoon",
        },
        {
          stepNumber: 4,
          instruction: "Serve with tortilla chips.",
          estimatedTime: 1,
          tools: "Serving Dish",
        },
      ],
    },
    {
      _id: "Mex3_Dir1",
      recipeID: mexicanRecipe3._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Cook chicken and shred it.",
          estimatedTime: 10,
          tools: "Pot, Fork",
        },
        {
          stepNumber: 2,
          instruction: "Fill tortillas with shredded chicken and cheese.",
          estimatedTime: 3,
          tools: "Tortillas, Cheese Grater",
        },
        {
          stepNumber: 3,
          instruction: "Roll the tortillas and place in a baking dish.",
          estimatedTime: 2,
          tools: "Baking Dish",
        },
        {
          stepNumber: 4,
          instruction: "Top with enchilada sauce and more cheese.",
          estimatedTime: 2,
          tools: "Spoon",
        },
        {
          stepNumber: 5,
          instruction: "Bake until bubbly and serve hot.",
          estimatedTime: 20,
          tools: "Oven",
        },
      ],
    },
    {
      _id: "Mex4_Dir1",
      recipeID: mexicanRecipe4._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Bring water, butter, and salt to a boil.",
          estimatedTime: 5,
          tools: "Pot",
        },
        {
          stepNumber: 2,
          instruction: "Add flour and stir until dough forms.",
          estimatedTime: 3,
          tools: "Spoon",
        },
        {
          stepNumber: 3,
          instruction: "Pipe the dough into hot oil and fry until golden.",
          estimatedTime: 5,
          tools: "Piping Bag, Frying Pan",
        },
        {
          stepNumber: 4,
          instruction:
            "Roll churros in cinnamon sugar and serve with chocolate sauce.",
          estimatedTime: 3,
          tools: "Serving Plate",
        },
      ],
    },
    {
      _id: "Mex5_Dir1",
      recipeID: mexicanRecipe5._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Simmer pork with hominy and spices for several hours.",
          estimatedTime: 120,
          tools: "Pot",
        },
        {
          stepNumber: 2,
          instruction: "Shred the pork and return it to the broth.",
          estimatedTime: 5,
          tools: "Fork",
        },
        {
          stepNumber: 3,
          instruction: "Serve with shredded cabbage, radishes, and lime.",
          estimatedTime: 2,
          tools: "Serving Bowl",
        },
      ],
    },
    {
      _id: "Ind1_Dir1",
      recipeID: indianRecipe1._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Marinate chicken in yogurt, lemon juice, and spices.",
          estimatedTime: 30,
          tools: "Mixing Bowl",
        },
        {
          stepNumber: 2,
          instruction: "Grill or broil the chicken until cooked.",
          estimatedTime: 10,
          tools: "Grill",
        },
        {
          stepNumber: 3,
          instruction:
            "Prepare the masala sauce by sautéing onions, garlic, and ginger.",
          estimatedTime: 5,
          tools: "Skillet",
        },
        {
          stepNumber: 4,
          instruction: "Add tomatoes, cream, and spices to the sauce.",
          estimatedTime: 5,
          tools: "Pot",
        },
        {
          stepNumber: 5,
          instruction: "Simmer the chicken in the sauce and serve with rice.",
          estimatedTime: 10,
          tools: "Serving Bowl",
        },
      ],
    },
    {
      _id: "Ind2_Dir1",
      recipeID: indianRecipe2._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Sauté onions and spices in oil.",
          estimatedTime: 5,
          tools: "Skillet",
        },
        {
          stepNumber: 2,
          instruction: "Add mixed vegetables and cook until tender.",
          estimatedTime: 5,
          tools: "Skillet",
        },
        {
          stepNumber: 3,
          instruction: "Layer rice and vegetable mixture in a pot.",
          estimatedTime: 3,
          tools: "Pot",
        },
        {
          stepNumber: 4,
          instruction: "Cook on low heat until the flavors meld together.",
          estimatedTime: 20,
          tools: "Pot",
        },
        {
          stepNumber: 5,
          instruction: "Serve with raita or yogurt.",
          estimatedTime: 2,
          tools: "Serving Dish",
        },
      ],
    },
    {
      _id: "Ind3_Dir1",
      recipeID: indianRecipe3._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Blanch spinach and puree it.",
          estimatedTime: 5,
          tools: "Pot, Blender",
        },
        {
          stepNumber: 2,
          instruction: "Sauté onions, garlic, and ginger.",
          estimatedTime: 3,
          tools: "Skillet",
        },
        {
          stepNumber: 3,
          instruction: "Add pureed spinach and spices to the pan.",
          estimatedTime: 2,
          tools: "Skillet",
        },
        {
          stepNumber: 4,
          instruction: "Add paneer cubes and simmer until heated through.",
          estimatedTime: 5,
          tools: "Skillet",
        },
        {
          stepNumber: 5,
          instruction: "Serve with naan or rice.",
          estimatedTime: 1,
          tools: "Serving Plate",
        },
      ],
    },
    {
      _id: "Ind4_Dir1",
      recipeID: indianRecipe4._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Sauté onions, garlic, and ginger in oil.",
          estimatedTime: 5,
          tools: "Skillet",
        },
        {
          stepNumber: 2,
          instruction: "Add spices and tomatoes, cooking until soft.",
          estimatedTime: 5,
          tools: "Skillet",
        },
        {
          stepNumber: 3,
          instruction: "Add cooked chickpeas and simmer in the sauce.",
          estimatedTime: 10,
          tools: "Pot",
        },
        {
          stepNumber: 4,
          instruction: "Garnish with fresh cilantro and serve.",
          estimatedTime: 1,
          tools: "Serving Dish",
        },
      ],
    },
    {
      _id: "Ind5_Dir1",
      recipeID: indianRecipe5._id,
      steps: [
        {
          stepNumber: 1,
          instruction: "Marinate chicken in yogurt and spices.",
          estimatedTime: 30,
          tools: "Mixing Bowl",
        },
        {
          stepNumber: 2,
          instruction: "Grill or pan-fry the chicken pieces.",
          estimatedTime: 10,
          tools: "Grill or Skillet",
        },
        {
          stepNumber: 3,
          instruction:
            "Prepare the butter sauce by cooking onions, tomatoes, and spices.",
          estimatedTime: 5,
          tools: "Pot",
        },
        {
          stepNumber: 4,
          instruction: "Add cream and butter to the sauce.",
          estimatedTime: 3,
          tools: "Pot",
        },
        {
          stepNumber: 5,
          instruction: "Simmer chicken in the sauce and serve with rice.",
          estimatedTime: 10,
          tools: "Serving Bowl",
        },
      ],
    },
  ];

  await Direction.deleteMany();

  await Direction.insertMany(directions);
  console.log(`Created directions!`);
};

const run = async () => {
  await main();
  db.close();
};

run();
