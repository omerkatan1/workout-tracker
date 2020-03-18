const express = require("express");
const mongoose = require('mongoose');
const Schema = require('./modules/schema');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

// connecting to mongodb
mongoose.connect("mongodb://localhost/fitnessDB", { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// new workout insert
app.post("/submit", ({ body }, res) => {
    res.json(body);


    const workout = new Schema(body);
    Schema.insertMany(workout).then(fitnessDB => {

        res.json(fitnessDB);

    }).catch(function(err) {
        res.json(err);
        res.end();
    });
});
  
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
  