const Direction = require("../models/direction");

const getAllDirections = async (req, res) => {
  try {
    const directions = await Direction.find();
    res.json(directions);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getDirectionById = async (req, res) => {
  try {
    const { id } = req.params;
    const direction = await Direction.findById(id);
    if (direction) {
      return res.json(direction);
    }
    return res.status(404).send(`that direction doesn't exist`);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(404).send(`That direction doesn't exist`);
    }
    return res.status(500).send(error.message);
  }
};

const createDirection = async (req, res) => {
  try {
    const direction = await new Direction(req.body);
    await direction.save();
    return res.status(201).json({
      direction,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateDirection = async (req, res) => {
  try {
    let { id } = req.params;
    let direction = await Direction.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (direction) {
      return res.status(200).json(direction);
    }
    throw new Error("Direction not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteDirection = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Direction.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Direction deleted");
    }
    throw new Error("Direction not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllDirections,
  getDirectionById,
  createDirection,
  updateDirection,
  deleteDirection,
};
