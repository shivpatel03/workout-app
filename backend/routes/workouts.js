// this file will include all routes related to workouts
// GET all, GET one, POST a new workout, UPDATE, and DELETE a workout
const express = require('express')
const {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')

const router = express.Router()

// get all workouts
router.get('/', getAllWorkouts)

// get single workout
router.get('/:id', getOneWorkout)

// post workout
router.post('/', createWorkout)

// delete a workout
router.delete('/:id', deleteWorkout)

// delete a workout
router.patch('/:id', updateWorkout)

module.exports = router