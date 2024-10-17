const mongoose = require(`mongoose`);
const { Schema } = require(`mongoose`);

const cuisineSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    popularIngredients: { type: String, required: true },
    averagePrepTime: { type: Number, required: true },
  },
  { timestamps: true }
);
const Cuisine = mongoose.model(`Cuisine`, cuisineSchema);
module.exports = Cuisine;
