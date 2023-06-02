// requirements
require('dotenv').config()

// imports
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

// creating express app
const app = express()

// middleware
app.use(express.json())


app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// route for main page
app.get('/', (req,res) => {
    res.json({msg: "Welcome to main page"})
})

// routes for workouts
app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.ATLAS_URI)
    .then(() => { // only start the server when the database is connected
        app.listen(process.env.PORT, () => {
            console.log('listening on port ' + process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })

// listen to a certain port number for requests
