import artRoutes from './routes/artRoutes.js'
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

connectDB();

app.use("/api/art", artRoutes);


app.listen(5000, () => {
    console.log("server has started on PORT: 5000");
});


