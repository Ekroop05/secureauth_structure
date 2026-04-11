import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

// 🔥 Middleware
app.use(cors({
  origin: "*" // you can restrict later
}));
app.use(express.json());

// ✅ Root route (IMPORTANT)
app.get("/", (req, res) => {
  res.send(" SecureAuth Backend is running successfully!");
});

// ✅ Health check route (extra professional)
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is healthy" });
});

// 🔐 Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// ✅ MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// ✅ Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});