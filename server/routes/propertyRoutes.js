var express = require('express');
var router = express.Router();
var Property = require('../models/property');


router.post("/create", (req, res) => {
    const property = new Property(req.body);
    console.log(req.body)
    property.save((err, newProperty) => {
        if (err) {
          console.log(err)
            res.status(400).send(err);
        } else {
            console.log(newProperty)
            res.status(201).send(newProperty);
        }
    });
  });


router.get("/get/all", (req, res) => {
    Property.find((err, properties) => {
      if (err) {
        res.status(400).send(err);
      } else {
        console.log('hii')
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

  router.get("/find/:query", (req, res) =>{
    const { query } = req.params;
    console.log('inside the find', query)
  // Perform the search query on the property collection
  Property.find({
    $or: [
      { city: { $regex: query, $options: 'i' } },
      { zip: { $regex: query, $options: 'i' } },
    ],
  })
    .then((properties) => {
      console.log('found these', properties)
      res.json(properties);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
  })

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

  router.get("/get/tenant/:tenantId", async (req, res) => {
    try {
        const properties = await Property.find({ tenant: req.params.tenantId });
        // res.json(properties);
        res.status(200).send(properties)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/get/landlord/:landlordId", async (req, res) => {
  console.log(req.params.landlordId)
    try {
        const leases = await Property.find({ landlord: req.params.landlordId });
        console.log('leases',leases)
        // res.json(leases);
        res.status(200).send(leases)

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
