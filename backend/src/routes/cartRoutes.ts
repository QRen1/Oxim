import express from "express";
import {
  addToCart,
  deleteCartItem,
  getCartItems,
} from "../controllers/cartController";

const router = express.Router();

router.post("/addToCart", addToCart);
router.get("/getCart", getCartItems);
router.delete("/deleteCartItem/:cartItemId", deleteCartItem);

export default router;
