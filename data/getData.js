const Schema = require('../modules/schema');


// var workoutObj = [];

// // function workoutData() {

//     // var workoutObj = [];

//     Schema.find(function (err, body) {
//         if (err) throw err;
//         console.log(body.length);

//         // var workoutObj = [];
//         for (var i = 0; i < body.length; i++) {
//             // console.log(body[i]);

//             var placeObj = {
//                 workoutName: body[i].name,
//                 workoutSets: body[i].sets,
//                 workoutReps: body[i].reps
//             }
//             workoutObj.push(placeObj);
//         }

//         // console.log(workoutObj);
//     });

//     // return workoutObj;
// // }

// // workoutData();

// module.exports = {

// }

var test = [];
Schema.find(function (err, data) {
    if (err) throw err;

    // console.log(data);

    // var test = [];

    for (var i = 0; i < data.length; i++) {

        var obj = {
            workoutName: data[i].name,
            workoutSets: data[i].sets,
            workoutReps: data[i].reps
        }

        test.push(obj)

    }
});


module.exports = test;