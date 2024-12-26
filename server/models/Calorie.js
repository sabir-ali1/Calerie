const mongoose = require("mongoose");

const CalorieSchema = new mongoose.Schema({
    foodItem: { type: String, required: true }, // Food item name
    calories: { type: Number, required: true }, // Calories count
    createdAt: { type: Date, default: Date.now } // Fixing the typo
});

const Calorie = mongoose.model("Calorie", CalorieSchema);

module.exports = Calorie;
