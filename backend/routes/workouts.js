// this file will include all routes related to workouts
// GET all, GET one, POST a new workout, UPDATE, and DELETE a workout
const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

// get all workouts
router.get('/', (req,res) => { 
    res.json({msg: "Get all workouts..."}) // dummy request for postman
})

// get single workout
router.get('/:id', (req,res) => {
    res.json({msg: "Get workout with specific id"}) // dummy request for postman
})

// post workout
router.post('/', async(req,res) => {
    const {name, reps, weight, muscleGroup, difficulty} = req.body
    try {
        const workout = await Workout.create({name, reps, weight, muscleGroup, difficulty}) // the workout model
        res.status(200).json(workout) 
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({msg: "Post a new workout to database"}) // dummy request for postman
})

// delete a workout
router.delete('/:id', (req,res) => {
    res.json({msg: "Delete a workout with given id"}) // dummy request for postman
})

// delete a workout
router.patch('/:id', (req,res) => {
    res.json({msg: "Update a workout"}) // dummy request for postman
})

module.exports = router