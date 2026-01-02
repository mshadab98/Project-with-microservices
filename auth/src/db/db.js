const mongoose = require('mongoose');



async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Auth DB");
    }catch(err){
        console.log("Error connecting to Auth DB", err);
    }   
}

module.exports = connectDB;