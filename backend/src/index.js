import express from "express";
import cors from "cors";
import "dotenv/config"
import job from "./lib/cron.js"

import authRoutes from "./routes/authRoutes.js";
import journalRoutes from "./routes/journalRoutes.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

job.start()
app.use(express.json());
app.use(cors({
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization"]
  }))

app.use("/api/auth", authRoutes); // basically if we want to visit any authentication routes (login or register), we have to add /api/auth in the address
app.use("/api/journal", journalRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
