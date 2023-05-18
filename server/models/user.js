const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema= new Schema({
    // CustomerID:{type:String,required:true},
    Email:{type:String,required:true, unique:true},
    Password:{type:String,required:true},
    FirstName:{type:String,required:true},
    LastName:{type:String,required:true},
    ImageURL:{type:String,default:""},
    DateOfBirth:{type:Date,default:""},
    City:{type:String,default:""},
    State:{type:String,default:""},
    Country:{type:String,default:""},
    Nickname:{type:String,default:""},
    PhoneNumber:{type:String,default:""},
    // addressForOrders:[{
    //     addressId: {type:String, required:true},
    //     address: {type:String, required:true},
    //     zip: {type:String, required:true}
    // }],
    // orders:[{
    //     type:Schema.Types.ObjectId,
    //     ref:"Order"
    // }],
    // About:{type: String, default: ""},
    Zip: {type: String, default:""}
},
{
    versionKey: false
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;