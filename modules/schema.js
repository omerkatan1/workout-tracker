const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newWorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'cannot be blank']
    },

    sets: {
        type: Number,
        required: true
    },

    reps: {
        type: Number,
        required: true
    }
});

const newWorkout = mongoose.model('newWorkout', newWorkoutSchema);
module.exports = newWorkout;


