// models/cartItemModel.ts
import mongoose, { Document, Schema } from "mongoose";

export interface CartItemInterface extends Document {
  userId: string; // Change type to string
  menuItemId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  quantity: number;
  status: string;
}

const CartItemSchema: Schema = new mongoose.Schema({
  userId: {
    type: String, // Change type to String
    required: true,
  },
  menuItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuItem",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  status: {
    type: String,
    default: "pending",
  },
});

export const CartItem = mongoose.model<CartItemInterface>(
  "CartItem",
  CartItemSchema
);
