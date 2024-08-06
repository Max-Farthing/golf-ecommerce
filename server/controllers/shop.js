const Order = require('../models/order')
const User = require('../models/user')

exports.getCart = (req, res) => {
    if (req.session.user) {
        const userId = req.session.user._id
        User.findById(userId)
            .then(foundUser => {
                if (foundUser && foundUser.cart) {
                    res.status(200).json(foundUser.cart.items)
                } else {
                    res.status(200).json([])
                }
            })
            .catch(err => console.log(err))
    } else {
        const cart = req.session.cart ? req.session.cart.items : []
        res.status(200).json(cart)
    }
} 

exports.deleteItemFromCart = (req, res) => {
    const product = req.body.product
    if(req.session.user) {
        req.session.user.removeFromCart(product)
        .then(result => res.status(201).json(result))
        .catch(err => console.log(err))
    } else {
        const cart = []
        if(req.session.cart) {
            cart = req.session.cart.items.findIndex()
        }
    }
}