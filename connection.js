const express = require("express");
const mongoose = require('mongoose');
const Schema = require('./modules/schema');
var bodyparser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));



app.use(express.static(__dirname + "/public"));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

// connecting to mongodb
// mongoose.connect("mongodb://localhost/fitnessDB", { useNewUrlParser: true });
// mongoose.set('useCreateIndex', true);
// "mongodb://<fitnessDB>:<password1>@ds137720.mlab.com:37720/heroku_4m6fbx56"

var MONGODB_URL = process.env.MONGODB_URL || "mongodb://admin:password1@ds137720.mlab.com:37720/heroku_4m6fbx56";
mongoose.connect(MONGODB_URL, { useNewUrlParser: true })


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});


// new workout insert
app.post("/submit", function ({ body }, req, res) {

    var Name = body.workoutName;
    var Sets = body.workoutSets;
    var Reps = body.workoutReps;

    var workout = new Schema({name: Name, sets: Sets, reps: Reps});

    workout.save(function(err, newWorkout) {
        if (err) throw err;

        console.log(newWorkout.name + " saved!");
    })

    return res.redirect("/");
});
  
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
  