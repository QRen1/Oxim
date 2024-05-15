// controllers/cartController.ts
import { Request, Response } from "express";
import { CartItem } from "../models/cartItemModel";
import { MenuItem } from "../models/menuItemModel";

// Function to add item to cart

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { userId, menuItemId } = req.body;

    // Fetch the corresponding MenuItem
    const menuItem = await MenuItem.findById(menuItemId);

    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    // Create a new cart item with details from the menu item
    const cartItem = await CartItem.create({
      userId,
      menuItemId,
      name: menuItem.name,
      description: menuItem.description,
      price: menuItem.price,
      category: menuItem.category,
      imageUrl: menuItem.imageUrl,
      quantity: 1,
      status: "pending",
    });

    res.status(201).json({ message: "Item added to cart", cartItem });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ message: "Failed to add item to cart" });
  }
};

export const getCartItems = async (req: Request, res: Response) => {
  try {
    const { userId } = req.query; // Get the userId from query parameters

    // Fetch cart items based on userId
    const cartItems = await CartItem.find({ userId });

    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ message: "Failed to fetch cart items" });
  }
};

export const deleteCartItem = async (req: Request, res: Response) => {
  const { cartItemId } = req.params;
  try {
    // Find the cart item by ID and delete it
    const deletedCartItem = await CartItem.findByIdAndDelete(cartItemId);
    if (!deletedCartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json({ message: "Cart item deleted", deletedCartItem });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    res.status(500).json({ message: "Failed to delete cart item" });
  }
};
