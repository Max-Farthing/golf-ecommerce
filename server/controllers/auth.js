require('dotenv').config()

const User = require('../models/user')

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
    let loadedUser

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
            req.session.isLoggedIn = true
            req.session.user = loadedUser

            res.status(200).json({ message: 'Login successful'})
        })
        .catch(err => console.log(err))
}

exports.logOut = (req, res) => {
    req.session.destroy(err => console.log(err))
}