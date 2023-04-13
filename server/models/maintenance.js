const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maintenanceSchema = new mongoose.Schema({
    userId: { type:Schema.Types.ObjectId, ref:"users" },
    leaseId: { type:Schema.Types.ObjectId, ref:"lease" },
    postedDate: {
      type: Date,
      default: Date.now
    },
    updatedDate: {
      type: Date,
      default: Date.now
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    subCategory: {
      type: String,
      required: true
    },
    photos: {
      type: [String],
      required: false
    },
    emergency: {
      type: Boolean,
      default: false
    },
    entryInstructions: {
      type: String,
      required: false
    },
    entryPreferences: {
      type: String,
      required: false
    }
  },
  {
      versionKey: false
  });
  
  module.exports = mongoose.model('Maintenance', maintenanceSchema);