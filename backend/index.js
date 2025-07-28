import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import routes from "./routes/index.js";


dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(morgan("dev"));


// db connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB is connected and running...!!"))
    .catch((err) => console.log("MongoDB failed to connect "+ err))

app.use(express.json());


const PORT = process.env.PORT || 5000;


app.get("/", async (req, res) => { 
    res.status(200).json({
        message: `Welcome to Task Master server at ${PORT}`,
    });
});


//http://localhost:5000/api-v1/
app.use("/api-v1", routes);


//error middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    
    res.status(500).json({
        message: "Internal server error"
    });
});


//Page not found middleware
app.use((req, res) => { 
    res.status(404).json({ message: "Not found" });
});


app.listen(PORT, () => { 
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`);
});