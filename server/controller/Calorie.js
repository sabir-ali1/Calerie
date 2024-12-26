const Calorie = require("../models/Calorie");

//add Calorie 
const addCalorie = async (req,res) => {
    try {
        const {foodItem,calories} = req.body

        if ( !foodItem || !calories) {
            return res.status(400).json({ message: "All fields are required: date, foodItem, and calories." });
        }


        const data = await Calorie.create({foodItem,calories});

        return res.status(200).json({message:"Added Successfull",data})

    } catch (error) {
        console.log("error from addd calorie",error);
    }
}


//get calorie
const getCalorie = async (req,res) => {
    try {
        const data = await Calorie.find().sort({createdAt:-1});

        return res.status(200).json(data)

    } catch (error) {
        console.log("error from getCalorie",error);
    }
}


module.exports = {addCalorie,getCalorie}