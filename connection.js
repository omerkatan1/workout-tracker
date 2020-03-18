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
// mongoose.set('useCreateIndex', true);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});



// new workout insert
app.post("/submit", ({ body }, res) => {

    var Name = body.workoutName;
    var Sets = body.workoutSets;
    var Reps = body.workoutReps;

    var workout = new Schema({name: Name, sets: Sets, reps: Reps});

    workout.save(function(err, newWorkout) {
        if (err) throw err;

        console.log(newWorkout.name + " saved!");
    })
});
  
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
  