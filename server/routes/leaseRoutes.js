var express = require('express');
var router = express.Router();
var Lease = require('../models/lease');
const mongoose = require('mongoose');

router.post("/create", async (req, res) => {
    try {
      // Validate the request body
      const { tenantId, landLordId, startDate, endDate, signedDate, leaseDocument, securityDepositPaidDate, propertyId, securityDepositAmount, rentPrice } = req.body;
      if (!tenantId || !landLordId || !startDate || !endDate || !signedDate || !leaseDocument || !securityDepositPaidDate || !propertyId || !securityDepositAmount || !rentPrice) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      console.log(req.body)
      
      // Create a new Lease object
      const newLease = new Lease({
        tenantId: mongoose.Types.ObjectId(tenantId.trim()),
        landLordId: mongoose.Types.ObjectId(landLordId.trim()),
        startDate: startDate,
        endDate:new Date(endDate),
        signedDate: new Date(signedDate),
        leaseDocument,
        securityDepositPaidDate: new Date(securityDepositPaidDate),
        propertyId: mongoose.Types.ObjectId(propertyId.trim()),
        securityDepositAmount,
        rentPrice
      });

      console.log(newLease)
      
    //   Save the new Lease object to the database
      const savedLease = await newLease.save();
      
    //   Return a success response
      res.status(201).json(savedLease);
    } catch (error) {
      // Handle any errors that occur
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


router.get("/get/:leaseId", async (req, res) => {
    try {
        const lease = await Lease.findById(req.params.leaseId);
        if (!lease) {
            return res.status(404).json({ error: 'Lease not found' });
        }
        res.json(lease);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.put("/update/:leaseId", async (req, res) => {
    try {
        const lease = await Lease.findByIdAndUpdate(req.params.leaseId, req.body, { new: true });
        if (!lease) {
            return res.status(404).json({ error: 'Lease not found' });
        }
        res.json(lease);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete("/delete/:leaseId", async (req, res) => {
    try {
        const lease = await Lease.findByIdAndDelete(req.params.leaseId);
        if (!lease) {
            return res.status(404).json({ error: 'Lease not found' });
        }
        res.json(lease);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/get/all", async (req, res) => {
    try {
        const leases = await Lease.find();
        console.log(leases)
        res.json(leases);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/get/user/tenant/:tenantId", async (req, res) => {
    try {
        const leases = await Lease.find({ tenantId: req.params.tenantId });
        res.json(leases);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/get/user/landlord/:landlordId", async (req, res) => {
    try {
        const leases = await Lease.find({ landLordId: req.params.landlordId });
        res.json(leases);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/get/property/:propertyId", async (req, res) => {
    try {
        const leases = await Lease.find({ propertyId: req.params.propertyId });
        res.json(leases);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
