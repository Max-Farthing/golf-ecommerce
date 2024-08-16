const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        items: [
            {
                product: {
                    id: { type: Number, required: true },
                    name: { type: String, required: true },
                    price: { type: Number, required: true },
                },
                quantity: { type: Number, required: true },
            },
        ]
    }
})

userSchema.methods.addToCart = function(product) {
    const cartProductIndex = this.cart.items.findIndex(item => {
        return item.product === product.name
    })
    let newQuantity = 1
    const updatedCartItems = [...this.cart.items]

    if (cartProductIndex >= 0) {
        newQuantity = this.cart.items[cartProductIndex].quantity + 1
        updatedCartItems[cartProductIndex].quantity = newQuantity
    } else {
        updatedCartItems.push({
            product: product.name,
            quantity: newQuantity
        })
    }

    const updatedCart = {
        items: updatedCartItems
    }
    this.cart = updatedCart
    return this.save()
}

userSchema.methods.removeFromCart = function(product) {
    const cartProductIndex = this.cart.items.findIndex(item => {
        return item.product === product.name
    })

    let newQuantity = this.cart.items[cartProductIndex].quantity - 1
    const updatedCartItems = [...this.cart.items]

    if(newQuantity === 0) {
        updatedCartItems.splice(cartProductIndex, 1)
    } else {
        updatedCartItems[cartProductIndex].quantity = newQuantity
    }

    const updatedCart = {
        items: updatedCartItems
    }
    this.cart = updatedCart
    return this.save()
}

userSchema.methods.clearCart = function() {
    const newCart = {
        items: []
    }
    this.cart = newCart
    return this.save()
}

module.exports = mongoose.model("User", userSchema)