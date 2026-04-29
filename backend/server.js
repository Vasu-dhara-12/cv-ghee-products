const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

// =======================
// Load env
// =======================
dotenv.config();

// =======================
// Validate required env (IMPORTANT for K8s)
// =======================
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing in environment variables");
  process.exit(1);
}

// =======================
// DB Connection
// =======================
connectDB();

// =======================
// Middleware
// =======================
app.use(cors());
app.use(express.json());

// =======================
// API Routes
// =======================
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/inquiry", require("./routes/inquiryRoutes"));

// =======================
// Serve frontend
// =======================
app.use(express.static(path.join(__dirname, "public")));

// =======================
// Fallback route
// =======================
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// =======================
// Start Server (K8s safe binding)
// =======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
