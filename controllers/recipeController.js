const Recipe = require("../models/recipe")

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.json(recipes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    if (recipe) {
      return res.json(recipe)
    }
    return res.status(404).send(`that recipe doesn't exist`)
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(404).send(`That recipe doesn't exist`)
    }
    return res.status(500).send(error.message)
  }
}

const getRecipeByCuisineName = async (req, res) => {
  try {
    const { cuisineName } = req.params
    const cuisine = await Cuisine.findOne({ name: cuisineName })
    if (!cuisine) {
      return res.status(404).send("Cuisine not found")
    }
    const recipes = await Recipe.find({ cuisineID: cuisine._id })
    res.json(recipes)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const createRecipe = async (req, res) => {
  try {
    const recipe = await new Recipe(req.body)
    await recipe.save()
    return res.status(201).json({
      recipe,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateRecipe = async (req, res) => {
  try {
    let { id } = req.params
    let recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
    if (recipe) {
      return res.status(200).json(recipe)
    }
    throw new Error("recipe not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Recipe.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Recipe deleted")
    }
    throw new Error("Recipe not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipeByCuisineName,
}
