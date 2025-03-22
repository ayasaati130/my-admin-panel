import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRouts";

dotenv.config(); // Load environment variables

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json()); // Allow JSON requests

// ✅ Base API Route
app.get("/", (req, res) => {
  res.send("E-Commerce API is running...");
});

// ✅ Register Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
