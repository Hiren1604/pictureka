const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://mijiwim751:SIYvVkovtHBkhBIh@login-test.o28we.mongodb.net/?retryWrites=true&w=majority&appName=login-test");

// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})


// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;