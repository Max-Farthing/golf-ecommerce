const golfClubs = require('../data/golfClubs')
const golfBalls = require('../data/golfBalls')
const golfBags = require('../data/golfBags')
const golfTech = require('../data/golfTech')


exports.getClubs = (req, res) => {
    res.json(golfClubs)
}

exports.getBalls = (req, res) => {
    res.json(golfBalls)
}

exports.getBags = (req, res) => {
    res.json(golfBags)
}

exports.getTech = (req, res) => {
    res.json(golfTech)
}