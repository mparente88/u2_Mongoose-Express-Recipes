const mongoose = require(`mongoose`);
const { Schema } = require(`mongoose`);

const directionSchema = new Schema(
  {
    _id: { type: String, required: true },
    recipeID: { type: Schema.Types.ObjectId, ref: "Recipe", required: true },
    steps: [
      {
        stepNumber: { type: Number, required: true },
        instruction: { type: String, required: true },
        estimatedTime: { type: Number, required: false },
        optionalTips: { type: String, required: false },
        tools: { type: String, required: false },
      },
    ],
  },
  { timestamps: true }
);

const direction = mongoose.model(`Direction`, directionSchema);
module.exports = direction;
