const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// Save inquiry
router.post('/', async (req, res) => {
  const inquiry = new Inquiry(req.body);
  await inquiry.save();
  res.json({ message: 'Saved successfully' });
});

module.exports = router;
