const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// DB connect
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/inquiry", require("./routes/inquiryRoutes"));

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
