var express = require('express');
var router = express.Router();
var Property = require('../models/property');


router.post("/create", (req, res) => {
    const property = new Property(req.body);
    property.save((err, newProperty) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(201).send(newProperty);
        }
    });
  });


router.get("/get/all", (req, res) => {
    Property.find((err, properties) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(properties);
      }
    });
  });

  // Get a single property by ID
  router.get("/get/:id",(req, res) => {
    Property.findById(req.params.id, (err, property) => {
      if (err) {
        res.status(400).send(err);
      } else if (!property) {
        res.status(404).send({ message: 'Property not found' });
      } else {
        res.status(200).send(property);
      }
    });
  });

  // Update a property by ID
  router.put("/update/:id", (req, res) => {
    Property.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProperty) => {
      if (err) {
        res.status(400).send(err);
      } else if (!updatedProperty) {
        res.status(404).send({ message: 'Property not found' });
      } else {
        res.status(200).send(updatedProperty);
      }
    });
  });

  // Delete a property by ID
  router.delete("/delete/:id", (req, res) => {
    Property.findByIdAndDelete(req.params.id, (err, deletedProperty) => {
      if (err) {
        res.status(400).send(err);
      } else if (!deletedProperty) {
        res.status(404).send({ message: 'Property not found' });
      } else {
        res.status(204).send();
      }
    });
  });

module.exports = router;
