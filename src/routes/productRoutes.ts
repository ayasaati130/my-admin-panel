import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Get all products
router.get("/", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

// Create a product
router.post("/", async (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = await prisma.product.create({
    data: { name, description, price },
  });
  res.json(newProduct);
});

export default router;
