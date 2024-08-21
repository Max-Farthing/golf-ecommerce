const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    products: [
        {
            product: { type: Object, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    userId: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'User'
    }
})

module.exports = mongoose.model("Order", orderSchema)