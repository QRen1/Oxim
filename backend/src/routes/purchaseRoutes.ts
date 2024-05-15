// routes/purchaseRoutes.ts

import express from "express";
import {
  addPurchaseFromCart,
  addPurchaseFromMenu,
  getPurchaseById,
  getPurchases,
  getPurchasesByUserId,
} from "../controllers/purchaseController";

const router = express.Router();

router.post("/addPurchaseFromCart", addPurchaseFromCart);
router.post("/addPurchaseFromMenu", addPurchaseFromMenu);
router.get("/:userId", getPurchasesByUserId);
router.get("/:id", getPurchaseById);
router.get("/getOrder", getPurchasesByUserId);

export default router;
