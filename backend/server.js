const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// =======================
// Middleware
// =======================
app.use(cors());
app.use(express.json());

// =======================
// DB Connection (SAFE)
// =======================
const startServer = async () => {
  try {
    await connectDB();

    console.log("✅ MongoDB Connected");

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
    // Fallback route (safe for SPA)
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

  } catch (err) {
    console.error("❌ Server startup failed:", err.message);
    process.exit(1);
  }
};

startServer();
