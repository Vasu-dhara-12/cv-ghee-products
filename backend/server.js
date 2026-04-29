const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// =======================
// Load env (VERY IMPORTANT)
// =======================
require("dotenv").config();

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
// Serve frontend static files
// =======================
app.use(express.static(path.join(__dirname, "public")));

// =======================
// Fallback route (FIXED for Express 5)
// =======================
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// =======================
// Start Server
// =======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
