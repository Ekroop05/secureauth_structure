import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

// ✅ Get all users (ADMIN ONLY)
router.get("/users", verifyToken, allowRoles("admin"), async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

export default router;