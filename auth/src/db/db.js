const mongoose = require('mongoose');



async function connectDB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/auth');
        console.log("Connected to Auth DB");
    }catch(err){
        console.log("Error connecting to Auth DB", err);
    }   
}

module.exports = connectDB;