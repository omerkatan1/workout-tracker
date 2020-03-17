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


// once open start server
mongoose.connection.once('open', function(){
    console.log('Mongodb Connection Successful!');
}).on('error', function(error){
    console.log('Connection Error: ', error);
})




app.post("/submit", ({ body }, res) => {
    res.json(body);


    const workout = new Schema(body);
    Schema.create(workout)
      .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});
  
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
  