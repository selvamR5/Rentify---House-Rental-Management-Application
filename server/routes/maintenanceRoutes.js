var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Maintenance = require('../models/maintenance');


// Create a new maintenance request
router.post("/create", async (req, res) => {
  const { userId, leaseId, title, status, description, category, subCategory, photos, emergency, entryInstructions, entryPreferences } = req.body;
  const maintenance = new Maintenance({
    userId: mongoose.Types.ObjectId(userId.trim()),
    leaseId: mongoose.Types.ObjectId(leaseId.trim()),
    title,
    description,
    category,
    subCategory,
    photos,
    emergency,
    entryInstructions,
    entryPreferences,
    status
  });
  try {
    const newMaintenance = await maintenance.save();
    res.status(201).json(newMaintenance);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

// Get all maintenance requests
router.get("/get", async (req, res) => {
    try {
    const maintenances = await Maintenance.find();
    res.json(maintenances);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// Get a specific maintenance request by ID
router.get('/get/:id', async (req, res) => {
    const { id } = req.params;
  try {
    const maintenance = await Maintenance.findById(id);
    if (maintenance) {
      res.json(maintenance);
    } else {
      res.status(404).json({ message: 'Maintenance request not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

router.get('/get/user/:userId', async (req, res) => {
    try {
      const maintenances = await Maintenance.find({ userId: req.params.userId });
      res.status(200).json(maintenances);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });


// Update a specific maintenance request by ID
router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
  const { userId, leaseId, title, status, description, category, subCategory, photos, emergency, entryInstructions, entryPreferences } = req.body;
  try {
    const maintenance = await Maintenance.findById(id);
    if (maintenance) {
      maintenance.userId = userId;
      maintenance.leaseId = leaseId;
      maintenance.title = title;
      maintenance.description = description;
      maintenance.category = category;
      maintenance.subCategory = subCategory;
      maintenance.photos = photos;
      maintenance.status = status;
      maintenance.emergency = emergency;
      maintenance.entryInstructions = entryInstructions;
      maintenance.entryPreferences = entryPreferences;
      const updatedMaintenance = await maintenance.save();
      res.json(updatedMaintenance);
    } else {
      res.status(404).json({ message: 'Maintenance request not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// Delete a specific maintenance request by ID
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
  try {
    const maintenance = await Maintenance.findById(id);
    if (maintenance) {
      await maintenance.remove();
      res.json({ message: 'Maintenance request deleted' });
    } else {
      res.status(404).json({ message: 'Maintenance request not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

module.exports = router;
