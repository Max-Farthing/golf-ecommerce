const express = require('express')

const shopController = require('../controllers/shop')

const router = express.Router()

router.get('/', shopController.getCart)

router.post('/item', shopController.addItemToCart)

router.delete('/delete/item', shopController.deleteItemFromCart)

router.post('/order', shopController.postOrder)

module.exports = router