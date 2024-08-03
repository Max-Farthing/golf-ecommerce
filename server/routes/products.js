const express = require('express')

const productController = require('../controllers/products')

const router = express.Router()

router.get('/clubs', productController.getClubs)

router.get('/balls', productController.getBalls)

router.get('/bags', productController.getBags)

router.get('/tech', productController.getTech)

module.exports = router