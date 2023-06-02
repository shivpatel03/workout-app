// requirements
require('dotenv').config()

// imports
const express = require('express')
const workoutRoutes = require('./routes/workouts')

// creating express app
const app = express()

// middleware
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// route for main page
app.get('/', (req,res) => {
    res.json({msg: "Welcome to main page"})
})

app.use('/api/workouts', workoutRoutes)

// listen to a certain port number for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})