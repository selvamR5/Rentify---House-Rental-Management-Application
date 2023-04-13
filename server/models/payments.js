const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentsSchema = new mongoose.Schema({
    userId: { type:Schema.Types.ObjectId, ref:"users" },
    amount: {
      type: Number,
      required: true
    },
    leaseId: { type:Schema.Types.ObjectId, ref:"lease" },
    cardDetails: {
      type: Object,
      required: false
    },
    bankAccount: {
      type: Object,
      required: false
    },
    paymentDate: {
      type: Date,
      required: true
    }
  },
  {
      versionKey: false
  });

  const paymentsModel = mongoose.model('payments', paymentsSchema);
  module.exports = paymentsModel;