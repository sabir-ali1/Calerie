const express = require("express");
const router = express.Router();
const calorieController = require("../controller/Calorie");

//add calorie
router.route("/add").post(calorieController.addCalorie);

//get
router.route("/get").get(calorieController.getCalorie);


module.exports = router