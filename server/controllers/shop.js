const Order = require('../models/order')
const User = require('../models/user')

exports.addItemToCart = (req, res) => {
    const productName = req.body.productName
    const userId = req.session.user._id || undefined

    Order.findOne({ userId })
        .then(found => {
            if(!found) { //if order does not exist
                const newOrder = {
                    products: [{
                        product: productName,
                        quantity: 1
                    }],
                    userId
                }
                newOrder.save()
                    .then(result => {
                        res.status(200).json({ message: "Order Created", result })
                    })
                    .catch(err => console.log(err))
            }
            //if order exists

        })
}   