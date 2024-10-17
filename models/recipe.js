const mongoose = require(`mongoose`);
const { Schema } = require(`mongoose`);

const recipeSchema = new Schema(
  {
    cuisineID: { type: Schema.Types.ObjectId, ref: "Cuisine" },
    name: { type: String, required: true },
    servings: { type: Number, required: true },
    prepTime: { type: Number, required: true },
    cookTime: { type: Number, required: true },
    totalTime: { type: Number, required: true },
    ingredients: { type: [String], required: true },
    difficulty: { type: String, required: true },
    calories: { type: Number, required: true },
    isVegan: { type: Boolean, required: true },
    isVegetarian: { type: Boolean, required: true },
    isGlutenFree: { type: Boolean, required: true },
    author: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  { timestamps: true }
);

const recipe = mongoose.model(`Recipe`, recipeSchema);
module.exports = recipe;
