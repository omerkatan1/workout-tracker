const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newWorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "enter workout"
    },

    sets: {
        type: Number,
        unique: true,
        required: true    
    },

    reps: {
        type: Number,
        unique: true,
        required: true    
    }
}, { _id : false } );

const newWorkout = mongoose.model('newWorkout', newWorkoutSchema);
module.exports = newWorkout;


