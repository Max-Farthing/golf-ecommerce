const express = require('express')
const app = express()
const golfClubs = require('./data/golfClubs')
const golfBalls = require('./data/golfBalls')

app.get("/", (req, res, next) => {
    res.json(golfClubs)
})

app.get("/golfBalls", (req, res, next) => {
    res.json(golfBalls)
})

app.listen(5000, () => {
    console.log("server started on port 5000")
})