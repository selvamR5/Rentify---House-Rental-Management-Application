const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var propertySchema = new Schema({
    address: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    // country: {type:String,required:true},
    zip: { type: String, required: true },
    propertyType: { type: String, required: true },
    description: { type: String, required: true },
    // tourAvailability: {type:String,required:true},
    bedNo: { type: Number, required: true },
    bathNo: { type: Number, required: true },
    sqft: { type: Number, required: true },
    rentPrice: { type: Number, required: true },
    // securityDeposit: {type:Number,required:true},
    // durationfLease: {type:Number,required:true},
    contact: { type: String, required: true },
    availabilityDate: { type: Date, default: '' },
    // isAvailable: { type: Boolean, required: true },
    // petFriendly: {type:Boolean,required:true},
    // studentFriendly: {type:Boolean,required:true},
    amenities: { type: [String], default: [] },
    pictures: [{ type: String }],
    landlord: { type: Schema.Types.ObjectId, ref: "users" },
    tenant: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    touravailability: { type: String, required: false }
},
    {
        versionKey: false
    }
);

const propertyModel = mongoose.model('property', propertySchema);
module.exports = propertyModel;