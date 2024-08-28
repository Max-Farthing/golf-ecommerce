const express = require('express')
const { body } = require('express-validator')

const authController = require('../controllers/auth')

const router = express.Router()

router.post('/login', authController.getLogin)

router.post('/signup',
[
    body('email')
        .isEmail()
        .withMessage("Please enter a valid email")
        //check if email already exists
],
authController.getSignUp)

router.post('/logout', authController.logOut)

router.get('/check', authController.checkAuthentication)

module.exports = router