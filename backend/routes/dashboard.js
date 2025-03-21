const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

router.get('/', verifyToken, (req, res) => {
  res.json({
    totalCustomers: 57,
    activeCustomers: 42,
    lastLogin: new Date().toISOString(),
    userEmail: req.user.id
  });
});

module.exports = router;
