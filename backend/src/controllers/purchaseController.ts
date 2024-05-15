// controllers/purchaseController.ts

import { Request, Response } from "express";
import Purchase, { PurchaseInterface } from "../models/purchaseModel";

// Controller function to add a purchase related to cart items
export const addPurchaseFromCart = async (req: Request, res: Response) => {
  try {
    const { userId, email, addressLine1, totalAmount, cartItems } = req.body;

    const purchase = await Purchase.create({
      userId,
      cartItems,
      totalAmount,
      status: "pending",
      email,
      addressLine1, // Default status is "pending"
    });

    res.status(201).json({ message: "Purchase added successfully", purchase });
  } catch (error) {
    console.error("Error adding purchase from cart:", error);
    res.status(500).json({ message: "Failed to add purchase" });
  }
};

export const addPurchaseFromMenu = async (req: Request, res: Response) => {
  try {
    const { userId, menuItems, totalAmount } = req.body;

    const purchase = await Purchase.create({
      userId,
      menuItems,
      totalAmount,
      status: "pending", // Default status is "pending"
    });

    res.status(201).json({ message: "Purchase added successfully", purchase });
  } catch (error) {
    console.error("Error adding purchase from menu:", error);
    res.status(500).json({ message: "Failed to add purchase" });
  }
};

export const getPurchases = async (req: Request, res: Response) => {
  try {
    const purchases = await Purchase.find();
    res.status(200).json(purchases);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getPurchaseById = async (req: Request, res: Response) => {
  try {
    const purchase = await Purchase.findById(req.params.id);
    if (!purchase) {
      return res.status(404).json({ message: "Purchase not found" });
    }
    res.status(200).json(purchase);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getPurchasesByUserId = async (
  req: Request<{ userId: string }>,
  res: Response
) => {
  try {
    const { userId } = req.query;
    const purchases = await Purchase.find({ userId: userId });
    res.json(purchases);
  } catch (error) {
    console.error("Error fetching purchases:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
