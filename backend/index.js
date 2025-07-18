import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";


dotenv.config();

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 5678;


app.get("/", async (req, res) => { 
    res.status(200).json({
        message: `Welcome to Task Master server at ${PORT}`,
    });
});



app.listen(PORT, () => { 
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`);
});