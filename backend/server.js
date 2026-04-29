const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

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
// Fallback route (IMPORTANT for Express 5)
// =======================
// This handles React/HTML routing safely
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
