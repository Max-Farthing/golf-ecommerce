require('dotenv').config()

const User = require('../models/user')
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

exports.getSignUp = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const newUser = new User({
        email,
        password
    })

    return newUser.save()
        .then(result => {
            res.status(201).json({ message: 'User Created', userId: result._id })
        })
        .catch(err => console.log(err))
}

exports.getLogin = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    let loadedUser;

    User.findOne({ email })
        .then(user => {
            if(!user) {
                return res.status(404).json({ message: "User not found" })
            }
            loadedUser = user
            return password === user.password
        })
        .then(isEqual => {
            if(!isEqual) {
                return res.status(401).json({ message: "Incorrect Password" })
            }
            const token = jwt.sign({
                email: loadedUser.email,
                userId: loadedUser._id.toString()
            }, secret, {expiresIn: '1h'})
            res.status(200).json({ token, userId: loadedUser._id.toString() })
        })
}