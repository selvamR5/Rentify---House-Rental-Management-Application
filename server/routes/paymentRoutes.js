var express = require('express');
var app = express.Router();
var Payment = require('../models/payments');

app.post('/create', async (req, res) => {
    try {
      const newPayment = new Payment(req.body);
      await newPayment.save();
      res.status(201).json(newPayment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

app.get('/get/all', async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.get('/get/:id',async (req, res) => {
    try {
      const payment = await Payment.findById(req.params.id);
      if (!payment) {
        return res.status(404).send();
      }
      res.send(payment);
    } catch (error) {
      res.status(500).send(error);
    }
  });


  app.put('/update/:id', async (req, res) => {
    try {
      const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!payment) {
        return res.status(404).send();
      }
      res.send(payment);
    } catch (error) {
      res.status(400).send(error);
    }
  });


  app.delete('/delete/:id', async (req, res) => {
    try {
      const payment = await Payment.findByIdAndDelete(req.params.id);
      if (!payment) {
        return res.status(404).send();
      }
      res.send(payment);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  

module.exports = app;