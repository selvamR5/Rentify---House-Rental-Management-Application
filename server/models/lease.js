const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaseSchema = new mongoose.Schema({

    tenantId: { type:Schema.Types.ObjectId, ref:"users" },
    landLordId: { type:Schema.Types.ObjectId, ref:"users" },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    signedDate: {
      type: Date,
      required: true
    },
    leaseDocument: {
      type: String,
      required: true
    },
    securityDepositPaidDate: {
      type: Date,
      required: false
    },
    propertyId: {
      type: String,
      required: true
    },
    securityDepositAmount: {
      type: Number,
      required: true
    },
    rentPrice: {
      type: Number,
      required: true
    }
  });

  const leaseModel = mongoose.model('lease', leaseSchema);
  module.exports = leaseModel;