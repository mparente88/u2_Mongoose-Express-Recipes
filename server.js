const express = require("express");
const db = require("./db");
const cuisineController = require("./controllers/cuisineController");
const recipeController = require("./controllers/recipeController");
const directionController = require("./controllers/directionController");
const bodyParser = require("body-parser");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/", (req, res) => res.send("This is our landing page!"));
app.get("/cuisines", cuisineController.getAllCuisines);
app.get("/cuisines/:id", cuisineController.getCuisineById);

app.get("/recipes", recipeController.getAllRecipes);
app.get("/recipes/:id", recipeController.getRecipeById);

app.get("/directions", directionController.getAllDirections);
app.get("/directions/:id", directionController.getDirectionById);

app.use(logger("dev"));
app.use(bodyParser.json());

app.post("/cuisines", cuisineController.createCuisine);
app.post("/recipes", recipeController.createRecipe);
app.post("/directions", directionController.createDirection);

app.put(`/cuisines/:id`, cuisineController.updateCuisine);
app.put(`/recipes/:id`, recipeController.updateRecipe);
app.put(`/directions/:id`, directionController.updateDirection);

app.delete(`/cuisines/:id`, cuisineController.deleteCuisine);
app.delete(`/recipe/:id`, recipeController.deleteRecipe);
app.delete(`/direction/:id`, directionController.deleteDirection);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
