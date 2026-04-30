const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "CV Ghee Backend is running without MongoDB 🚀"
  });
});

app.get("/health", (req, res) => {
  res.send("OK");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
