import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  // Add reference to cart items
  cartItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "CartItem", // Reference to the CartItem model
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
