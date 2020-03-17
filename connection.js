// const mongoose = require('mongoose');
// const Schema = require('./modules/schema');

var workoutName = document.querySelector("#workoutName").value;
var workoutSets = document.querySelector("#workoutSets").value;
var workoutReps = document.querySelector("#workoutReps").value;


// connecting to mongodb
mongoose.connect("mongodb://localhost/fitnessDB", { useNewUrlParser: true });

// once open start server
mongoose.connection.once('open', function(){
    console.log('Mongodb Connection Successful!');
}).on('error', function(error){
    console.log('Connection Error: ', error);
})

function save(workoutName, workoutReps, workoutSets) {
    console.log(workoutName.value);
    console.log(workoutReps.value);
    console.log(workoutSets.value);


    // const workout = {
    //     name: workoutName,
    //     sets: workoutSets,
    //     reps: workoutReps
    // }

    // Schema.create(workout)
    // .then(fitnessDB => {
    //     console.log(fitnessDB);
    // }).catch(({ error }) => {
    //     console.log(error);
    // })
}


// var test = new schema({
//     name: 'testWorkout',
//     sets: 32,
//     reps: 40
// })

// test.save();