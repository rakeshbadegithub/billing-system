const express = require('express');
const Bill = require('../models/Bill');
const router = express.Router();

// Create a bill
router.post('/', async (req, res) => {
  const bill = new Bill(req.body);
  await bill.save();
  res.json(bill);
});

// Get all bills
router.get('/', async (req, res) => {
  const bills = await Bill.find();
  res.json(bills);
});

module.exports = router;
