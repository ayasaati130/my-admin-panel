import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Get all orders
router.get("/", async (req, res) => {
  const orders = await prisma.order.findMany();
  res.json(orders);
});

// Create an order
router.post("/", async (req, res) => {
  const { totalPrice } = req.body;
  const newOrder = await prisma.order.create({
    data: { totalPrice },
  });
  res.json(newOrder);
});

export default router;
