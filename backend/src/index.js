import express from "express";
import "dotenv/config"

import authRoutes from "./routes/authRoutes.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth", authRoutes); // basically if we want to visit any routes from authRoutes, we have to add /api/auth in the address

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
