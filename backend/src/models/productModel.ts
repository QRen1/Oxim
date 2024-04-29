import mongoose, { Schema, Document } from "mongoose";

export interface Product extends Document {
  productName: string;
  brandName: string;
  category: string;
  productImage: string[];
  description: string;
  price: number;
  sellingPrice: number;
}

const productSchema: Schema = new Schema(
  {
    productName: { type: String, required: true },
    brandName: { type: String, required: true },
    category: { type: String, required: true },
    productImage: { type: [String], default: [] },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

const productModel = mongoose.model<Product>("Product", productSchema);

export default productModel;
