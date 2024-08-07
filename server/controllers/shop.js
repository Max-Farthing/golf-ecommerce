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
    const product = req.params.item
    if (req.session.user) {
        req.session.user.removeFromCart(product)
            .then(result => res.status(201).json(result))
            .catch(err => console.log(err))
    } else {
        if (req.session.cart) {
            const cart = [...req.session.cart.items]
            const itemIndex = req.session.cart.items.findIndex(item => {
                return item.product === product.name
            })
            let newQuantity = cart[itemIndex].quantity - 1
            if (newQuantity === 0) {
                cart.splice(itemIndex, 1)
            } else {
                cart[itemIndex].quantity = newQuantity
            }
            req.session.cart.items = cart
            res.status(200).json(cart)
        }
    }
}

exports.addItemToCart = (req, res) => {
    const product = req.body.product
    if (req.session.user) {
        req.session.user.addToCart(product)
            .then(result => res.status(201).json(result))
            .catch(err => console.log(err))
    } else {
        if (req.session.cart) {
            const cart = [...req.session.cart.items]
            const itemIndex = cart.findIndex(item => {
                return item.product === product.name
            })

            if (itemIndex >= 0) {
                cart[itemIndex].quantity += 1
            } else {
                cart.push({
                    product,
                    quantity: 1
                })
            }

            req.session.cart.items = cart
            res.status(200).json(cart)
        } else {
            req.session.cart = { items: [{ product, quantity: 1 }] }
            res.status(200).json(req.session.cart.items)
        }
    }
}

exports.postOrder = (req, res) => {
    let userId = null
    let cartItems = []

    if (req.session.user) { //if we have a user
        userId = req.session.user._id
        cartItems = req.session.user.cart.items
    } else if (req.session.cart) { //if we have only a cart (guest user)
        cartItems = req.session.cart.items
    } else { //if we dont have a user and we dont have a cart
        res.status(404).json({ message: 'Must have an item in cart to place order' })
        return
    }

    const order = new Order({
        products: cartItems,
        userId: userId
    })

    order.save()
        .then(result => {
            if (req.session.user) {
                req.session.user.clearCart()
            } else {
                req.session.cart = null
            }
            res.status(202).json({ message: 'Cart ordered' })
        })
        .catch(err => console.log(err))
}

exports.getOrders = (req, res) => { //TBD

}