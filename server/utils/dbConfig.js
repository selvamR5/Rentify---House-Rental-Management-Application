require('dotenv').config()

const config = {
    mongoDB: process.env.DB_Connection_String
};

module.exports = config;