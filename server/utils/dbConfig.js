require('dotenv').config()

const config = {
    // mongoDB: process.env.DB_Connection_String
    mongoDB    : "mongodb+srv://HouseRentalManagementApplication:deejaynavnikSJSU@cluster0.scomigl.mongodb.net/?retryWrites=true&w=majority"
};

module.exports = config;