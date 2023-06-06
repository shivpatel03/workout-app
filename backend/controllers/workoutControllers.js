const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getAllWorkouts = async(req,res) => { 
    const allWorkouts = await Workout.find({}).sort({createdAt: -1}) // saving all workout to 'allWorkouts'
    res.status(200).json(allWorkouts)
}


// get single workout
const getOneWorkout = async(req,res) => {
    const { id } = req.params
    // make sure the id is a valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Workout not found'})
    }
    const singleWorkout = await Workout.findById(id)
    if (!singleWorkout) {
        return res.status(404).json({error: 'Workout not found'})
    }
    else {
        res.status(200).json(singleWorkout)
    }
}


// post workout
const createWorkout = async(req,res) => {
    const {name, reps, weight, muscleGroup, difficulty} = req.body

    let emptyFields = []
    if(!name) {
        emptyFields.push('title')
    }
    if(!reps) {
        emptyFields.push('reps')
    }
    if(!weight) {
        emptyFields.push('weight')
    }
    if(!muscleGroup) {
        emptyFields.push('muscleGroup')
    }
    if(!difficulty) {
        emptyFields.push('difficulty')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json ({ error: "Please fill in all fields"})

    }
    try {
        const workout = await Workout.create({name, reps, weight, muscleGroup, difficulty}) // the workout model
        res.status(200).json(workout) 
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}


// delete workout
const deleteWorkout = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Workout not found"})
    }

    const workoutToDelete = await Workout.findOneAndDelete({_id:id})
    if (!workoutToDelete) {
        return res.status(404).json({error: "Workout not found"})
    }
    else {
        res.status(200).json(workoutToDelete)
    }
} 

// update workout
const updateWorkout = async(req,res) => {
    const {id} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Workout not found"})
    }
    const workoutToUpdate = await Workout.findOneAndUpdate({_id:id}, {...req.body})

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Workout not found"})
    }
    else {
        res.status(200).json(workoutToUpdate)
    }
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}