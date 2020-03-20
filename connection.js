const express = require("express");
const mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require("path");
var router = express.Router();
const Schema = require('./modules/schema');



const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));




// establishes mongodb connection with heroku
var MONGODB_URL = process.env.MONGODB_URL || "mongodb://admin:password1@ds137720.mlab.com:37720/heroku_4m6fbx56";
mongoose.connect(MONGODB_URL, { useNewUrlParser: true })


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!")
});


router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/myWorkout", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/myWorkout.html"))
})



// new workout insert
app.post("/submit", function ({ body }, res) {

    var Name = body.workoutName;
    var Sets = body.workoutSets;
    var Reps = body.workoutReps;

    var workout = new Schema({ name: Name, sets: Sets, reps: Reps });

    workout.save(function (err, newWorkout) {
        if (err) throw err;

        console.log(newWorkout.name + " saved!");
    })

    res.redirect("/");
});





// posts workout data to html page

var workoutObj = [];

Schema.find(function (err, body) {
    if (err) throw err;

    // var workoutObj = [];
    for (var i = 0; i < body.length; i++) {
        // console.log(body[i]);

        var placeObj = {
            workoutName: body[i].name,
            workoutSets: body[i].sets,
            workoutReps: body[i].reps
        }
        workoutObj.push(placeObj);
    }

    console.log(workoutObj);


    app.post("/api/myworkout", function (req, res) {
        var test = JSON.stringify(workoutData);
        res.json(test);
    })
});


app.get("/api/myworkout", function(req, res) {
    console.log(res);
    res.status(404).end()
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});