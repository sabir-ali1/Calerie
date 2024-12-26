require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./utils/db");
const calorieRouter  = require("./router/Calery");

app.use(express.json());

const corsOption = {
    origin :"*", // i give * because you can access from aneywhere thats'why i did give
    Credentials:true
}

app.use(cors(corsOption));

app.get("/",(req,res)=>{
    return res.status(200).json({message:"welcome to home page"})
});


app.use("/api/auth",calorieRouter);

const port = 5000;

connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on ${port}`);
    })
})

