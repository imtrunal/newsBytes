const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/newsBytes")
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log("Database Not Connected");
    })