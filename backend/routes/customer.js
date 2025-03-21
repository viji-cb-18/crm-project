const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const Customer = require('../models/Customer');


router.get('/', verifyToken, async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    console.error('Error fetching customers:', err);
    res.status(500).json({ msg: 'Failed to load customers' });
  }
});

module.exports = router;

