import mongoose, { Schema, Document } from "mongoose";

interface AddToCart extends Document {
  productId: string;
  quantity: number;
  userId: string;
}

const addToCartSchema: Schema = new Schema(
  {
    productId: {
      ref: "product",
      type: String,
    },
    quantity: Number,
    userId: String,
  },
  {
    timestamps: true,
  }
);

const addToCartModel = mongoose.model<AddToCart>("addToCart", addToCartSchema);

export default addToCartModel;
