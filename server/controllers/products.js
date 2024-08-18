const golfClubs = require('../data/golfClubs')
const golfBalls = require('../data/golfBalls')
const golfBags = require('../data/golfBags')
const golfTech = require('../data/golfTech')

exports.getProducts = (req, res) => {
    const allProducts = [...golfClubs, ...golfBalls, ...golfBags, ...golfTech]
    res.status(201).json(allProducts)
}

exports.getClubs = (req, res) => {
    res.status(201).json(golfClubs)
}

exports.getBalls = (req, res) => {
    res.status(201).json(golfBalls)
}

exports.getBags = (req, res) => {
    res.status(201).json(golfBags)
}

exports.getTech = (req, res) => {
    res.status(201).json(golfTech)
}