const Inquiry = require("../models/Inquiry");

// CREATE inquiry
exports.createInquiry = async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.json({ message: "Inquiry submitted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET all inquiries
exports.getInquiries = async (req, res) => {
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });
  res.json(inquiries);
};

// DELETE inquiry
exports.deleteInquiry = async (req, res) => {
  await Inquiry.findByIdAndDelete(req.params.id);
  res.json({ message: "Inquiry deleted" });
};
