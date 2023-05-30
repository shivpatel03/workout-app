// requirements
require('dotenv').config()

// imports
const express = require('express')

// creating express app
const app = express()

// route for main page
app.get('/', (req,res) => {
    res.json({msg: "Welcome to main page"})
})

// listen to a certain port number for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})