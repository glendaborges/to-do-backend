import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todo.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

export default app;
