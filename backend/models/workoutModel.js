// defines the format of workout documents on the database (using mongoose)
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    name: {
        type: String, // name of the 
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true 
    },
    muscleGroup: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Workout', workoutSchema) // model for single workout